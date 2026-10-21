import { useNavigate } from 'react-router-dom';
import chair from './../../../assets/images/chair.png';
const HeaderMain = () => {
  const navigate = useNavigate();
  return (
    <main className="row d-flex align-items-center" style={{ height: '600px' }}>
      <div className="col-md-4 offset-md-1 mb-2">
        <h1 style={{ color: ' #203047' }}>
          Your New Smile <br /> Starts Here
        </h1>
        <p className="text-secondary my-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. In veniam voluptatum voluptas
          error vitae eos.
        </p>
        <button
          className="btn linearButton text-white mt-2"
          onClick={() => {
            navigate('/appointment');
          }}
        >
          GET APPOINTMENT
        </button>
      </div>
      <div className="col-md-6">
        <img className="img-fluid" src={chair} alt="" />
      </div>
    </main>
  );
};

export default HeaderMain;
