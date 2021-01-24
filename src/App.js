import React, { useState } from 'react';

import './App.css';
import './flex.css';

import Section from './components/Section.js';
import Skills from './components/Skills.js';
import Experience from './components/Experience.js';
import Projects from './components/Projects.js';
import Education from './components/Education.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

import {
  SchoolOutlined,
  WorkOutlineOutlined,
  CodeOutlined,
  ImportantDevicesOutlined,
} from '@material-ui/icons';

const SECTION_ICON_MAP = {
  Skills: CodeOutlined,
  'Work Experience': WorkOutlineOutlined,
  Projects: ImportantDevicesOutlined,
  Education: SchoolOutlined,
};

function App() {
  const [theme, setTheme] = useState({
    index: 0,
    name: 'light',
  });

  const THEMES = [
    {
      index: 0,
      name: 'light',
    },
    {
      index: 1,
      name: 'dark',
    },
  ];

  function cycleThemes() {
    setTheme(THEMES[(theme.index + 1) % THEMES.length]);
  }

  const getRootClassNames = (params = {}) => {
    return Object.keys(params).reduce((classnames, param) => {
      switch (param) {
        case 'theme':
          return `${classnames}${
            params[param] === 'default' ? '' : ` theme-${params[param]}`
          }`;
        default:
          return classnames;
      }
    }, 'App');
  };

  const rootClassNames = getRootClassNames({
    theme: theme.name,
  });

  return (
    <div className={rootClassNames}>
      <div className="res-container">
        <Header theme={theme} cycleThemes={cycleThemes} />

        <div className="res-content-container">
          <Section
            name="Skills"
            Component={Skills}
            Icon={SECTION_ICON_MAP['Skills']}
          />
          <Section
            name="Work Experience"
            Component={Experience}
            Icon={SECTION_ICON_MAP['Work Experience']}
          />
          <Section
            name="Projects"
            Component={Projects}
            Icon={SECTION_ICON_MAP['Projects']}
          />
          <Section
            name="Education"
            Component={Education}
            Icon={SECTION_ICON_MAP['Education']}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
