import React from "react";
import validate from "../../utils/validateInfo";
import useForm from "../../utils/useForm";
import "./Form.css";
import googleLogo from "../../assets/google.png";
import fbLogo from "../../assets/fb.png";
import twitterLogo from "../../assets/twitter.png";
import { Link } from "react-router-dom";

const FormLogin = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <div className="form-inputs">
          <label className="form-label">Email Id</label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>

        <div className="forgot-password">
          <a href="#">Forgot Password?</a>
        </div>

        <Link to={"/home"} className="form-input-btn" type="submit">
          Login
        </Link>
        <span className="form-input-login">
          Don't have an account? <a href="#">Sign Up</a>
        </span>

        <div className="connect">
          <div className="connect-border"></div>
          <div>Or Connect With</div>
          <div className="connect-border"></div>
        </div>

        <div className="connect-link">
          <div className="connect-link-logo">
            <Link to={"/home"}>
              <img src={googleLogo} width={30} height={30} />
            </Link>
          </div>
          <div className="connect-link-logo">
            <a href="/">
              <img src={fbLogo} width={30} height={30} />
            </a>
          </div>
          <div className="connect-link-logo">
            <a href="/">
              <img src={twitterLogo} width={30} height={30} />
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormLogin;
