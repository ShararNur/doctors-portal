import treatment from '../../../assets/images/treatment.png';
const FeaturedService = () => {
  return (
    <section className="my-5 pb-0 pb-md-5">
      <div className="container mb-5">
        <div className="row mb-5">
          <div className="col-md-5 mb-4 m-md-0">
            <img src={treatment} alt="" className="img-fluid" />
          </div>
          <div className="col-md-7 align-self-center">
            <h1 style={{ color: '#203047' }} className="mb-5">
              Exceptional Dental <br /> Care, On Your Terms
            </h1>
            <p className="text-secondary my-5">
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout. The point of using Lorem Ipsumis that it has a
              more-or-less normal distribution of letters,as opposed to using ‘Content here, content
              here’, making it look like readable English. Many desktop publishing packages and web
              page
            </p>
            <button className="btn linearButton mt-3">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedService;
