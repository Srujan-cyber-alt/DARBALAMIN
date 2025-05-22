import React, { useState, useEffect } from "react";
import "./Services.css";

const imageList = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwlu26FHHiVuY7S8l0cQqLOQI8S0BDilQgwg&s",
  "https://media.graphassets.com/W5rEYvUhRgKZFG3KbE1d",
];

const SiteSupervisor = () => {
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
        <img src={imageList[currentIndex]} alt="Site Supervision Work" />
      </div>

      <div className="text-section">
        <h1>Site Supervision Services</h1>
        <p>Our site supervisors ensure smooth execution of construction projects, overseeing workers and site safety.</p>
        <p>They coordinate logistics, manage schedules, and handle on-site troubleshooting efficiently.</p>
      </div>
    </div>
  );
};

export default SiteSupervisor;