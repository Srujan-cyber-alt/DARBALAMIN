import React, { useState, useEffect } from "react";
import "./Services.css";

const imageList = [
  "https://media.istockphoto.com/id/1056710182/photo/workers-assembling-and-constructing-gas-turbines-in-a-modern-industrial-factory.jpg?s=612x612&w=0&k=20&c=sMCyNX5UKjEhVmYoH63DQPsnVJfzs1ku2oyQd94gME4=",
  "https://t3.ftcdn.net/jpg/08/06/52/08/360_F_806520859_fGO8USvZe0vwPMolJar6BH9UXo8wlFSU.jpg",
];

const MechanicalEngineer = () => {
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
        <img src={imageList[currentIndex]} alt="Mechanical Engineering Work" />
      </div>

      <div className="text-section">
        <h1>Mechanical Engineering Services</h1>
        <p>Our mechanical engineers design and optimize machinery, HVAC systems, and structural components.</p>
        <p>We focus on precision, durability, and energy efficiency to deliver cutting-edge solutions.</p>
      </div>
    </div>
  );
};

export default MechanicalEngineer;