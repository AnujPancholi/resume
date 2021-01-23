import React, { useState, useEffect } from 'react';

import { LabelImportantOutlined } from '@material-ui/icons';

import './style/experience.css';

import services from '../services/services.js';

const LogoContainer = ({ imgsrc }) => {
  return (
    <div className="company-logo">
      <img src={imgsrc} alt="logo" />
    </div>
  );
};

const ExpPointsList = ({ points }) => {
  return (
    <div className="points-list text-literal">
      {points.map((point) => {
        return (
          <div key={point.id}>
            <LabelImportantOutlined fontSize="inherit" />
            {point.text}
          </div>
        );
      })}
    </div>
  );
};

const WorkExpContainer = ({ workExObj }) => {
  const { start, end, company_name, company_logo_path, roles } = workExObj;

  return (
    <div>
      <div className="flex-container flex-horizontal text-token text-regular">
        <div>{company_name}</div>
      </div>

      <div>
        {roles.map((role) => {
          return (
            <div key={role.title} className="role-container">
              <div className="flex-container flex-horizontal flex-between">
                <div className="text-keyname">{role.title}</div>
                <div className="text-keyname">{role.period}</div>
              </div>
              <ExpPointsList points={role.points} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Experience = () => {
  const [workExData, setWorkExData] = useState([]);

  useEffect(() => {
    (async () => {
      const workExperienceData = await services.getWorkExperienceData();
      setWorkExData(workExperienceData);
    })();
  });

  return (
    <div>
      {workExData.map((obj) => {
        return <WorkExpContainer workExObj={obj} key={obj.company_name} />;
      })}
    </div>
  );
};

export default Experience;
