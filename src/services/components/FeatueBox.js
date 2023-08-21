import React from 'react';
import './../styles.css';

export default function FeatureBox({ title, icon, description }) {
  return (
    <div className="feature-box">
      {/* icon wrapper */}
      <div className="feature-box__icon">
        <svg>
          <use href={'SVG/solid.svg#' + icon}></use>
        </svg>
      </div>

      {/* title */}
      <h2 className="text-xl mb-1">{title}</h2>

      {/* description */}
      <div>
        <p className="paragraph">{description}</p>
      </div>
    </div>
  );
}
