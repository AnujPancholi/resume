import React, { useState, useEffect } from 'react';

import '../flex.css';
import './style/projects.css';
import GitHubIcon from '@material-ui/icons/GitHub';

import services from '../services/services.js';


const Project = ({ project }) => {
  return (
    <div className="project-container">
      <div className="flex-container flex-horizontal">
        <div className="flex-auto text-keyname text-regular">
          {project.title} {project.link && <a className="text-keyname text-regular" href={project.link}><GitHubIcon fontSize="inherit" /></a>}
        </div>
        {/* <div className="flex-container flex-horizontal flex-end flex-auto text-keyname text-small">
          {project.link || ''}
        </div> */}
      </div>
      <div className="flex-container flex-horizontal">
        <div className="project-description text-literal flex-grow-2">
          {project.description}
        </div>
        <div className="project-technologies text-literal flex-grow-1">
          {project.technologies_used.join(',')}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    (async () => {
      const projectsData = await services.getProjectsData();
      setProjects(projectsData);
    })();
  }, []);

  return (
    <div>
      {projects.map((proj) => {
        return <Project project={proj} />;
      })}
    </div>
  );
};

export default Projects;
