import React, { useState, useEffect } from "react";
import "./Services.css";

const imageList = [
  "https://thumbs.dreamstime.com/b/finance-bank-tax-expense-accounting-budget-money-businessman-hand-use-calculator-financial-calculate-accountant-close-up-finance-360979247.jpg",
  "https://media.istockphoto.com/id/1464245432/photo/business-accounting-concept-business-man-using-calculator-with-computer-laptop-budget-and.webp?b=1&s=612x612&w=0&k=20&c=kvdjbjxJWEAFqjmaEbe07b_yald5ZXIep7SaSVnxLSo=",
];

const Accountant = () => {
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
        <img src={imageList[currentIndex]} alt="Accounting Work" />
      </div>

      <div className="text-section">
        <h1>Accounting Services</h1>
        <p>Our accountants provide financial analysis, tax planning, auditing, and budget management.</p>
        <p>We ensure compliance with financial regulations and optimize business efficiency.</p>
      </div>
    </div>
  );
};

export default Accountant;