import React, { useState, useEffect } from "react";
import "./Services.css";

const imageList = [
  "https://media.istockphoto.com/id/1428071835/photo/man-an-electrical-technician-working-in-a-switchboard-with-fuses.jpg?s=612x612&w=0&k=20&c=1oZ_VzcNYOmPVbpe-RZ6WRZAL3WibNbASH1LtP1sdK0=",
  "https://media.gettyimages.com/id/1487985023/video/caucasian-electrical-engineer-is-using-a-clamp-meter-to-check-the-voltage-and-current-in-the.jpg?s=640x640&k=20&c=xp3CF4eYsB--yDl_AmQUwNNYCzcLgy0AcBC2Vxz8L1M=",
];

const ElectricalEngineer = () => {
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
        <img src={imageList[currentIndex]} alt="Electrical Engineering Work" />
      </div>

      <div className="text-section">
        <h1>Electrical Engineering Services</h1>
        <p>We design and implement electrical systems for industrial, commercial, and residential structures.</p>
        <p>Our solutions ensure safety, efficiency, and compliance with modern energy regulations.</p>
      </div>
    </div>
  );
};

export default ElectricalEngineer;