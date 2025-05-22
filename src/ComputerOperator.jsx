import React, { useState, useEffect } from "react";
import "./Services.css";

const imageList = [
  "https://t4.ftcdn.net/jpg/03/99/39/93/360_F_399399314_hrXIbHCVduENo7OQCwfz0MpLIb0bGYZo.jpg",
  "https://img.freepik.com/free-photo/smiling-african-american-businessman-working-his-computer_171337-7255.jpg?semt=ais_hybrid&w=740",
];

const ComputerOperator = () => {
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
        <img src={imageList[currentIndex]} alt="Computer Operator Work" />
      </div>

      <div className="text-section">
        <h1>Computer Operator Services</h1>
        <p>Our computer operators manage system processes, troubleshoot technical issues, and ensure smooth operations of digital environments.</p>
        <p>Expertise includes data entry, software management, and system monitoring.</p>
      </div>
    </div>
  );
};

export default ComputerOperator;