import React, { useState, useEffect } from "react";
import "./Services.css";

const imageList = [
  "https://media.istockphoto.com/id/1093678798/photo/stationary-engineer-at-work.jpg?s=612x612&w=0&k=20&c=lSKIIxxUZoInuWX8H7UtaBA9Mbm4W86sMYuvGhnskkM=",
  "https://media.istockphoto.com/id/1039705312/photo/group-of-industrial-workers-in-a-refinery-oil-processing-equipment-and-machinery.jpg?s=612x612&w=0&k=20&c=zCFSBkNKEUiobFQuXSnvXJM2BeFSEb4tOd1dWn8hGzY=",
];

const PipingEngineer = () => {
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
        <img src={imageList[currentIndex]} alt="Piping Engineering Work" />
      </div>

      <div className="text-section">
        <h1>Piping Engineering Services</h1>
        <p>We design and oversee industrial piping systems for efficiency, durability, and safety.</p>
        <p>Our team works with complex materials and fluid mechanics to ensure optimal pipeline performance.</p>
      </div>
    </div>
  );
};

export default PipingEngineer;