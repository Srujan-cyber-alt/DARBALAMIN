import React, { useState, useEffect } from "react";
import "./Services.css";

const imageList = [
  "https://media.gettyimages.com/id/1403806114/video/programmer-writes-the-code-software-developers-working-late.jpg?s=640x640&k=20&c=2FAAKgeXGU3riNCR0ZkNR8YSzYW4Ld3VUbCOWCTkK5g=",
  "https://plus.unsplash.com/premium_photo-1683140655656-20448abc55da?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcHV0ZXIlMjBwcm9ncmFtbWVyfGVufDB8fDB8fHww",
];

const ComputerProgrammer = () => {
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
        <img src={imageList[currentIndex]} alt="Computer Programming Work" />
      </div>

      <div className="text-section">
        <h1>Computer Programming Services</h1>
        <p>Our programmers specialize in software development, debugging, and system optimization.</p>
        <p>We work with modern programming languages to build scalable and efficient applications.</p>
      </div>
    </div>
  );
};

export default ComputerProgrammer;