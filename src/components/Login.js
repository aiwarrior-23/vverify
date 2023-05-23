// Login.js

import React, { useState } from "react";
import styles from "./Login.module.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email: ", email, "Password: ", password);
    // Implement authentication logic here
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.logo}>
          <img src="vVerify.png" alt="Your Logo" />
          
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
          <button type="submit"><Link to="/afterlogin">Log in</Link></button>
        </form>
      </div>
    </div>
  );
}

export default Login;
