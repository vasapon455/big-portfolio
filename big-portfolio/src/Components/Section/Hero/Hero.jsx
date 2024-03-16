import GridContainer from "../../Components/Grid/GridContainer";
import SectionHeader from "../../Components/SectionHeader";
import GridItem from "../../Components/Grid/GridItem";
import { otherWorkData } from "../../../Data/Data";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero-works">
      <SectionHeader>
        <h2>Project</h2>
        <h1>Highlight Projects</h1>
      </SectionHeader>
      <div className="grid-layout">
        <GridContainer>
          {otherWorkData.map((data) => (
            <GridItem key={data.id} image={data.image} text={data.text} />
          ))}
        </GridContainer>
      </div>
    </section>
  );
}
