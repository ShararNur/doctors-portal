import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, from }) => {
  const token = sessionStorage.getItem('token');
  if (!token) {
    return <Navigate to="/login" state={{ from: from }} replace />;
  }
  return children;
};

export default PrivateRoute;
