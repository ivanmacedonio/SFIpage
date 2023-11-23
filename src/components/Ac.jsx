import React from "react";
import "../styles/Ac.css";
export const Ac = () => {
  return (
    <div>
      <ul className="accordion">
        <li>
          <input type="radio" name="accordion" id="first" />
          <label htmlFor="first">Membresía Años Dorados:</label>
          <div className="content">
            Ideal para aquellos que están planeando con anticipación su
            jubilación y buscan construir un futuro sólido. La membresía "Años
            Dorados" ofrece un plazo de cuotas a largo plazo de 120 meses,
            brindando la oportunidad de acumular activos digitales y generar
            ingresos pasivos durante la jubilación. Con este plan, los miembros
            pueden disfrutar de la tranquilidad de saber que están tomando
            medidas proactivas para asegurar un retiro cómodo y sin
            preocupaciones.
          </div>
        </li>
        <li>
          <input type="radio" name="accordion" id="second" />
          <label htmlFor="second">Membresía Lustro:</label>
          <div className="content">
            Diseñada para aquellos que desean un enfoque más ágil y efectivo
            para construir su patrimonio en activos digitales. La membresía
            "Lustro" ofrece un plazo de cuotas de 60 meses, permitiendo a los
            miembros acelerar su camino hacia la seguridad financiera. Este plan
            es perfecto para quienes buscan resultados a mediano plazo y desean
            experimentar los beneficios de la membresía en un período más breve.
          </div>
        </li>
        <li>
          <input type="radio" name="accordion" id="third" />
          <label htmlFor="third">Membresía Flash: </label>
          <div className="content">
            Para aquellos que desean resultados rápidos y una ruta rápida hacia
            la estabilidad financiera. La membresía "Flash" ofrece un plazo de
            cuotas de 24 meses, permitiendo a los miembros beneficiarse de los
            ingresos pasivos generados por la gestión de activos digitales en un
            tiempo relativamente corto. Ideal para personas con metas
            financieras a corto plazo y la necesidad de ver resultados tangibles
            en un futuro cercano.
          </div>
        </li>
        <li>
          <input type="radio" name="accordion" id="four" />
          <label htmlFor="four">Membresía Futuro Seguro:</label>
          <div className="content">
            La opción perfecta para aquellos que desean comenzar de inmediato a
            asegurar su futuro financiero. La membresía "Futuro Seguro" ofrece
            un plazo de una única cuota, permitiendo a los miembros sumergirse
            rápidamente en los beneficios de la membresía y la gestión de
            activos digitales. Este plan es ideal para quienes buscan una
            solución rápida y efectiva para empezar a construir su patrimonio
            financiero.
          </div>
        </li>
      </ul>
    </div>
  );
};
