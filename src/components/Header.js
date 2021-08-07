import React, { useState, useEffect } from 'react';

import { EmailOutlined, PhoneAndroidOutlined } from '@material-ui/icons';

import '../App.css';
import '../flex.css';
import './style/header.css';

import services from '../services/services.js';

const Info = ({ infoObj }) => {
  const INFO_TYPE_ICONS = {
    EMAIL: <EmailOutlined fontSize="inherit" />,
    PHONE: <PhoneAndroidOutlined fontSize="inherit" />,
  };

  return (
    <div className="info-pair flex-container flex-horizontal flex-between">
      <div className="flex-grow-1 text-regular text-keyname flex-container flex-start">
        {INFO_TYPE_ICONS[infoObj.type]}
      </div>
      <div className="flex-grow-9 text-regular text-literal flex-container flex-end">
        {infoObj.value}
      </div>
    </div>
  );
};

const Header = ({ cycleThemes, theme }) => {
  const [basicDetails, setBasicDetails] = useState({});

  useEffect(() => {
    (async () => {
      const details = await services.getBasicInfoData();
      setBasicDetails(details);
    })();
  });

  return (
    <div className="header-container">
      <div className="flex-container flex-horizontal">
        <div className="flex-container flex-horizontal flex-auto">
          <div className="brace-container">{'{'}</div>
          <div className="personal-details-container flex-container flex-start flex-grow-2 flex-vertical">
            <div className="name-container">{basicDetails.name}</div>
            <div className="text-keyname"><a className="text-keyname" href={basicDetails.website_link}>{basicDetails.website_text}</a></div>
            <div className="text-small text-keyname theme-container" onClick={cycleThemes}>
              {'{ '}theme: <span className="text-literal">{theme.name}</span>
              {' }'}
            </div>
          </div>
          <div className="info-container flex-container flex-vertical flex-center flex-grow-1">
            {basicDetails.info
              ? basicDetails.info.map((infoObj) => {
                  return <Info infoObj={infoObj} />;
                })
              : ``}
          </div>
        </div>

        <div className="brace-container">{'}'}</div>
      </div>
    </div>
  );
};

export default Header;
