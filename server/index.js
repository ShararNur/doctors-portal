const express = require('express');
const cors = require('cors');
const { connectDB, getCollection } = require('./db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World 123!');
});

app.post('/api/addAppointment', async (req, res) => {
  try {
    const appointment = req.body;
    console.log('hit the post api', appointment);

    const appointmentCollection = getCollection('appointments');
    const result = await appointmentCollection.insertOne(appointment);

    return res.status(201).json({
      success: true,
      message: 'Appointment added successfully',
      data: {
        _id: result.insertedId,
        ...appointment,
      },
    });
  } catch (error) {
    console.error('Error adding appointment:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to add appointment',
      error: error.message,
    });
  }
});

app.post('/api/appointmentByDate', async (req, res) => {
  try {
    const date = req.body;
    console.log('hit the post api', date.date);

    const appointmentCollection = getCollection('appointments');
    const result = await appointmentCollection.find({ date: date.date }).toArray();

    return res.status(200).json({
      success: true,
      message: 'Appointments retrieved successfully',
      data: result,
    });
  } catch (error) {
    console.error('Error retrieving appointments:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve appointments',
      error: error.message,
    });
  }
});

app.get('/api/dashboard-summary', async (req, res) => {
  const todayStartParam = req.query.todayStart;
  const tomorrowStartParam = req.query.tomorrowStart;
  const todayStart = new Date(todayStartParam);
  const tomorrowStart = new Date(tomorrowStartParam);

  if (
    typeof todayStartParam !== 'string' ||
    typeof tomorrowStartParam !== 'string' ||
    Number.isNaN(todayStart.getTime()) ||
    Number.isNaN(tomorrowStart.getTime()) ||
    todayStart >= tomorrowStart
  ) {
    return res.status(400).json({
      success: false,
      message: 'Valid todayStart and tomorrowStart query parameters are required',
    });
  }

  try {
    const appointmentCollection = getCollection('appointments');
    const [summary] = await appointmentCollection
      .aggregate([
        {
          $addFields: {
            appointmentDate: {
              $convert: {
                input: '$date',
                to: 'date',
                onError: null,
                onNull: null,
              },
            },
            patientEmail: {
              $toLower: {
                $trim: {
                  input: {
                    $convert: {
                      input: '$email',
                      to: 'string',
                      onError: '',
                      onNull: '',
                    },
                  },
                },
              },
            },
          },
        },
        {
          $facet: {
            appointments: [
              {
                $group: {
                  _id: null,
                  totalAppointments: { $sum: 1 },
                  pendingAppointments: {
                    $sum: {
                      $cond: [{ $gte: ['$appointmentDate', tomorrowStart] }, 1, 0],
                    },
                  },
                  todaysAppointments: {
                    $sum: {
                      $cond: [
                        {
                          $and: [
                            { $gte: ['$appointmentDate', todayStart] },
                            { $lt: ['$appointmentDate', tomorrowStart] },
                          ],
                        },
                        1,
                        0,
                      ],
                    },
                  },
                },
              },
            ],
            patients: [
              { $match: { patientEmail: { $ne: '' } } },
              { $group: { _id: '$patientEmail' } },
              { $count: 'totalPatients' },
            ],
          },
        },
      ])
      .toArray();

    const appointmentCounts = summary.appointments[0] || {};
    const patientCounts = summary.patients[0] || {};

    return res.status(200).json({
      success: true,
      data: {
        pendingAppointments: appointmentCounts.pendingAppointments || 0,
        todaysAppointments: appointmentCounts.todaysAppointments || 0,
        totalAppointments: appointmentCounts.totalAppointments || 0,
        totalPatients: patientCounts.totalPatients || 0,
      },
    });
  } catch (error) {
    console.error('Error retrieving dashboard summary:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve dashboard summary',
      error: error.message,
    });
  }
});

app.get('/api/appointments', async (req, res) => {
  try {
    const appointmentCollection = getCollection('appointments');
    const result = await appointmentCollection.find({}).toArray();

    return res.status(200).json({
      success: true,
      message: 'Appointments retrieved successfully',
      data: result,
    });
  } catch (error) {
    console.error('Error retrieving appointments:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve appointments',
      error: error.message,
    });
  }
});
// Queries for a movie that has a title value of 'Back to the Future'
// const query = { title: 'Back to the Future' };
// const movie = await movies.findOne(query);
// console.log(movie);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });
});
