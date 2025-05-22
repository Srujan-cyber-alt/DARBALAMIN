import React, { useState, useEffect } from "react";
import "./Services.css";

const imageList = [
  "https://www.investopedia.com/thmb/9n4pFDg7-_nMhLM0IrRkm0geXPM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SkilledLaborDefinitionTrainingVs.Unskilled-baa25681f89e4d748130a964e5e23e54.jpg",
  "https://img2.exportersindia.com/product_images/bc-full/2023/9/4140574/semi-skilled-labour-services-1688395418-6964039.jpg",
];

const SemiSkilledLabour = () => {
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
        <img src={imageList[currentIndex]} alt="Semi-Skilled Labour Work" />
      </div>

      <div className="text-section">
        <h1>Semi-Skilled Labour Services</h1>
        <p>Our semi-skilled labourers perform essential support tasks in construction, manufacturing, and industrial settings.</p>
        <p>They contribute to project execution by handling materials, equipment, and assisting skilled workers.</p>
      </div>
    </div>
  );
};

export default SemiSkilledLabour;