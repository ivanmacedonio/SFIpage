import React from "react";
import { Carrouselp2 } from "../components/Carrouselp2";
import { Footer } from "../components/Footer";
import { HeaderNormal } from "../components/Header-normal";
import { Scrollvalores } from "../components/Scrollvalores";
import "../styles/page2.css";
export const Page2 = () => {
  return (
    <div className="page2">
      <div className="headerp2">
        <HeaderNormal></HeaderNormal>
      </div>
      <div className="page2">
        <div className="textp2">
          <h1>Por tu futuro aún más seguro.</h1>
          <p>
            Smart Future Income es una empresa visionaria que se preocupa
            profundamente por tu bienestar en un mundo digital en constante
            evolución. Nuestro enfoque es revolucionario, ya que confiamos en
            activos digitales para dirigir el camino hacia tu prosperidad
            futura.
          </p>
        </div>
        <div className="carrouselp2">
          <Carrouselp2></Carrouselp2>
        </div>
        <div className="textContainerNosotros">
          <div className="mision">
            <h1>Misión:</h1>
            <p>
              En Smart Future Income, estamos comprometidos a impulsar tu futuro
              a través de soluciones con herramientas tecnológicas y activos
              digitales. Nuestra misión es brindar oportunidades de crecimiento
              sólido y sostenible en la economía digital, asegurando la
              seguridad y la prosperidad de nuestros socios en el futuro.
            </p>
          </div>
          <div className="vision">
            <h1>Visión:</h1>
            <p>
              La visión de Smart Future Income es ser la principal herramienta
              de las nuevas y futuras generaciones, por la cual se aseguran sus
              próximos años. Legando a garantizar un estilo de vida mejor para
              nuestras socias y socios, a pesar de las crisis o situaciones
              sociales que se vengan en los años siguientes.
            </p>
          </div>
          <div className="vision2">
            <p>
              Nuestra visión es ser el referente en la industria, asegurando tu
              futuro, reconocidos por nuestra innovación constante, nuestro
              compromiso con la seguridad y la excelencia en el servicio al
              socio. Queremos empoderar a las personas para que tomen el control
              de su objetivo económico confiando en nuestros servicios.
            </p>
          </div>
        </div>
        <div className="valores">
          <div className="valorestitle">
            <h1>Valores</h1>
          </div>
          <div className="scrollvalores">
            <Scrollvalores></Scrollvalores>
          </div>
          <div className="lista">
            <div className="listvalores">
              <ul>
                <li>Confianza</li>
                <li>Seguridad</li>
                <li>Lealtad</li>
                <li>Integridad</li>
              </ul>
            </div>
            <div className="listvalores2">
              <ul>
                <li>Transparencia</li>
                <li>Principio de Servicio</li>
                <li>Equidad</li>
              </ul>
            </div>
          </div>
          <div className="confianza">
            <h1>Confianza</h1>
            <p>
              Operamos con los más altos estándares de seguridad en todos los
              aspectos de nuestro negocio. Desde la gestión de activos hasta la
              protección de los datos de nuestros socios, nos comprometemos a
              garantizar un entorno seguro y confiable. La seguridad de nuestras
              operaciones y la protección de nuestros clientes son fundamentales
              para nosotros.
            </p>
          </div>
        </div>
      </div>
      <div className="footerp2">
        <Footer></Footer>
      </div>
    </div>
  );
};
