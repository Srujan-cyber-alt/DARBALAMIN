import React, { useState, useEffect } from "react";
import "./Services.css";

const imageList = [
  "https://media.istockphoto.com/id/1383977365/photo/shot-of-two-businesspeople-discussing-something-on-a-digital-tablet.jpg?s=612x612&w=0&k=20&c=SfkBAA_fL4V8Q_VQld7OiEV-zjf-TSBsgEqDHTAIv20=",
  "https://media.istockphoto.com/id/1333685153/photo/shot-of-a-young-woman-using-a-telephone-and-computer-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=3bmeIlMn4fphIFef-YMrCAzJibsannIXHr02Yln9L-g=",
];

const ExecutiveSecretaries = () => {
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
        <img src={imageList[currentIndex]} alt="Executive Secretaries Work" />
      </div>

      <div className="text-section">
        <h1>Executive Secretaries Services</h1>
        <p>Our executive secretaries provide professional administrative support, managing schedules, correspondence, and high-level organizational tasks.</p>
        <p>With expertise in office management, communication, and workflow coordination, we ensure seamless operations for executives.</p>
      </div>
    </div>
  );
};

export default ExecutiveSecretaries;