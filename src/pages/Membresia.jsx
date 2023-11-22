import React, { useEffect } from "react";
import { Footer } from "../components/Footer";
import { HeaderNormal } from "../components/Header-normal";

import "../styles/Membresia.css";
export const Membresia = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
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

        <div className="tipos">
          <h2 id="tiposd">Tipo de Membresía:</h2>
          <div className="plan">
            <h2>1. Plan Educativo a Corto Plazo</h2>
            <p>
              Propósito: Este plan está diseñado para miembros que desean
              enfocarse en la educación
            </p>
          </div>
          <div className="plan">
            <h2>2. Plan de Seguridad a Largo Plazo</h2>
            <p>
              Propósito: Este plan está destinado a quienes desean asegurar su
              futuro a largo plazo
            </p>
          </div>
          <div className="plan">
            <h2>3. Plan de Años Dorados:</h2>
            <p>
              Propósito: Este plan está diseñado para aquellos que buscan una
              solución a largo plazo para su jubilación. Los miembros pueden
              contar con una estrategia de inversión que se enfoca en la
              acumulación de activos para asegurar un flujo de ingresos pasivos
              una vez que se retiren.
            </p>
          </div>
          <div className="plan">
            <h2>4. Plan de Educación para los Hijos:</h2>
            <p>Propósito: Este plan se centra en la educación de los hijos.</p>
          </div>
          <div className="plan">
            <h2>5. Plan de Proyectos Sociales:</h2>
            <p>
              Propósito: Este plan permite a los miembros invertir en proyectos
              sociales y comunitarios que aseguren un mejor futuro para la
              sociedad. Los ingresos generados se destinan a proyectos que
              aborden problemas como la educación, la salud o el medio ambiente.
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
