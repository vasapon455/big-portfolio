import "./NavBar.css";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navBarPosition, setNavBarPosition] = useState();

  //Tracking Scroll Position

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    if (scrollPosition > 1950) {
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
      <img src="assets/logo.svg" alt="logo"></img>
      <ul>
        <li>
          <a href="#work-section">Work</a>
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
