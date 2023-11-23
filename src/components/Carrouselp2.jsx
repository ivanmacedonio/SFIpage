import React, { useRef } from "react";
import "../styles/Carrouselp2.css";
export const Carrouselp2 = () => {
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
    <div className="carrouselp2">
      <div class="container scroll-1" ref={scrollContainerRef}>
        <div class="cards">
          <div class="card__content">
            <span class="card__title">Misión</span>
            <p class="card__describe">
              En Smart Future Income, estamos comprometidos a impulsar tu futuro
              a través de soluciones con herramientas tecnológicas y activos
              digitales. Nuestra misión es brindar oportunidades de crecimiento
              sólido y sostenible en la economía digital, asegurando la
              seguridad y la prosperidad de nuestros socios en el futuro.
            </p>
          </div>
        </div>
        <div class="cards">
          <div class="card__content">
            <span class="card__title">Visión</span>
            <p class="card__describe">
              En Smart Future Income, la visión de Smart Future Income es llegar
              a ser la principal herramienta de las nuevas y futuras
              generaciones, por el cual se aseguran sus próximos años. Legando a
              garantizar un estilo de vida mejor para nuestras socias y socios,
              a pesar de las crisis o situaciones sociales que se vengan en los
              años siguientes.
            </p>
          </div>
        </div>
        <div class="cards">
          <div class="card__content">
            <span class="card__title">Objetivos</span>
            <p class="card__describe">
              Nuestra visión es ser el referente en la industria, asegurando tu
              futuro, reconocidos por nuestra innovación constante, nuestro
              compromiso con la seguridad y la excelencia en el servicio al
              socio. Queremos empoderar a las personas para que tomen el control
              de su objetivo económico y confiando en nuestros servicios.
            </p>
          </div>
        </div>
      </div>
      <div className="navigation">
        <div className="nav-item" onClick={() => scrollToCard(0)}>
          1
        </div>
        <div className="nav-item" onClick={() => scrollToCard(1)}>
          2
        </div>
        <div className="nav-item" onClick={() => scrollToCard(2)}>
          3
        </div>
      </div>
    </div>
  );
};
