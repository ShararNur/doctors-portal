import { faFacebookF, faGooglePlusG, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FooterCol from '../FooterCol/FooterCol';
import './Footer.css';
const Footer = () => {
  const noNamed = [
    { name: 'Emergency Dental Care', link: '/emergency' },
    { name: 'Check Up', link: '/checkup' },
    { name: 'Treatment of Personal Diseases', link: '/personal-treatment' },
    { name: 'Tooth Extraction', link: '/tooth-extract' },
    { name: 'Check Up', link: '/checkup' },
  ];
  const services = [
    { name: 'Emergency Dental Care', link: '/emergency' },
    { name: 'Check Up', link: '/checkup' },
    { name: 'Treatment of Personal Diseases', link: '/personal-treatment' },
    { name: 'Tooth Extraction', link: '/tooth-extract' },
    { name: 'Check Up', link: '/checkup' },
    { name: 'Check Up', link: '/checkup' },
    { name: 'Check Up', link: '/checkup' },
  ];
  const oralHealth = [
    { name: 'Emergency Dental Care', link: '/emergency' },
    { name: 'Check Up', link: '/checkup' },
    { name: 'Treatment of Personal Diseases', link: '/personal-treatment' },
    { name: 'Tooth Extraction', link: '/tooth-extract' },
    { name: 'Check Up', link: '/checkup' },
    { name: 'Check Up', link: '/checkup' },
    { name: 'Check Up', link: '/checkup' },
  ];
  const ourAddress = [
    { name: 'New York - 101010 Hudson', link: '//google.com/map' },
    { name: ' Yards', link: '//google.com/map' },
  ];
  return (
    <section className="footer-area my-5">
      <div className="container pt-5 text-secondary">
        <div className="row py-5">
          <FooterCol key={1} menuTitle={'.'} menuItems={noNamed} />
          <FooterCol key={2} menuTitle={'Services'} menuItems={services} />
          <FooterCol key={3} menuTitle={'Oral Health'} menuItems={oralHealth} />
          <FooterCol key={4} menuTitle={'Our Address'} menuItems={ourAddress}>
            <ul className="list-inline social-media mt-3">
              <li className="list-inline-item">
                <a href="//facebook.com">
                  <FontAwesomeIcon icon={faFacebookF} className="icon active-icon" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="//google.com">
                  <FontAwesomeIcon icon={faGooglePlusG} className="icon" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="//twitter.com">
                  <FontAwesomeIcon icon={faTwitter} className="icon" />
                </a>
              </li>
            </ul>
            <div className="mt-5">
              <h6>Call Now</h6>
              <button className="btn linearButton">+2025550295</button>
            </div>
          </FooterCol>
        </div>
        <p className="text-center">Copyright {new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </section>
  );
};

export default Footer;
