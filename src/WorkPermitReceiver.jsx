import React, { useState, useEffect } from "react";
import "./Services.css";

const imageList = [
  "https://staff.com.sa/wp-content/uploads/2024/04/3-4.webp",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9J5JKdAHKmyLGqx4YvGfk9hV6IizDRk9hekfTxjds0SgoVXy-uwrqUuUrTIUfdA1IVkU&usqp=CAU",
];

const WorkPermitReceiver = () => {
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
        <img src={imageList[currentIndex]} alt="Work Permit Receiver Process" />
      </div>

      <div className="text-section">
        <h1>Work Permit Receiver Services</h1>
        <p>Our work permit receivers ensure compliance with safety regulations and proper authorization for site activities.</p>
        <p>They coordinate approvals, verify documentation, and facilitate safe working conditions within regulated environments.</p>
      </div>
    </div>
  );
};

export default WorkPermitReceiver;