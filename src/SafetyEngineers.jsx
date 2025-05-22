import React, { useState, useEffect } from "react";
import "./Services.css";

const imageList = [
  "https://media.istockphoto.com/id/2007639464/video/construction-project-management-and-man-on-tablet-with-team-for-maintenance-inspection-or.jpg?b=1&s=640x640&k=20&c=O4m7JCNipHRYvNcEbIRAuDQ79s9ZVuw-xLS0ajy8__Q=",
  "https://t4.ftcdn.net/jpg/03/51/52/61/360_F_351526174_EJSazJjyd12klMvuOc6ZkTqpmnvN0Na4.jpg",
];

const SafetyEngineer = () => {
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
        <img src={imageList[currentIndex]} alt="Safety Engineering Work" />
      </div>

      <div className="text-section">
        <h1>Safety Engineering Services</h1>
        <p>Our safety engineers ensure workplace security, risk management, and compliance with regulations.</p>
        <p>We implement safety procedures, conduct hazard assessments, and train employees on safety measures.</p>
      </div>
    </div>
  );
};

export default SafetyEngineer;