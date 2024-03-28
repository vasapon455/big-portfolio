import CardContainer from "../../Components/Card/CardContainer";
import SectionHeader from "../../Components/SectionHeader";
import Card from "../../Components/Card/Card";
import { workHeaderData, workData } from "../../Components/Data/Data";

export default function Works() {
  return (
    <section id="work-section">
      <SectionHeader>
        <h2>Project</h2>
        <h1>My Projects</h1>
      </SectionHeader>
      <CardContainer header={workHeaderData[0].header}>
        {workData[0].map((data) => (
          <Card
            key={data.id}
            heading={data.header}
            date={data.date}
            text={data.text}
            image={data.image}
          />
        ))}
      </CardContainer>
      <CardContainer header={workHeaderData[1].header}>
        {workData[1].map((data) => (
          <Card
            key={data.id}
            heading={data.header}
            date={data.date}
            text={data.text}
            image={data.image}
          />
        ))}
      </CardContainer>
    </section>
  );
}
