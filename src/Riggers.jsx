import React, { useState, useEffect } from "react";
import "./Services.css";

const imageList = [
  "https://media.istockphoto.com/id/636032898/photo/offshore-jack-up-rig-in-the-middle-of-the-sea.jpg?s=612x612&w=0&k=20&c=MWNJbJydU14mPgGIrL9bZbHv1Jq8cmKmJGWhpnzzk7U=",
  "https://www.shutterstock.com/shutterstock/videos/1081384670/thumb/1.jpg?ip=x480",
];

const Riggers = () => {
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
        <img src={imageList[currentIndex]} alt="Rigger Work" />
      </div>

      <div className="text-section">
        <h1>Rigger Services</h1>
        <p>Our riggers are responsible for assembling, securing, and moving heavy equipment safely.</p>
        <p>They work in construction, shipyards, and industrial settings to ensure load handling efficiency.</p>
      </div>
    </div>
  );
};

export default Riggers;