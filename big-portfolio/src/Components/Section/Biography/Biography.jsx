import SectionHeader from "../../Components/SectionHeader";
import SkillContainer from "../../Components/Skills/SkillContainer";
import Skill from "../../Components/Skills/Skill";

import {
  professionalSkillData,
  biographyData,
} from "../../Components/Data/Data";

import "./Biography.css";

export default function Biography() {
  console.log(process.env.REACT_APP_DATAPATH);
  return (
    <section id="biography-section">
      <SectionHeader>
        <h2>Biography</h2>
        <h1>Varut Opaswatanakul</h1>
      </SectionHeader>
      <article id="biography">
        <div className="article-container">
          <img src={biographyData.image} alt="profile" />
          <p key={biographyData.id}>{biographyData.body}</p>
        </div>
        <h1>Professional Skills</h1>
        <SkillContainer>
          {professionalSkillData.map((data) => (
            <Skill
              key={data.id}
              img={data.img}
              header={data.header}
              body={data.body}
            />
          ))}
        </SkillContainer>
      </article>
    </section>
  );
}
