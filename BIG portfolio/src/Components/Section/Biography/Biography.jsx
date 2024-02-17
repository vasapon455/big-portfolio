import SectionHeader from "../../Components/SectionHeader";
import SkillContainer from "../../Components/Skills/SkillContainer";
import Skill from "../../Components/Skills/Skill";
import { professionalSkillData } from "../../../Data/Data";

export default function Biography() {
  return (
    <section id="biography-section">
      <SectionHeader>
        <h2>Biography</h2>
        <h1>Varut Opaswatanakul</h1>
      </SectionHeader>
      <article id="biography">
        <div className="article-container">
          <img src="./assets/highlight.jpg" alt="profile"></img>
          <p>
            Lorem ipsum dolor sit amet consectetur. Morbi nulla vestibulum
            egestas nunc. Sed cursus praesent felis mauris erat fusce sit odio
            blandit. Justo enim pellentesque metus duis vitae venenatis id neque
            velit. Vel vitae amet nunc elit. Quis felis eu a pretium eget at
            enim. Arcu faucibus pellentesque velit luctus id morbi consectetur
            ullamcorper justo. Integer semper blandit blandit elit ut eget donec
            enim. Cras consequat adipiscing adipiscing et magna rutrum.
          </p>
        </div>
        <h1>Professional Skills</h1>
        <SkillContainer>
          {professionalSkillData.map((data) => (
            <Skill img={data.img} header={data.header} body={data.body} />
          ))}
        </SkillContainer>
      </article>
    </section>
  );
}
