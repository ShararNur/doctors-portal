import doctor from '../../../assets/images/doctor.png';
import './MakeAppointment.css';
const MakeAppointment = () => {
  return (
    <section className="make-appointment">
      <div className="container">
        <div className="row">
          <div className="col-md-5 d-none d-md-block">
            <img src={doctor} alt="" />
          </div>
          <div className="col-md-7 text-white py-5 z-1">
            <h5 style={{ color: '#6ACECE' }}>APPOINTMENT</h5>
            <h1 className="my-4">
              Make an appointment <br /> Today
            </h1>
            <p className="mb-5">
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its
            </p>
            <button className="btn linearButton mt-3">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
