import React, { useState, useEffect } from 'react';
import {
  BatteryCharging20Outlined,
  BatteryCharging30Outlined,
  BatteryCharging50Outlined,
  BatteryCharging60Outlined,
  BatteryCharging80Outlined,
  BatteryCharging90Outlined,
  BatteryChargingFullOutlined,
} from '@material-ui/icons';

import '../App.css';
import '../flex.css';
import './style/skills.css';

import services from '../services/services.js';

const getIconFromScore = (
  score,
  mode = 'pessimistic',
  scoreToIconDetails = [
    {
      threshold: 20,
      icon: <BatteryCharging20Outlined fontSize="inherit" />,
    },
    {
      threshold: 30,
      icon: <BatteryCharging30Outlined fontSize="inherit" />,
    },
    {
      threshold: 50,
      icon: <BatteryCharging50Outlined fontSize="inherit" />,
    },
    {
      threshold: 60,
      icon: <BatteryCharging60Outlined fontSize="inherit" />,
    },
    {
      threshold: 80,
      icon: <BatteryCharging80Outlined fontSize="inherit" />,
    },
    {
      threshold: 90,
      icon: <BatteryCharging90Outlined fontSize="inherit" />,
    },
    {
      threshold: 100,
      icon: <BatteryChargingFullOutlined fontSize="inherit" />,
    },
  ]
) => {
  let i = 0,
    targetObj = null;
  if (mode === 'pessimistic') {
    if (score < scoreToIconDetails[0].threshold) {
      return scoreToIconDetails[0].icon;
    }
  }

  while (i < scoreToIconDetails.length) {
    switch (mode) {
      case 'optimistic':
        if (scoreToIconDetails[i].threshold >= score) {
          targetObj = scoreToIconDetails[i];
        }
        break;
      case 'pessimistic':
        if (scoreToIconDetails[i].threshold > score) {
          targetObj = scoreToIconDetails[i - 1];
        } else if (scoreToIconDetails[i].threshold === score) {
          targetObj = scoreToIconDetails[i];
        }
        break;
      default:
        return null;
    }

    if (targetObj) {
      break;
    }
    ++i;
  }

  return targetObj ? targetObj.icon : null;
};

const SkillCategory = ({ category }) => {
  return (
    <div className="skills-container flex-container flex-horizontal">
      <div className="flex-grow-1 flex-container flex-center-vertical text-keyname skill-category">
        {category.name}
      </div>
      <div className="skills-content flex-grow-3 text-literal">
        {category.skills.map((skillObj, index) => {
          return (
            <span key={skillObj.name} className="skills-item">
              {skillObj.name}
              {getIconFromScore(skillObj.score, 'pessimistic')}
              {index === category.skills.length - 1 ? `` : ` |`}
            </span>
          );
        })}
      </div>
    </div>
  );
};

const Skills = () => {
  const [skillsByCategory, setSkillsByCategory] = useState([]);

  useEffect(() => {
    (async () => {
      //using await because this may be fetched via an API
      try {
        const skills = await services.getSkillsData();
        setSkillsByCategory(skills);
      } catch (e) {
        console.error(`Skills: ERROR`, e);
      }
    })();
  }, []);

  return (
    <div className="flex-container flex-vertical">
      {skillsByCategory.map((categoryObj) => {
        return <SkillCategory key={categoryObj.rank} category={categoryObj} />;
      })}
    </div>
  );
};

export default Skills;
