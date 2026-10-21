const AppointmentShortList = ({ appointments }) => {
  return (
    <div className="p-4">
      <table class="table table-hover table-borderless table-responsive">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Schedule</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index}>
              {/* <td>{index + 1}</td> */}
              <th scope="row">{index + 1}</th>
              <td>{appointment.name}</td>
              <td>{appointment.date}</td>
              <td>
                <button className="btn btn-primary btn-sm text-white">Not visited</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentShortList;
