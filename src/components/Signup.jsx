/* Login.jsx */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css"; // We can share the clean auth styling

function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", credentials);
    alert("Logged In Successfully!");
    
    setCredentials({
      email: "",
      password: "",
    });
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h1>Welcome Back</h1>
        <p>Login to access your TradeHub account.</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={credentials.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="signup-btn">
            Login
          </button>
        </form>

        <div className="login-link">
          Don't have an account?
          <Link to="/signup"> Create Account</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;