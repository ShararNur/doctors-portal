import {
  faCalendar,
  faFileLines,
  faGear,
  faRightFromBracket,
  faTableCells,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import './Sidebar.css';

const Sidebar = () => {
  const { logout } = useContext(AuthContext);

  return (
    <ul
      className="nav flex-column bg-primary fw-semibold h-100 pt-5 dashboard-sidebar"
      style={{ backgroundImage: 'linear-gradient(75deg, #19d3ae, #0fcfec)' }}
    >
      <li className="nav-item mb-3">
        <Link
          className="nav-link active text-white dashboard-sidebar-link"
          aria-current="page"
          to="/dashboard/home"
        >
          <FontAwesomeIcon icon={faTableCells} className="me-2" />
          Dashboard
        </Link>
      </li>
      <li className="nav-item mb-3">
        <Link className="nav-link text-white dashboard-sidebar-link" to="/dashboard/appointment">
          <FontAwesomeIcon icon={faCalendar} className="me-2" />
          Appointment
        </Link>
      </li>
      <li className="nav-item mb-3">
        <Link className="nav-link text-white dashboard-sidebar-link" to="/dashboard/patients">
          <FontAwesomeIcon icon={faUserGroup} className="me-2" />
          Patients
        </Link>
      </li>
      <li className="nav-item mb-3">
        <Link
          className="nav-link text-white dashboard-sidebar-link"
          to="/dashboard/prescriptions"
          aria-disabled="true"
        >
          <FontAwesomeIcon icon={faFileLines} className="me-2" />
          Prescriptions
        </Link>
      </li>
      <li className="nav-item mb-3">
        <Link
          className="nav-link text-white dashboard-sidebar-link"
          to="/dashboard/settings"
          aria-disabled="true"
        >
          <FontAwesomeIcon icon={faGear} className="me-2" />
          Setting
        </Link>
      </li>
      <li className="nav-item mt-auto mb-4">
        <button
          type="button"
          className="nav-link text-white dashboard-sidebar-link w-100 text-start"
          onClick={logout}
        >
          <FontAwesomeIcon icon={faRightFromBracket} className="me-2" />
          Log Out
        </button>
      </li>
    </ul>
  );
};

export default Sidebar;
