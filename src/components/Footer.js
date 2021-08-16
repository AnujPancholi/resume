import React, { useState, useEffect } from 'react';

import StarOutlineOutlinedIcon from '@material-ui/icons/StarOutlineOutlined';
import GitHubIcon from '@material-ui/icons/GitHub';

import services from '../services/services.js';

import '../flex.css';
import '../App.css';
import './style/footer.css';

const Footer = () => {
  const [resumeUrl, setResumeUrl] = useState('');

  useEffect(() => {
    (async () => {
      const resumeUrlResult = await services.getResumeUrl();
      setResumeUrl(resumeUrlResult);
    })();
  }, []);

  return (
    
    <footer>
      <a href={resumeUrl} className="text-keyname text-regular flex-container flex-center footer">
      Like it? Click here and give it a&nbsp;
      <span className="flex-container flex-center">
        {<StarOutlineOutlinedIcon fontSize="inherit" />}
      </span>
      &nbsp;on&nbsp;
      <span className="flex-container flex-center">
        {<GitHubIcon fontSize="inherit" />}!
      </span>
      </a>
    </footer>
    
  );
};

export default Footer;
