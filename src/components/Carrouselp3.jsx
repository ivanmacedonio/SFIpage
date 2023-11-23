import React, { useRef } from "react";
import "../styles/Carrouselp3.css";
export const Carrouselp3 = () => {
  const scrollContainerRef = useRef(null);

  const scrollToCard = (index) => {
    const scrollContainer = scrollContainerRef.current;
    const cards = scrollContainer.children;
    const cardToScroll = cards[index];

    if (cardToScroll) {
      scrollContainer.scrollLeft = cardToScroll.offsetLeft;
    }
  };
  return (
    <div className="containertodop3">
      <div className="carousel" ref={scrollContainerRef}>
        <div className="slide">
          <h1>Paso 1</h1>
          <p>
            Crea tu cuenta en minutos. Proporciona tus datos básicos y
            selecciona un nombre de usuario y contraseña, mientras esperas la
            validación y aprobación de tu perfil.
          </p>
        </div>
        <div className="slide">
          <div className="content2">
            <h1>Paso 2</h1>
            <p>
              Explora nuestras opciones de membresía y elige la que se adapte
              mejor a tus necesidades y objetivos.
            </p>
          </div>
        </div>
        <div className="slide" id="higher">
          <h1>Paso 3</h1>
          <p>
            Una vez que te conviertas en miembro, tendrás acceso a una amplia
            gama de beneficios, incluyendo a sesiones sobre educación de alta
            calidad, asesoramiento dentro del blog de la comunidad de SFI y la
            oportunidad de participar en proyectos que asegurarán tus años
            futuros.
          </p>
        </div>
        <div className="slide" id="slide4">
          <div className="content4">
            <h1>Paso 4</h1>
            <p>
              Realiza el pago de tu membresía mensual utilizando tu wallet de
              activos digitales. Nuestro sistema seguro te guiará a través del
              proceso.
            </p>
          </div>
        </div>
      </div>
      <div className="navigation2">
        <div className="nav-item2" onClick={() => scrollToCard(0)}>
          1
        </div>
        <div className="nav-item2" onClick={() => scrollToCard(1)}>
          2
        </div>
        <div className="nav-item2" onClick={() => scrollToCard(2)}>
          3
        </div>
        <div className="nav-item2" onClick={() => scrollToCard(3)}>
          4
        </div>
      </div>
    </div>
  );
};
