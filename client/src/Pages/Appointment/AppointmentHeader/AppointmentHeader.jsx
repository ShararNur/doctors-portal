import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import chair from './../../../assets/images/chair.png';

const AppointmentHeader = ({ handleDateChange }) => {
  return (
    <main className="row d-flex align-items-center" style={{ height: '600px' }}>
      <div className="col-md-4 offset-md-1 mb-2">
        <h1 style={{ color: ' #203047' }} className="mb-4">
          Appointment
        </h1>
        <Calendar onChange={handleDateChange} value={new Date()} />
      </div>
      <div className="col-md-6">
        <img className="img-fluid" src={chair} alt="" />
      </div>
    </main>
  );
};

export default AppointmentHeader;
