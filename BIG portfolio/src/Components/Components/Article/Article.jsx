import SkillContainer from "../Skills/SkillContainer";
import Skill from "../Skills/Skill";
import "./Article.css";

export default function Article({ id }) {
  return (
    <article id={id}>
      <div className="article-container">
        <img src="./assets/highlight.jpg" alt="profile"></img>
        <p>
          Lorem ipsum dolor sit amet consectetur. Morbi nulla vestibulum egestas
          nunc. Sed cursus praesent felis mauris erat fusce sit odio blandit.
          Justo enim pellentesque metus duis vitae venenatis id neque velit. Vel
          vitae amet nunc elit. Quis felis eu a pretium eget at enim. Arcu
          faucibus pellentesque velit luctus id morbi consectetur ullamcorper
          justo. Integer semper blandit blandit elit ut eget donec enim. Cras
          consequat adipiscing adipiscing et magna rutrum.
        </p>
      </div>
      <h1>Professional Skills</h1>
      <SkillContainer>
        <Skill
          img="assets/highlight.jpg"
          header="Hello"
          body=" Lorem ipsum dolor sit amet consectetur. Morbi nulla vestibulum egestas
          nunc. Sed cursus praesent felis mauris erat fusce sit odio blandit.
          Justo enim pellentesque metus duis vitae venenatis id neque velit. Vel
          vitae amet nunc elit. Quis felis eu a pretium eget at enim. Arcu
          faucibus pellentesque velit luctus id morbi consectetur ullamcorper
          justo. Integer semper blandit blandit elit ut eget donec enim. Cras
          consequat adipiscing adipiscing et magna rutrum."
        />
        <Skill
          img="assets/highlight.jpg"
          header="Hello"
          body=" Lorem ipsum dolor sit amet consectetur. Morbi nulla vestibulum egestas
          nunc. Sed cursus praesent felis mauris erat fusce sit odio blandit.
          Justo enim pellentesque metus duis vitae venenatis id neque velit. Vel
          vitae amet nunc elit. Quis felis eu a pretium eget at enim. Arcu
          faucibus pellentesque velit luctus id morbi consectetur ullamcorper
          justo. Integer semper blandit blandit elit ut eget donec enim. Cras
          consequat adipiscing adipiscing et magna rutrum."
        />
        <Skill
          img="assets/highlight.jpg"
          header="Hello"
          body=" Lorem ipsum dolor sit amet consectetur. Morbi nulla vestibulum egestas
          nunc. Sed cursus praesent felis mauris erat fusce sit odio blandit.
          Justo enim pellentesque metus duis vitae venenatis id neque velit. Vel
          vitae amet nunc elit. Quis felis eu a pretium eget at enim. Arcu
          faucibus pellentesque velit luctus id morbi consectetur ullamcorper
          justo. Integer semper blandit blandit elit ut eget donec enim. Cras
          consequat adipiscing adipiscing et magna rutrum."
        />
        <Skill
          img="assets/highlight.jpg"
          header="Hello"
          body=" Lorem ipsum dolor sit amet consectetur. Morbi nulla vestibulum egestas
          nunc. Sed cursus praesent felis mauris erat fusce sit odio blandit.
          Justo enim pellentesque metus duis vitae venenatis id neque velit. Vel
          vitae amet nunc elit. Quis felis eu a pretium eget at enim. Arcu
          faucibus pellentesque velit luctus id morbi consectetur ullamcorper
          justo. Integer semper blandit blandit elit ut eget donec enim. Cras
          consequat adipiscing adipiscing et magna rutrum."
        />
      </SkillContainer>
    </article>
  );
}
