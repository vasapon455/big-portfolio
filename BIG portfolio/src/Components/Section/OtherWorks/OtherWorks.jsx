import GridContainer from "../../Components/Grid/GridContainer";
import SectionHeader from "../../Components/SectionHeader";
import GridItem from "../../Components/Grid/GridItem";

export default function OtherWorks() {
  return (
    <section id="other-works">
      <SectionHeader>
        <h2>Work</h2>
        <h1>Other Works</h1>
      </SectionHeader>
      <GridContainer>
        <GridItem image={"assets/highlight.jpg"} text="Hello" />
        <GridItem image={"assets/highlight.jpg"} text="Hello" />
        <GridItem image={"assets/highlight.jpg"} text="Hello" />
        <GridItem image={"assets/highlight.jpg"} text="Hello" />
        <GridItem image={"assets/highlight.jpg"} text="Hello" />
        <GridItem image={"assets/highlight.jpg"} text="Hello" />
        <GridItem image={"assets/highlight.jpg"} text="Hello" />
        <GridItem image={"assets/highlight.jpg"} text="Hello" />
        <GridItem image={"assets/highlight.jpg"} text="Hello" />
      </GridContainer>
    </section>
  );
}
