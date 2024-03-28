const data = await fetch(process.env.REACT_APP_DATAPATH)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .catch((err) => console.error(err));

const navBar = data.navBar;
const highlight = data.highlight;
const workHeaderData = data.workHeaderData;
const workData = data.workData;
const heroWorkData = data.heroWorkData;
const biographyData = data.biographyData;
const professionalSkillData = data.professionalSkillData;
const contact = data.contact;

//other_work_data

//biography

//professional_skill

export {
  navBar,
  highlight,
  workHeaderData,
  workData,
  heroWorkData,
  professionalSkillData,
  biographyData,
  contact,
};
