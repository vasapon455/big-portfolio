import CardContainer from "../../Components/Card/CardContainer";
import SectionHeader from "../../Components/SectionHeader";

export default function Works() {
  return (
    <section id="work">
      <SectionHeader>
        <span>Work</span>
        <h2>My Works</h2>
      </SectionHeader>
      <CardContainer header={"Sound Design For Movie Trailer"} />
      <CardContainer header={"Sound Design For TV Commercial"} />
      <CardContainer header={"Sound Editing & Mixing For Podcast"} />
      <CardContainer header={"Music For Commercial Demo Reels"} />
      <CardContainer header={"Designing Audio Effect Plugin & Instrument"} />
    </section>
  );
}
