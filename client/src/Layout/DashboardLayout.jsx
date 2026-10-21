import { Outlet } from 'react-router-dom';
import Sidebar from '../Pages/Dashboard/Sidebar/Sidebar';

const DashboardLayout = () => {
  const containerStyle = {
    backgroundColor: '#F4FDFB',
    height: '100vh',
  };
  return (
    <div style={containerStyle} className="container-fluid row">
      <div className="col-md-2">
        <Sidebar />
      </div>
      <div className="col-md-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
