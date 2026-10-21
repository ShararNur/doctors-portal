const Testimonial = ({ testimonialInfo }) => {
  return (
    <div>
      <div className="col">
        <div className="card p-4 border-light shadow-sm">
          <p className="card-subtitle text-body-secondary">{testimonialInfo.comment}</p>
          <div className="card-body mt-5">
            <div className="d-flex gap-3">
              <img src={testimonialInfo.img} class="img-fluid " alt="..." width={70} />
              <div>
                <h6 className="card-title text-primary fw-semibold">{testimonialInfo.name}</h6>
                <p className="text-secondary ms-1">{testimonialInfo.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
