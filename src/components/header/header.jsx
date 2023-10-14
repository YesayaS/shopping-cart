import { Link } from "react-router-dom";

import "./header.css";

const Headers = () => {
  return (
    <div className="header">
      <div className="header__logo">logo</div>
      <ul className="tabs">
        <li className="tab active">
          <Link to="/">home</Link>
        </li>
        <li className="tab">
          <Link to="/shop">shop</Link>
        </li>
        <li className="tab">
          <button>about us</button>
        </li>
      </ul>
      <div className="header__cart">cart</div>
    </div>
  );
};

export { Headers };
