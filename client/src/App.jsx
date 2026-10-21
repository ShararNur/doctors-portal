import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import DashboardLayout from './Layout/DashboardLayout';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import MyAppointment from './Pages/Dashboard/MyAppointment/MyAppointment';
import Patient from './Pages/Dashboard/Patient/Patient/Patient';
import Prescription from './Pages/Dashboard/Prescription/Prescription';
import Setting from './Pages/Dashboard/Setting/Setting';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute from="/dashboard">
              <DashboardLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<Navigate to="home" replace />} />
          <Route path="appointment" element={<MyAppointment />} />
          <Route path="patients" element={<Patient />} />
          <Route path="prescriptions" element={<Prescription />} />
          <Route path="settings" element={<Setting />} />
          <Route path="home" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
