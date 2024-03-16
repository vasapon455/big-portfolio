import Biography from "../Section/Biography/Biography";
import Hero from "../Section/Hero/Hero";
import Works from "../Section/Works/Works";

export default function Main() {
  return (
    <main>
      <Hero />
      <Works />
      <Biography id="biography" />
    </main>
  );
}
