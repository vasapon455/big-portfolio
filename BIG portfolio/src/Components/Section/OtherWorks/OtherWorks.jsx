import GridContainer from "../../Components/Grid/GridContainer";
import SectionHeader from "../../Components/SectionHeader";
import GridItem from "../../Components/Grid/GridItem";
import { otherWorkData } from "../../../Data/Data";

export default function OtherWorks() {
  return (
    <section id="other-works">
      <SectionHeader>
        <h2>Work</h2>
        <h1>Other Works</h1>
      </SectionHeader>
      <GridContainer>
        {otherWorkData.map((data) => (
          <GridItem key={data.id} image={data.image} text={data.text} />
        ))}
      </GridContainer>
    </section> 
  );
}
