import cavity from '../../../assets/images/cavity.png';
import fluoride from '../../../assets/images/fluoride.png';
import whitening from '../../../assets/images/whitening.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
const Services = () => {
  const serviceData = [
    {
      name: 'Fluoride Treatment',
      img: fluoride,
    },
    {
      name: 'Cavity Filing',
      img: cavity,
    },
    {
      name: 'Teeth Whitening',
      img: whitening,
    },
  ];
  return (
    <section className="text-center my-5 py-5">
      <h5 style={{ color: '#5FC7C7' }}>OUR SERVICES</h5>
      <h1 style={{ color: '#203047' }}>Services We Provide</h1>
      <div className="d-flex justify-content-center">
        <div className="row w-75 mt-5 pt-5">
          {serviceData.map((service) => (
            <ServiceDetail service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
