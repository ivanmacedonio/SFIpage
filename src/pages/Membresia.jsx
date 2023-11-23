import React, { useEffect } from "react";
import { Ac } from "../components/Ac";
import { Footer } from "../components/Footer";
import { HeaderNormal } from "../components/Header-normal";
import "../styles/Membresia.css";
export const Membresia = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="Membresiapage">
      <div className="header">
        <HeaderNormal></HeaderNormal>
      </div>
      <div className="imagenmembresia"> </div>
      <div className="calcularMembresia">
        <div className="tipoplanes">
          <h1 id="calculah1">Calcula tu membresía</h1>
          <h2>Tipo de plan:</h2>
          <p>Plan educativo a Corto Plazo</p>
          <h2>Membresía Mensual</h2>
          <p>$167</p>
          <h2>Plazo de maduración:</h2>
          <p>2 Años</p>
        </div>
        <div className="precio">
          <h2>*Bonificación Mensual</h2>
          <h1>$500</h1>
          <p>
            *Este monto es aproximado y se liberará una vez alcanzada la
            maduración de la membresía. Nota, el programa de bonificación
            mensual tiene una caducidad desde 60 meses hasta 240 meses,
            dependiendo del plan 2 Años seleccionado.
          </p>
        </div>
      </div>
      <div className="adquirir">
        <h1>Adquirir membresía</h1>
        <div className="ac">
          <Ac></Ac>
        </div>

        <div className="tipos">
          <h2 id="tiposd">Tipo de Membresía:</h2>
          <div className="plan">
            <h2>Membresía Años Dorados: </h2>
            <p>
              Ideal para aquellos que están planeando con anticipación su
              jubilación y buscan construir un futuro sólido. La membresía "Años
              Dorados" ofrece un plazo de cuotas a largo plazo de 120 meses,
              brindando la oportunidad de acumular activos digitales y generar
              ingresos pasivos durante la jubilación. Con este plan, los
              miembros pueden disfrutar de la tranquilidad de saber que están
              tomando medidas proactivas para asegurar un retiro cómodo y sin
              preocupaciones.
            </p>
          </div>
          <div className="plan">
            <h2>Membresía Lustro: </h2>
            <p>
              Diseñada para aquellos que desean un enfoque más ágil y efectivo
              para construir su patrimonio en activos digitales. La membresía
              "Lustro" ofrece un plazo de cuotas de 60 meses, permitiendo a los
              miembros acelerar su camino hacia la seguridad financiera. Este
              plan es perfecto para quienes buscan resultados a mediano plazo y
              desean experimentar los beneficios de la membresía en un período
              más breve.
            </p>
          </div>
          <div className="plan">
            <h2>Membresía Flash: </h2>
            <p>
              Para aquellos que desean resultados rápidos y una ruta rápida
              hacia la estabilidad financiera. La membresía "Flash" ofrece un
              plazo de cuotas de 24 meses, permitiendo a los miembros
              beneficiarse de los ingresos pasivos generados por la gestión de
              activos digitales en un tiempo relativamente corto. Ideal para
              personas con metas financieras a corto plazo y la necesidad de ver
              resultados tangibles en un futuro cercano.
            </p>
          </div>
          <div className="plan">
            <h2>Membresía Futuro Seguro:</h2>
            <p>
              La opción perfecta para aquellos que desean comenzar de inmediato
              a asegurar su futuro financiero. La membresía "Futuro Seguro"
              ofrece un plazo de una única cuota, permitiendo a los miembros
              sumergirse rápidamente en los beneficios de la membresía y la
              gestión de activos digitales. Este plan es ideal para quienes
              buscan una solución rápida y efectiva para empezar a construir su
              patrimonio financiero.{" "}
            </p>
          </div>
          <div className="plan">
            <p>
              Cada membresía está cuidadosamente diseñada para adaptarse a
              diferentes necesidades y plazos de tiempo, brindando a nuestros
              miembros la flexibilidad y la seguridad que buscan en su camino
              hacia un futuro sólido. ¡Descubre cómo podemos ayudarte a alcanzar
              tus metas financieras con nuestra variedad de opciones de
              membresía!
            </p>
          </div>
        </div>
      </div>
      <div className="escoge">
        <h1>¡Escoge la tuya!</h1>
      </div>
      <div className="footer">
        <Footer></Footer>
      </div>
    </div>
  );
};
