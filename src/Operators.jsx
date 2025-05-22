import React, { useState, useEffect } from "react";
import "./Services.css";

const imageList = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZrIhNHJJcCKINmGHbG02cKZV3MWXhC1vEDg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdVg68CjidWTOIw-Kkit9B3Mg1bV1ClLNPag&s",
];

const Operator = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="service-page">
      <div className="slideshow">
        <img src={imageList[currentIndex]} alt="Operator Work" />
      </div>

      <div className="text-section">
        <h1>Operator Services</h1>
        <p>Our operators specialize in handling industrial machinery, equipment monitoring, and ensuring operational efficiency.</p>
        <p>They work across manufacturing, construction, and technical fields to support key processes.</p>
      </div>
    </div>
  );
};

export default Operator;