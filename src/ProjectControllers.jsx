import React, { useState, useEffect } from "react";
import "./Services.css";

const imageList = [
  "https://www.shutterstock.com/image-photo/professional-worker-modern-factory-using-600nw-1944508711.jpg",
  "https://thumbs.dreamstime.com/b/worker-quality-controller-27310059.jpg",
];

const ProjectController = () => {
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
        <img src={imageList[currentIndex]} alt="Project Controller Work" />
      </div>

      <div className="text-section">
        <h1>Project Controller Services</h1>
        <p>We oversee project budgets, risk management, and ensure financial controls are followed.</p>
        <p>Our controllers ensure projects are executed within financial constraints while maintaining efficiency.</p>
      </div>
    </div>
  );
};

export default ProjectController;