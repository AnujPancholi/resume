import React from 'react';

import './style/section.css';

const Section = ({ name, Component }) => {
  return (
    <div className="flex-container flex-vertical">
      <div className="section-title text-token">{name}</div>
      <div className="section-component-container">
        <Component />
      </div>
    </div>
  );
};

export default Section;
