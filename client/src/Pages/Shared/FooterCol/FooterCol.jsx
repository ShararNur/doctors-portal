import { Link } from 'react-router-dom';

const FooterCol = (props) => {
  return (
    <div className="col-md-3">
      <h5 className="text-primary fw-semibold">{props.menuTitle}</h5>
      <ul className="list-unstyled mt-4">
        {props.menuItems.map((item, index) => (
          <li key={index}>
            <Link to={item.link} className="text-secondary text-decoration-none">
              {item.name}
            </Link>
          </li>
        ))}
        {props.children && props.children}
      </ul>
    </div>
  );
};

export default FooterCol;
