import React, { useRef } from "react";
import "../styles/Scrollvalores.css";
export const Scrollvalores = () => {
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
    <div className="carrouselp3" >
      <div class="container scroll-1" ref={scrollContainerRef}>
        <div class="cards">
          <div class="card__content">
            <span class="card__title">Confianza</span>
            <p class="card__describe">
              Construimos la confianza a través de la transparencia, la
              honestidad y la seguridad en todas nuestras interacciones.
              Nuestros socios confían en que estamos comprometidos a
              salvaguardar y hacer crecer su patrimonio de manera responsable y
              confiable. 
            </p>
          </div>
        </div>
        <div class="cards">
          <div class="card__content">
            <span class="card__title">Seguridad</span>
            <p class="card__describe">
              Operamos con los más altos estándares de seguridad en todos los
              aspectos de nuestro negocio. Desde la gestión de activos hasta la
              protección de los datos de nuestros socios, nos comprometemos a
              garantizar un entorno seguro y confiable. La seguridad de nuestras
              operaciones y la protección de nuestros clientes son fundamentales
              para nosotros. 
            </p>
          </div>
        </div>
        <div class="cards">
          <div class="card__content">
            <span class="card__title">Lealtad</span>
            <p class="card__describe">
              Estamos comprometidos con nuestros socios a largo plazo y
              trabajamos incansablemente para asegurarnos de que sus intereses
              siempre estén protegidos. Nuestra lealtad hacia nuestros socios se
              refleja en la construcción de relaciones sólidas y duraderas. 
            </p>
          </div>
        </div>
        <div class="cards">
          <div class="card__content">
            <span class="card__title">Integridad</span>
            <p class="card__describe">
              Operamos de manera ética y moral, siempre tomando decisiones
              basadas en principios sólidos. Nos comprometemos a mantener los
              más altos estándares de integridad en todas nuestras actividades,
              brindando a nuestros socios la tranquilidad de saber que sus
              futuros prósperos están en buenas manos. 
            </p>
          </div>
        </div>
        <div class="cards">
          <div class="card__content">
            <span class="card__title">Transparencia</span>
            <p class="card__describe">
              Comunicamos de manera abierta y honesta con nuestros socios sobre
              su futuro. 
            </p>
          </div>
        </div>
        <div class="cards">
          <div class="card__content">
            <span class="card__title">Servicio</span>
            <p class="card__describe">
              Brindamos un servicio personalizado y atento a cada uno de
              nuestros socios. Brindando la plataforma para toda persona que
              quiera un mejor futuro.
            </p>
          </div>
        </div>
        <div class="cards">
          <div class="card__content">
            <span class="card__title">Equidad</span>
            <p class="card__describe">
              Creemos en la justicia y la igualdad de oportunidades para todos
              nuestros socios, independientemente de la situación o
              circunstancias personales. Nos esforzamos por asegurarnos de que
              cada individuo tenga acceso a soluciones reales que les permitan
              alcanzar sus objetivos para futuro, de manera justa y equitativa. 
            </p>
          </div>
        </div>
        <div class="cards">
          <div class="card__content">
            <span class="card__title">Excelencia</span>
            <p class="card__describe">
              Nos esforzamos por alcanzar la excelencia en la gestión
              empresarial, proporcionando un servicio al socio excepcional y
              comprometiéndonos a superar cualquier expectativa. Nuestro enfoque
              en la excelencia nos impulsa a ser líderes en la industria y a
              ofrecer a nuestros socios la máxima calidad en todas las áreas de
              nuestro negocio. 
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
        <div className="nav-item" onClick={() => scrollToCard(3)}>
          4
        </div>
        <div className="nav-item" onClick={() => scrollToCard(4)}>
          5
        </div>
        <div className="nav-item" onClick={() => scrollToCard(5)}>
          6
        </div>
        <div className="nav-item" onClick={() => scrollToCard(6)}>
          7
        </div>
        <div className="nav-item" onClick={() => scrollToCard(7)}>
          8
        </div>
      </div>
    </div>
  );
};
