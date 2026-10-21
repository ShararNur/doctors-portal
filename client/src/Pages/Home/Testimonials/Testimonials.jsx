import people1 from '../../../assets/images/people-1.png';
import people2 from '../../../assets/images/people-2.png';
import people3 from '../../../assets/images/people-3.png';
import Testimonial from '../Testimonial/Testimonial';
const Testimonials = () => {
  const testimonialsData = [
    {
      comment: `It is a long established fact that
 by the readable content of a lot
 layout. The point of using Lorem
a more-or-less normal distribu
to using ‘Content here, content`,
      img: people1,
      name: 'Winson Herry',
      location: 'California',
    },
    {
      comment: `It is a long established fact that
 by the readable content of a lot
 layout. The point of using Lorem
a more-or-less normal distribu
to using ‘Content here, content`,
      img: people2,
      name: 'Winson Herry',
      location: 'California',
    },
    {
      comment: `It is a long established fact that
 by the readable content of a lot
 layout. The point of using Lorem
a more-or-less normal distribu
to using ‘Content here, content`,
      img: people3,
      name: 'Winson Herry',
      location: 'California',
    },
  ];

  return (
    <section className="my-5">
      <div className="container">
        <h5 className="text-primary mb-3 fw-semibold">TESTIMONIAL</h5>
        <h1 style={{ color: '#203047' }}>
          What's Our Patients <br /> Says
        </h1>
        <div className="row row-cols-1 row-cols-md-3 g-4 my-5">
          {testimonialsData.map((testimonial) => (
            <Testimonial testimonialInfo={testimonial}></Testimonial>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
