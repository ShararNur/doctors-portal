const ServiceDetail = ({ service }) => {
  return (
    <div className="col-md-4">
      <img style={{ height: '50px' }} src={service.img} alt="" />
      <h5 className="my-3">{service.name}</h5>
      <p className="text-secondary">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa ad, laborum reprehenderit
        reiciendis est molestiae!
      </p>
    </div>
  );
};

export default ServiceDetail;
