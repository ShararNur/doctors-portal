import './Contact.css';
const Contact = () => {
  return (
    <section className="my-5 contact-container py-5 text-white">
      <div className="container py-3">
        <div className="text-center mb-5">
          <h5 className="text-primary fw-semibold">CONTACT US</h5>
          <h1>Always Connect with us</h1>
        </div>
        <div className="col-md-8 mx-auto">
          <form>
            <div class="mb-3">
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email Address *"
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Subject *"
              />
            </div>
            <div class="mb-3">
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="5"
                placeholder="Your Message *"
              ></textarea>
            </div>
            <div className="text-center mt-4">
              <button type="submit" class="btn linearButton text-white">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
