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
  return DATA.basic_details;
};

const getSkillsData = () => {
  return DATA.skill_categories.sort((a,b) => a.rank-b.rank).map((skillCategory) => {
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
  return DATA.basic_details.resume_url;
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
