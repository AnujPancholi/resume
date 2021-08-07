/*
  The following file is gitignored and contains the actual data to be rendered in the resume.
  May make this a file that calls an API to fetch same data later
  Adding a sample file "data-sample.json" for now
*/
import DATA from './data.json';

const getData = () => {
  return DATA;
};

const getBasicInfoData = () => {
  DATA.basic_details.info.forEach((obj) => {
    obj.value = process.env[`REACT_APP_${obj.type}`];
  });
  DATA.basic_details.website_link = process.env.REACT_APP_LINKS_URL;
  DATA.basic_details.website_text = process.env.REACT_APP_LINKS_TEXT;
  return DATA.basic_details;
};

const getSkillsData = () => {
  return DATA.skills.map((skillCategory) => {
    skillCategory.skills.sort((a, b) => b.score - a.score);
    return skillCategory;
  });
};

const getWorkExperienceData = () => {
  return DATA.work_experience;
};

const getProjectsData = () => {
  return DATA.projects;
};

const getEducationData = () => {
  return DATA.education;
};

const getResumeUrl = () => {
  return process.env.REACT_APP_RESUME_URL;
};

const services = {
  getData,
  getBasicInfoData,
  getSkillsData,
  getWorkExperienceData,
  getProjectsData,
  getEducationData,
  getResumeUrl,
};

export default services;
