import React from 'react';
import "../CSS/Carasoul.css";

const LoadingSkeleton = () => {
  return (
    <div className="carouselwrapper module-wrapper">
      <center className="CarasoulDescription">
        <h4>FEATURES MAGAZINE</h4>
      </center>
      <ul className="carousel skeleton-carousel">
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <div className="skeleton-card" key={index}>
              <div className="skeleton-image"></div>
              <div className="skeleton-text"></div>
            </div>
          ))}
      </ul>
    </div>
  );
};

export default LoadingSkeleton;
