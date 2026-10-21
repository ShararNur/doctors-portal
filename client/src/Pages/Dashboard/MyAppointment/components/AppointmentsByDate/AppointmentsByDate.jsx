import AppointmentShortList from '../AppointmentShortList/AppointmentShortList';

const AppointmentsByDate = ({ appointments, date }) => {
  console.log('appointments', appointments);
  return (
    <div className="border border-light shadow p-3 mb-5 bg-white rounded">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="text-primary">Appointments</h5>
        <p>{date.toISOString().split('T')[0]}</p>
      </div>
      {appointments.length > 0 ? (
        <AppointmentShortList appointments={appointments} />
      ) : (
        <div className="p-5">
          <h4 className="lead text-secondary text-center">No Appointments for this date</h4>
        </div>
      )}
    </div>
  );
};

export default AppointmentsByDate;
