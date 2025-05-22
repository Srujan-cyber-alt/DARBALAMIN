import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/auth", { replace: true }); // Ensures smooth redirect
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2>DAR-ALAMIN GENERAL CONTRACTING COMPANY</h2>
        <ul>
          <li><Link to="/">Home</Link></li>
         
          <li><Link to="/contact">Contact Us</Link></li>

          {!user && <li><Link to="/auth">Get in Touch</Link></li>}
          

          {user && (
            <>
              <li><Link to="/profile">Profile</Link></li>
              <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
