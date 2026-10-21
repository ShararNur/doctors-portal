import BookingCard from '../BookingCard/BookingCard';

const BookAppointment = ({ date }) => {
  const bookingData = [
    {
      id: 1,
      subject: 'Teeth Orthodontics',
      visitingHour: '8:00 AM - 9:00 AM',
      totalSpace: '10',
    },
    {
      id: 2,
      subject: 'Cosmetic Dentistry',
      visitingHour: '10:05 AM - 11:30 AM',
      totalSpace: '10',
    },
    {
      id: 3,
      subject: 'Teeth Cleaning',
      visitingHour: '5:00 PM - 6:30 PM',
      totalSpace: '10',
    },
    {
      id: 4,
      subject: 'Cavity Protection',
      visitingHour: '7:00 AM - 8:30 AM',
      totalSpace: '10',
    },
    {
      id: 5,
      subject: 'Teeth Orthodontics',
      visitingHour: '8:00 AM - 9:00 AM',
      totalSpace: '10',
    },
    {
      id: 6,
      subject: 'Teeth Orthodontics',
      visitingHour: '8:00 AM - 9:00 AM',
      totalSpace: '10',
    },
  ];
  return (
    <section className="container my-5">
      <h2 className="text-center text-primary mb-5">
        Available Appointments on {date.toDateString()}
      </h2>
      <div className="row row-cols-1 row-cols-md-3 row-gap-5">
        {bookingData.map((booking) => (
          <BookingCard bookingData={booking} date={date} />
        ))}
      </div>
    </section>
  );
};

export default BookAppointment;
