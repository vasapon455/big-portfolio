import "./HighLight.css";
import { highlight } from "../../Components/Data/Data";

export default function HighLight() {
  return (
    <section id="highlight-section">
      <img src={highlight.image} alt="profile" />
    </section>
  );
}
