import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';

const PrivateRoute = ({ children, from }) => {
  const { loggedInUser, authLoading } = useContext(AuthContext);

  if (authLoading) {
    return null;
  }

  if (!loggedInUser) {
    return <Navigate to="/login" state={{ from: from }} replace />;
  }

  return children;
};

export default PrivateRoute;
