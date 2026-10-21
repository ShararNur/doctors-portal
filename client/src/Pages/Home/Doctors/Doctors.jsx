import doctor from '../../../assets/images/doctor-small.png';
import Doctor from '../Doctor/Doctor';
const Doctors = () => {
  const doctorsInfo = [
    { img: doctor, name: 'Dr. Caudi', phone: '+61 452 200 126' },
    { img: doctor, name: 'Dr. Caudi', phone: '+61 452 200 126' },
    { img: doctor, name: 'Dr. Caudi', phone: '+61 452 200 126' },
  ];
  return (
    <section className="my-5 container text-center">
      <h5 className="text-primary text-center mb-5 fw-semibold">Our Doctors</h5>
      <div className="row row-col-1 row-col-md-3 g-4 mt-3">
        {doctorsInfo.map((doctor) => (
          <Doctor docInfo={doctor}></Doctor>
        ))}
      </div>
    </section>
  );
};

export default Doctors;
