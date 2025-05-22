import React, { useState, useEffect } from "react";
import "./Services.css";

const imageList = [
  "https://www.rishabheng.com/wp-content/uploads/2018/06/rotating-equipment-design-problems.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMsLE8ddFxqfOGpurLhJ3q3dLUP6Dh1rnyguwhQul7EKVdWJNb0d7QVx86nuYwlYZTO4Q&usqp=CAU",
];

const RotatingEquipment = () => {
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
        <img src={imageList[currentIndex]} alt="Rotating Equipment Work" />
      </div>

      <div className="text-section">
        <h1>Rotating Equipment Services</h1>
        <p>We specialize in the installation, maintenance, and repair of mechanical rotating systems.</p>
        <p>Our expertise ensures optimal efficiency and longevity in industrial machinery operations.</p>
      </div>
    </div>
  );
};

export default RotatingEquipment;