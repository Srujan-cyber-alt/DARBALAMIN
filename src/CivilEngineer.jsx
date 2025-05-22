import React, { useState, useEffect } from "react";
import "./Services.css";

const imageList = [
  "https://st.depositphotos.com/1154952/4680/i/450/depositphotos_46805869-stock-photo-crane-of-building-construction-against.jpg",
  "https://img.freepik.com/free-photo/power-plant-construction_1127-2891.jpg?semt=ais_hybrid&w=740",
];

const CivilEngineer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="civil-engineer-page">
      {/* Fullscreen Slideshow */}
      <div className="slideshow">
        <img src={imageList[currentIndex]} alt="Civil Engineering Work" />
      </div>

      {/* Text Section Below the Image */}
      <div className="text-section">
        <h1>Civil Engineering Services – Dar Alamin Contracting Company</h1>
        <p>Dar Alamin Contracting Company is a leading name in civil engineering...</p>
        <p>We specialize in infrastructure solutions, including site development, road construction, drainage, foundation systems, and structural engineering.</p>
        <p>Our approach combines innovation, sustainability, and efficiency to create future-ready projects.</p>
        <p>From geotechnical investigations to concrete works and traffic management, we deliver industry-best practices with a strong emphasis on safety and quality.</p>
        <p>As we move forward, Dar Alamin continues to invest in technology and partnerships to reshape civil engineering for the future.</p>
      </div>
    </div>
  );
};

export default CivilEngineer;