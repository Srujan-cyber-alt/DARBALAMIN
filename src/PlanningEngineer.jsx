import React, { useState, useEffect } from "react";
import "./Services.css";

const imageList = [
  "https://www.ziprecruiter.com/svc/fotomat/public-ziprecruiter/cms/927407842AssistantConstructionSuperintendent.jpg=ws1280x960",
  "https://media.gettyimages.com/id/1404365178/video/group-of-multiracial-worker-on-logistic-site-on-morning-meeting.jpg?s=640x640&k=20&c=2VbBfgz7edYM4VWAjeQVFtLBgtvVHxo1v5AEAwH12vs=",
];

const PlanningEngineer = () => {
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
        <img src={imageList[currentIndex]} alt="Planning Engineering Work" />
      </div>

      <div className="text-section">
        <h1>Planning Engineering Services</h1>
        <p>Planning engineers ensure that projects are executed efficiently by managing timelines, budgets, and workflows.</p>
        <p>Our team uses advanced scheduling techniques and predictive models to minimize delays and optimize resources.</p>
      </div>
    </div>
  );
};

export default PlanningEngineer;