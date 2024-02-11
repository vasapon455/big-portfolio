import "./NavBar.css";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navBarPosition, setNavBarPosition] = useState();

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    if (scrollPosition > 1600) {
      setNavBarPosition("fixed");
    } else {
      setNavBarPosition("static");
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <nav style={{ position: navBarPosition }}>
      <p>VARUT_O</p>
      <ul>
        <li>
          <p>Work</p>
        </li>
        <li>
          <p>|</p>
        </li>
        <li>
          <p>Biography</p>
        </li>
      </ul>
    </nav>
  );
}
