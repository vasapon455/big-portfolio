import "./Grid.css";
import GridItem from "./GridItem";

export default function GridContainer() {
  return (
    <div className="grid-container">
      <GridItem image={"assets/highlight.jpg"} />
      <GridItem image={"assets/highlight.jpg"} />
      <GridItem image={"assets/highlight.jpg"} />
    </div>
  );
}
