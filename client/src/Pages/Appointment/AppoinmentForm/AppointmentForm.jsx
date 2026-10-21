import { useForm } from 'react-hook-form';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '45%',
  },
};

Modal.setAppElement('#root');
const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.service = appointmentOn;
    data.date = date;
    data.created = new Date();

    fetch('http://localhost:3000/api/addAppointment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((resData) => {
        if (resData.success) {
          alert('Appointment created successfully');
          reset();
          closeModal();
        }
      });
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h5 className="text-primary text-center mt-3">{appointmentOn}</h5>
        <small className="text-secondary text-center d-block mb-3">On {date.toDateString()}</small>
        <form onSubmit={handleSubmit(onSubmit)} className="px-5 py-4">
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              id="InputName"
              placeholder="Your Name"
              {...register('name', { required: true })}
            />
            {errors.name && <span>This field is required</span>}
          </div>
          <div class="mb-3">
            <input
              type="tel"
              class="form-control"
              id="InputPhone"
              placeholder="Phone Number"
              {...register('number', { required: true })}
            />
            {errors.number && <span>This field is required</span>}
          </div>
          <div class="mb-3">
            <input
              type="email"
              class="form-control"
              id="InputEmail1"
              placeholder="Email"
              {...register('email', { required: true })}
            />
            {errors.email && <span>This field is required</span>}
          </div>
          <div class="row mb-3">
            {/* <input
              type="date"
              class="form-control"
              id="InputDate"
              placeholder="mm/dd/yy"
              {...register('date', { required: true })}
            /> */}
            <div className="col">
              <select
                class="form-select"
                aria-label="Default select example"
                {...register('gender', { required: true })}
              >
                <option selected>Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && <span>This field is required</span>}
            </div>
            <div className="col">
              <input
                type="number"
                class="form-control"
                placeholder="Your Age"
                {...register('age', { required: true })}
              />
              {errors.age && <span>This field is required</span>}
            </div>
            <div className="col">
              <input
                type="number"
                class="form-control"
                placeholder="Weight"
                {...register('weight', { required: true })}
              />
              {errors.weight && <span>This field is required</span>}
            </div>
          </div>
          <div className="text-end">
            <button type="submit" class="btn linearButton px-5">
              SEND
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AppointmentForm;
