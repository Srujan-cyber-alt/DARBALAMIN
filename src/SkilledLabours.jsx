import React, { useState, useEffect } from "react";
import "./Services.css";

const imageList = [
  "https://www.redpathcpas.com/hubfs/Blog%20Images/Attracting%20Manufacturing%20Labor%20Without%20the%20Wage%20War%20%E2%80%93%20Redpath.jpg",
  "https://5.imimg.com/data5/SELLER/Default/2024/7/437597159/RA/GX/BM/96737803/unskilled-labour-service-500x500.jpg",
];

const SkilledLabour = () => {
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
        <img src={imageList[currentIndex]} alt="Skilled Labour Work" />
      </div>

      <div className="text-section">
        <h1>Skilled Labour Services</h1>
        <p>Our skilled labour workforce provides expertise in construction, welding, machinery operations, and specialized trades.</p>
        <p>Each worker undergoes extensive training to ensure precision, safety, and efficiency in their craft.</p>
      </div>
    </div>
  );
};

export default SkilledLabour;