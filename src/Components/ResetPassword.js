import React from "react";
import "./ResetPassword.scss";
import resetPassword from '../Assets/resetPassword.png';
import logowhite from "../Assets/logowhite.png";
import {Link} from 'react-router-dom';


const ResetPassword = () => {
  return (
    <div className="reset-container">
      <div className="resetlogo">
        <img alt="Company logo" src={logowhite} />
      </div>
      <div className="reset-card">
        <section className="card-images">
          <section>
            <div className="card-undrawImage">
              <img src={resetPassword} alt="" />
            </div>
          </section>
        </section>

        <section className="card-details">
          <h1 className="reset-title">Reset Password</h1>
          <p>
            A Verification mail will be sent to your email address. Follow the
            instructions in the email to reset your password
          </p>

          {/* <label for="email">Email</label> */}
          <input type="email" id="email" placeholder="Email" />

          <button className="reset-send">Send</button>

          <Link to='/login'>
          <a >Back to Login</a>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default ResetPassword;
