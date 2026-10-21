import { faClock, faLocationDot, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import InfoCard from '../InfoCard/InfoCard';

const infoData = [
  {
    title: 'Opening Hours',
    description: 'We are open 7 days',
    icon: faClock,
    background: 'primary',
  },
  {
    title: 'Visit our location',
    description: 'Brooklyn, NY 10036, United States',
    icon: faLocationDot,
    background: 'dark',
  },
  {
    title: 'Contact us now',
    description: '+000 123 456789',
    icon: faPhoneVolume,
    background: 'primary',
  },
];

const BusinessInfo = () => {
  return (
    <section className="d-flex justify-content-center">
      <div className="row w-75">
        {infoData.map((info) => (
          <InfoCard info={info}></InfoCard>
        ))}
      </div>
    </section>
  );
};

export default BusinessInfo;
