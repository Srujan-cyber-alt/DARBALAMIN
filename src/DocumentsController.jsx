import React, { useState, useEffect } from "react";
import "./Services.css";

const imageList = [
  "https://cdn.seeklearning.com.au/media/images/career-guide/module/document-controller.png",
  "https://coreprojectadvisory.com.au/wp-content/uploads/2023/06/Importance-of-a-Document-Controller.png",
];

const DocumentController = () => {
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
        <img src={imageList[currentIndex]} alt="Document Controller Work" />
      </div>

      <div className="text-section">
        <h1>Document Control Services</h1>
        <p>We manage critical documents, ensuring proper storage, security, and regulatory compliance.</p>
        <p>Our systems streamline document workflows and prevent data loss.</p>
      </div>
    </div>
  );
};

export default DocumentController;