import React, { useState, useEffect } from 'react';

import '../flex.css';
import '../App.css';
import './style/education.css';

import services from '../services/services.js';

const Education = () => {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    (async () => {
      const eduData = await services.getEducationData();
      setEducation(eduData);
    })();
  });

  return (
    <div>
      {education.map((eduObj) => {
        return (
          <div>
            <div className="flex-container flex-horizontal">
              <div className="education-details flex-container flex-vertical">
                <div className="text-keyname flex-auto">
                  {eduObj.accredition_name}
                </div>
                <div className="text-literal text-regular">
                  {eduObj.institute}
                </div>
                <div className="text-literal text-regular">
                  {eduObj.location}
                </div>
                <div className="text-literal text-regular">
                  {eduObj.academic_performance}
                </div>
              </div>
              <div className="education-period flex-container flex-center text-literal">
                {eduObj.period}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Education;
