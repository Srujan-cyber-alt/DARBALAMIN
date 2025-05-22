import React, { useState, useEffect } from "react";
import "./Services.css";

const imageList = [
  "https://media.istockphoto.com/id/1170643112/photo/professional-engineer-works-on-a-computer-with-a-3d-cad-software-and-tests-the-electric-car.jpg?s=612x612&w=0&k=20&c=ghQEskndFtlWLOCcShsOv4t9_8Pj-W9eUEFdlWj6O8U=",
  "https://media.istockphoto.com/id/1337013777/photo/architect-drawing-on-a-blueprint-on-architectural-project-at-the-construction-site-at-office.jpg?s=612x612&w=0&k=20&c=f7i0hbjnYX9Fw8K8eWWbEvZS872bwahTfdlBfUVNcBE=",
];

const AutoCadOperator = () => {
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
        <img src={imageList[currentIndex]} alt="AutoCAD Operator Work" />
      </div>

      <div className="text-section">
        <h1>AutoCAD Operator Services</h1>
        <p>We create detailed technical drawings for architecture, engineering, and manufacturing industries.</p>
        <p>Precision and accuracy define our drafting expertise.</p>
      </div>
    </div>
  );
};

export default AutoCadOperator;