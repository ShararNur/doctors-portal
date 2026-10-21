import { useState } from 'react';
import AppointmentForm from '../AppoinmentForm/AppointmentForm';

const BookingCard = ({ bookingData, date }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="col">
      <div className="card text-center p-4 border border-0 shadow">
        <div className="card-body">
          <h5 className="card-title text-primary">{bookingData.subject}</h5>
          <p className="card-text fw-semibold mb-1">{bookingData.visitingHour}</p>
          <p className="text-secondary mb-3" style={{ fontSize: 13 }}>
            {bookingData.totalSpace} SPACES AVAILABLE
          </p>
          <button onClick={openModal} className="btn linearButton">
            BOOK APPOINTMENT
          </button>
          <AppointmentForm
            appointmentOn={bookingData.subject}
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
            date={date}
          />
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
