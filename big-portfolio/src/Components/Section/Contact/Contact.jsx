import "./Contact.css";
import { contact } from "../../Components/Data/Data";
export default function Contact() {
  const date = new Date();
  const year = date.getUTCFullYear();

  /*
  import { useState, useEffect } from "react";

  
  const [scrollPosition, setScrollPosition] = useState(0);
  const [footerPosition, setFooterPosition] = useState();

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    if (scrollPosition > 10000) {
      setFooterPosition({
        position: "fixed",
        top: "10vh",
        height: "100vh",
        bottom: "0px",
        margin: "0px",
        padding: "0px",
        filter: "opacity(80%)",
      });
      if (scrollPosition >= 12000) {
        setFooterPosition();
      }
    } else {
      setFooterPosition();
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);*/

  return (
    <section id="contact-section">
      <div className="contact-me">
        <h1>Contact</h1>
        <div className="contact-info">
          <a href={contact.email1}>
            <img src="assets/email.svg" alt="email icon" />
            {contact.email2}
          </a>
          <a href={contact.linkedin}>
            <img src="assets/linkedin.svg" alt="linkedin icon" /> Linkedin
          </a>
        </div>
        <p>
          Copyright {year} ©{contact.name} All Rights Reserved.
        </p>
      </div>
    </section>
  );
}
