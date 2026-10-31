import { useEffect, useState } from 'react';

const API_URL = import.meta.env.VITE_API_URL;

const Prescription = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/api/appointments`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setAppointments(data.data);
          ``;
        }
      });
  }, []);
  return (
    <div>
      <h5 className="py-3">Prescriptions</h5>
      {appointments.length > 0 ? (
        <div className="border border-light shadow p-3 mb-5 bg-white rounded">
          <h5 className="text-primary ms-3 mt-3">All Prescriptions</h5>
          <div className="p-2">
            <table class="table table-hover table-borderless table-responsive">
              <thead>
                <tr>
                  <th scope="col">Sr. No</th>
                  <th scope="col">Date</th>
                  <th scope="col">Name</th>
                  <th scope="col">Contact</th>
                  <th scope="col">Prescription</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{new Date(appointment.date).toLocaleDateString()}</td>
                    <td>{appointment.name}</td>
                    <td>{appointment.number}</td>
                    <td>
                      <button className="btn btn-sm btn-primary text-white">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="p-5">
          <h4 className="lead text-secondary text-center">No Prescriptions Found</h4>
        </div>
      )}
    </div>
  );
};

export default Prescription;
