import { useEffect, useState } from 'react';
import AppointmentDataTable from '../AppointmentDataTable/AppointmentDataTable';

const Patient = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/appointments')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setAppointments(data.data);
        }
      });
  }, []);

  return (
    <div>
      <h5 className="py-3">Patients</h5>
      {appointments.length > 0 ? (
        <div className="border border-light shadow p-3 mb-5 bg-white rounded">
          <h5 className="text-primary ms-3 mt-3">All Patients</h5>
          <AppointmentDataTable appointments={appointments} />
        </div>
      ) : (
        <div className="p-5">
          <h4 className="lead text-secondary text-center">No Appointments</h4>
        </div>
      )}
    </div>
  );
};

export default Patient;
