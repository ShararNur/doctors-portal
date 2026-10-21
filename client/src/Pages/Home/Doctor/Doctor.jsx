import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Doctor = ({ docInfo }) => {
  return (
    <div className="col">
      <img src={docInfo.img} alt="" className="img-fluid" width={250} />
      <div className="mt-3">
        <h6 className="fw-bold">{docInfo.name}</h6>
        <span style={{ fontSize: 14 }} className="text-secondary">
          <FontAwesomeIcon icon={faPhone} color="#1cc7c1" /> {docInfo.phone}
        </span>
      </div>
    </div>
  );
};

export default Doctor;
