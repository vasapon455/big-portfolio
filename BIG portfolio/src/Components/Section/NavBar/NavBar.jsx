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
    if (scrollPosition > 1300) {
      setNavBarPosition("fixed");
    } else {
      setNavBarPosition();
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
          <a href="#work">Work</a>
        </li>
        <li>
          <p>|</p>
        </li>
        <li>
          <a href="#biography">Biography</a>
        </li>
      </ul>
    </nav>
  );
}
