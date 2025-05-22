import React, { useState, useEffect } from "react";
import "./Services.css";

const imageList = [
  "https://media.istockphoto.com/id/1356810087/photo/event-planners-use-timetables-and-agendas-to-arrange-and-schedule-events-on-the-office-table.jpg?s=612x612&w=0&k=20&c=51skwC7R-OzzpIGjqdFX4bG-b6tywqJ2gDp5YOqUfbM=",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI_EC0w8HTER4J2LK6fpTOt2M39C4LbAszy8fPj4-Fj-zXjw0qgUlfBIr1M3eeIor5qbk&usqp=CAU",
];

const Schedulers = () => {
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
        <img src={imageList[currentIndex]} alt="Schedulers Work" />
      </div>

      <div className="text-section">
        <h1>Scheduling Services</h1>
        <p>Our scheduling professionals optimize project timelines, ensuring efficient planning and resource allocation.</p>
        <p>We utilize advanced scheduling techniques to minimize delays and improve productivity.</p>
      </div>
    </div>
  );
};

export default Schedulers;