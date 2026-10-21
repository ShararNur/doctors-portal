import { useEffect, useState } from 'react';

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [summary, setSummary] = useState({
    pendingAppointments: 0,
    todaysAppointments: 0,
    totalAppointments: 0,
    totalPatients: 0,
  });
  const [summaryError, setSummaryError] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/api/appointments')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setAppointments(data.data);
        }
      });

    const now = new Date();
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const tomorrowStart = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const params = new URLSearchParams({
      todayStart: todayStart.toISOString(),
      tomorrowStart: tomorrowStart.toISOString(),
    });

    fetch(`http://localhost:3000/api/dashboard-summary?${params}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to load dashboard summary');
        }
        return res.json();
      })
      .then((data) => {
        if (!data.success) {
          throw new Error(data.message || 'Failed to load dashboard summary');
        }
        setSummary(data.data);
      })
      .catch((error) => {
        console.error('Error loading dashboard summary:', error);
        setSummaryError('Dashboard summary could not be loaded.');
      });
  }, []);

  const appointmentDate = (appointment) => {
    const date = new Date(appointment.date);
    return Number.isNaN(date.getTime()) ? null : date;
  };

  return (
    <div>
      <h5 className="py-3">Dashboard</h5>
      {summaryError && (
        <div className="alert alert-danger" role="alert">
          {summaryError}
        </div>
      )}
      <div className="row">
        <div className="col-md-3">
          <div className="card text-bg-danger border-0" style={{ backgroundColor: '#F1536E' }}>
            <div className="card-body d-flex justify-content-around align-items-center">
              <h5 className="card-title fs-1 me-4">{summary.pendingAppointments}</h5>
              <p className="card-text">
                Pending <br /> Appointments
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div
            className="card text-bg-primary text-white border-0"
            style={{ backgroundColor: '#3DA5F4' }}
          >
            <div className="card-body d-flex justify-content-around align-items-center">
              <h5 className="card-title fs-1 me-4">{summary.todaysAppointments}</h5>
              <p className="card-text">
                Today's <br />
                Appointments
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card mb-3 text-white border-0" style={{ backgroundColor: '#00C689' }}>
            <div className="card-body d-flex justify-content-around align-items-center">
              <h5 className="card-title fs-1 me-4">{summary.totalAppointments}</h5>
              <p className="card-text">
                Total <br /> Appointments
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white border-0" style={{ backgroundColor: '#FDA006' }}>
            <div className="card-body d-flex justify-content-around align-items-center">
              <h5 className="card-title fs-1 me-4">{summary.totalPatients}</h5>
              <p className="card-text">
                Total <br /> Patients
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="border border-light shadow p-3 mb-5 bg-white rounded">
            <h5 className="text-primary ms-3 mt-3">Recent Appointments</h5>
            <div className="p-2">
              <table className="table table-hover table-borderless table-responsive text-center">
                <thead>
                  <tr>
                    <th scope="col">Sr. No</th>
                    <th scope="col">Date</th>
                    <th scope="col">Time</th>
                    <th scope="col">Name</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Prescription</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((appointment, index) => {
                    const date = appointmentDate(appointment);

                    return (
                      <tr key={appointment._id}>
                        <td>{index + 1}</td>
                        <td>{date ? date.toLocaleDateString() : '-'}</td>
                        <td>
                          {date
                            ? date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
                            : '-'}
                        </td>
                        <td>{appointment.name}</td>
                        <td>{appointment.number}</td>
                        <td>
                          <button className="btn btn-sm btn-primary text-white">View</button>
                        </td>
                        <td>
                          <button className="btn btn-sm btn-success me-2">Accept</button>
                          <button className="btn btn-sm btn-danger">Reject</button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
