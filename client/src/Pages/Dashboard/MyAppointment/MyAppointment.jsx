import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import AppointmentsByDate from './components/AppointmentsByDate/AppointmentsByDate';

const API_URL = import.meta.env.VITE_API_URL;

const MyAppointment = () => {
  // const containerStyle = {
  //   backgroundColor: '#F4FDFB',
  //   height: '100vh',
  // };

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);
  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log('date', date);
  };

  useEffect(() => {
    fetch(`${API_URL}/api/appointmentByDate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ date: selectedDate }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setAppointments(data.data);
        }
      });
  }, [selectedDate]);
  return (
    <div className="row">
      <h5 className="py-3">Appointments</h5>
      <div className="col-md-6">
        <div className="border border-light shadow p-3 mb-5 bg-white rounded">
          <div className="d-flex justify-content-center align-items-center">
            <Calendar onChange={handleDateChange} value={new Date()} />
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <AppointmentsByDate appointments={appointments} date={selectedDate} />
      </div>
    </div>
  );
};

export default MyAppointment;
