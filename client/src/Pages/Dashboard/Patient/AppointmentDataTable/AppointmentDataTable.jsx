const AppointmentDataTable = ({ appointments }) => {
  return (
    <div className="p-2">
      <table class="table table-hover table-borderless table-responsive">
        <thead>
          <tr>
            <th scope="col">Sr. No</th>
            <th scope="col">Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Age</th>
            <th scope="col">Weight</th>
            <th scope="col">Contact</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{appointment.name}</td>
              <td>{appointment.gender.charAt(0).toUpperCase() + appointment.gender.slice(1)}</td>
              <td>{appointment.age}</td>
              <td>{appointment.weight}Kg</td>
              <td>{appointment.number}</td>
              <td>{appointment.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentDataTable;
