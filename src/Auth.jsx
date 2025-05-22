import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleAuthSubmit = (e) => {
    e.preventDefault();

    const userData = {
      name: isLogin ? "User" : e.target.name.value,
      email: e.target.email.value,
    };

    localStorage.setItem("user", JSON.stringify(userData)); // Store user data
    navigate("/profile"); // Redirect to Profile after login/signup
  };

  return (
    <div className="auth-container">
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>

      <form onSubmit={handleAuthSubmit}>
        {!isLogin && (
          <>
            <label>Full Name:</label>
            <input type="text" name="name" placeholder="Enter your name" required />
          </>
        )}

        <label>Email:</label>
        <input type="email" name="email" placeholder="Enter your email" required />

        <label>Password:</label>
        <input type="password" name="password" placeholder="Enter your password" required />

        {!isLogin && (
          <>
            <label>Confirm Password:</label>
            <input type="password" name="confirmPassword" placeholder="Confirm your password" required />
          </>
        )}

        <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
      </form>

      <p onClick={() => setIsLogin(!isLogin)} className="toggle-auth">
        {isLogin ? "Don't have an account? Sign up" : "Already have an account? Login"}
      </p>
    </div>
  );
};

export default Auth;