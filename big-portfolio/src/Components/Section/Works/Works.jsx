import CardContainer from "../../Components/Card/CardContainer";
import SectionHeader from "../../Components/SectionHeader";
import Card from "../../Components/Card/Card";
import {
  workHeaderData,
  workData1,
  workData2,
  workData3,
} from "../../../Data/Data";

export default function Works() {
  return (
    <section id="work-section">
      <SectionHeader>
        <h2>Project</h2>
        <h1>My Projects</h1>
      </SectionHeader>
      <CardContainer header={workHeaderData[0].header}>
        {workData1.map((data) => (
          <Card
            key={data.id}
            heading={data.header}
            text={data.text}
            image={data.image}
          />
        ))}
      </CardContainer>
      <CardContainer header={workHeaderData[1].header}>
        {workData2.map((data) => (
          <Card
            key={data.id}
            heading={data.header}
            text={data.text}
            image={data.image}
          />
        ))}
      </CardContainer>
    </section>
  );
}
