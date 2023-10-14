import { Link } from "react-router-dom";
import { Headers } from "../../components/header/header";

import "./home.css";

const Home = () => {
  return (
    <>
      <Headers />
      <div className="container">
        <div className="container__image">
          <img
            src="https://images.pexels.com/photos/6311544/pexels-photo-6311544.jpeg"
            alt=""
          />
        </div>
        <div className="container__overlay">
          <p>Shop Smarter, Not Harder</p>
          <p> Explore Endless Possibilities!</p>
          <Link to="/shop">Shop Now</Link>
        </div>
      </div>
    </>
  );
};

export { Home };
