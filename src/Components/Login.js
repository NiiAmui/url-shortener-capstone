import React from "react";
import "./Login.scss";
import loginImage from "../Assets/login.png";
import {Link} from 'react-router-dom';
import logowhite from "../Assets/logowhite.png";



const Login = () => {
  return (
    <div className="login-container">

      <div className="loginlogo">
      <img  alt="Company logo" src={logowhite} />
      </div>
    
      <div className="login-card">
          
        <section className="card-images">
         
            <div className="cardUndrawImage">
              <div className="image">
                <img src={loginImage} alt="" />
              </div>
              <div className="paragraph">
                <h4 className="login-start">
                  Start for Free <br /> Get an attractive Offer
                </h4>
              </div>
            </div>
          
        </section>


        <section className="card-details">
          <h1 className="login-title">Login </h1>
          <button className="google-btn">
            <i class="fab fa-google"></i>
            <p>Sign in with Google</p>
          </button>
          <button className="facebook-btn">
            <i class="fab fa-facebook-f"></i>
            <p>Sign in with Facebook</p>
          </button>

          <div className="hr">
            <hr/>
          </div>

          <input type="text" placeholder="Email"></input>
          <input type="password" placeholder="password"></input>

          <Link to="/main">
          <button className="signIn">Sign In</button>
          </Link>

          <Link to='/resetpassword'>
          <a href='as'>Forgot Password?</a>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Login;
