import React, { useState, useEffect } from "react";
import "./Services.css";

const imageList = [
  "https://www.shutterstock.com/shutterstock/videos/1035105701/thumb/9.jpg?ip=x480",
  "https://www.shutterstock.com/shutterstock/videos/1035106538/thumb/7.jpg?ip=x480",
];

const Officer = () => {
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
        <img src={imageList[currentIndex]} alt="Officer Work" />
      </div>

      <div className="text-section">
        <h1>Officer Services</h1>
        <p>Our officers handle strategic planning, operations management, and administrative tasks for organizations.</p>
        <p>They oversee compliance, decision-making, and ensure smooth execution of projects.</p>
      </div>
    </div>
  );
};

export default Officer;