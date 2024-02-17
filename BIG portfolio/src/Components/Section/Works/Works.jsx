import CardContainer from "../../Components/Card/CardContainer";
import SectionHeader from "../../Components/SectionHeader";
import Card from "../../Components/Card/Card";

export default function Works() {
  const workData = [
    { header: "Sound Design For Movie Trailer" },
    { header: "Sound Design For TV Commercial" },
    { header: "Sound Editing & Mixing For Podcast" },
    { header: "Music For Commercial Demo Reels" },
    { header: "Designing Audio Effect Plugin & Instrument" },
  ];

  return (
    <section id="work-section">
      <SectionHeader>
        <h2>Work</h2>
        <h1>My Works</h1>
      </SectionHeader>
      {workData.map((data) => (
        <CardContainer header={data.header}>
          <Card
            heading={"海上救援猛！"}
            date={"DD/MM/YYYY"}
            text={
              "由林超賢導演、梁鳳英監製攜手打造，並找來彭于晏、王彦霖、辛芷蕾、王雨甜、徐洋、陳家樂及李岷城主演的首部海上救援題材國產大片《緊急救援》預告出爐，並將於明年初登上大銀幕，為大家上演一幕幕驚心動魄嘅救援場面！2020年大年初一，救人英雄，勢不可擋！"
            }
            image="assets/highlight.jpg"
          />
          <Card
            heading={"海上救援猛！"}
            date={"DD/MM/YYYY"}
            text={
              "由林超賢導演、梁鳳英監製攜手打造，並找來彭于晏、王彦霖、辛芷蕾、王雨甜、徐洋、陳家樂及李岷城主演的首部海上救援題材國產大片《緊急救援》預告出爐，並將於明年初登上大銀幕，為大家上演一幕幕驚心動魄嘅救援場面！2020年大年初一，救人英雄，勢不可擋！"
            }
            image="assets/highlight.jpg"
          />
          <Card
            heading={"海上救援猛！"}
            date={"DD/MM/YYYY"}
            text={
              "由林超賢導演、梁鳳英監製攜手打造，並找來彭于晏、王彦霖、辛芷蕾、王雨甜、徐洋、陳家樂及李岷城主演的首部海上救援題材國產大片《緊急救援》預告出爐，並將於明年初登上大銀幕，為大家上演一幕幕驚心動魄嘅救援場面！2020年大年初一，救人英雄，勢不可擋！"
            }
            image="assets/highlight.jpg"
          />
          <Card
            heading={"海上救援猛！"}
            date={"DD/MM/YYYY"}
            text={
              "由林超賢導演、梁鳳英監製攜手打造，並找來彭于晏、王彦霖、辛芷蕾、王雨甜、徐洋、陳家樂及李岷城主演的首部海上救援題材國產大片《緊急救援》預告出爐，並將於明年初登上大銀幕，為大家上演一幕幕驚心動魄嘅救援場面！2020年大年初一，救人英雄，勢不可擋！"
            }
            image="assets/highlight.jpg"
          />
        </CardContainer>
      ))}
    </section>
  );
}
