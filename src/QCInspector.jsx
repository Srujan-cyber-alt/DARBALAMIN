import React, { useState, useEffect } from "react";
import "./Services.css";

const imageList = [
  "https://media.istockphoto.com/id/1180177282/photo/quality-inspectors-working-in-a-steel-factory.jpg?s=612x612&w=0&k=20&c=oSgEKiKBhNsQaZtB_5YGD21OR-N1H5E8S3rsUKnCIgs=",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLqVllug9xXCjcrioSTYNKxyx35G698b0e7GV4pq-3Lxo0O1KdZKerVPk0T4RDnDmEL3M&usqp=CAU",
];

const QCInspector = () => {
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
        <img src={imageList[currentIndex]} alt="Quality Control Inspection Work" />
      </div>

      <div className="text-section">
        <h1>Quality Control Inspector Services</h1>
        <p>Our QC inspectors ensure that products and processes meet industry standards.</p>
        <p>We perform inspections, compliance testing, and quality assurance for projects.</p>
      </div>
    </div>
  );
};

export default QCInspector;