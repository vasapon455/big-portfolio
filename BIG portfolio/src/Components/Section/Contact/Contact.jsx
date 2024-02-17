import "./Contact.css";

import { useState, useEffect } from "react";

export default function Contact() {
  const date = new Date();
  const year = date.getUTCFullYear();

  const [scrollPosition, setScrollPosition] = useState(0);
  const [footerPosition, setFooterPosition] = useState();

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    if (scrollPosition > 20000) {
      setFooterPosition({
        position: "fixed",
        top: "10vh",
        height: "100vh",
        bottom: "0px",
        margin: "0px",
        padding: "0px",
        filter: "opacity(80%)",
      });
      if (scrollPosition >= 21500) {
        setFooterPosition();
      }
    } else {
      setFooterPosition();
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <section id="contact-section" style={footerPosition}>
      <div className="contact-me">
        <h1>Contact</h1>
        <div className="contact-info">
          <a href="mailto:varut_o@gmail.com">
            <img src="assets/email.svg" alt="email icon" />
            varut_o@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/varut-opaswatanakul-4400a9257?originalSubdomain=th">
            <img src="assets/linkedin.svg" alt="linkedin icon" /> Linkedin
          </a>
        </div>
        <p>Copyright {year} ©Varut Opaswatanakul. All Rights Reserved.</p>
      </div>
    </section>
  );
}
