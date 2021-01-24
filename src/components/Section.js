import React from 'react';

import './style/section.css';

const Section = ({ name, Icon, Component }) => {
  return (
    <div className="flex-container flex-vertical">
      <div className="section-title text-medium flex-container flex-horizontal flex-center-vertical">
        <div className="section-icon text-token flex-container flex-horizontal flex-center-vertical">
          {Icon ? <Icon fontSize="inherit" /> : ''}
        </div>
        <div className="text-token">{name}</div>
      </div>
      <div className="section-component-container">
        <Component />
      </div>
    </div>
  );
};

export default Section;
