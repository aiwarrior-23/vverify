// Login.js

import React, { useState } from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from 'react-router-dom'; // Import useHistory

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captchaValue, setCaptchaValue] = useState(null); // Add this
  const navigate = useNavigate (); // Create an instance of useHistory

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for email and password. If authentication successful, navigate to the after login page.
    if (email && password) {
      console.log('Email: ', email, 'Password: ', password, 'Captcha Value: ', captchaValue);

      // Navigate to '/afterlogin' route,
      // and pass the state (email)
      navigate('/afterlogin', { state: { email } });
    } else {
      console.log('Invalid email or password');
    }
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.logo}>
          <img src="x.png" alt="Your Logo" style={{width: "80%"}}/>
        </div>
        <label style={{textAlign:"center"}}>To get started, please login</label>
        <div className={styles.googleLogin}>
  <img
    className={styles.googleIcon}
    src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
    alt="Google Icon"
  />
  Continue with Google
</div>
<div className={styles.separator}>OR</div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <ReCAPTCHA
          sitekey="Your reCAPTCHA Site Key"
          onChange={handleCaptchaChange}
        />
          <button type="submit">Log in</button>
          <button><Link to="/register">Register</Link></button>
        </form>
      </div>
    </div>
  );
}

export default Login;
