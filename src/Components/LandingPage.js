import React from "react";
import "./LandingPage.scss";
import LOGOcap from "../Assets/LOGOcap.png";
import mouse from "../Assets/mouse.png";
import {Link} from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landingPage">
      <nav>
        <span className="logo">
          <img alt="logo" src={LOGOcap} />
        </span>
        <span>
          <button className="signup">Sign Up</button>
        </span>
      </nav>
      <div className="main">
        <div>
          <h1>
            little <span className="blue">URL</span>. BIG{" "}
            <span className="blue">CONTROL</span>
          </h1>
        </div>
        <div className="mouse">
          <img alt="l" src={mouse} />
        </div>
        <div>
            <Link to='/login'>
          <button className="login">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
