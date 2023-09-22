import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <ul className="breadcrumb">
      <li>
        <Link to={'/'}>Home</Link>
      </li>
      <li>
        <Link className={`capitalize active`} to={`${path}`}>
          {path}
        </Link>
      </li>
    </ul>
  );
};

export default Breadcrumb;
