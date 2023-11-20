import React, { useEffect } from "react";
import faq from "../assets/parejaFAQ.webp";
import BasicAccordion from "../components/AcordeonFAQ";
import { HeaderNormal } from "../components/Header-normal";

import "../styles/FAQ.css";

export const FAQ = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
  return (
    <div className="faqpage">
      <div className="header">
        <HeaderNormal></HeaderNormal>
      </div>
      <div className="faqcontent">
        <div className="textfaq">
          <h1>Preguntas frecuentes</h1>
          <p id="quest">
            ¿Tienes preguntas? Estamos aquí para ayudarte. A continuación,
            respondemos a algunas de las preguntas más frecuentes:
          </p>
          <div className="acordeon">
            <BasicAccordion></BasicAccordion>
          </div>
        </div>

        <div className="imgfaq">
          <img src={faq} alt="" />
        </div>
      </div>
    </div>
  );
};
