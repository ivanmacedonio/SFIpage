import React, { useEffect } from "react";
import contacto from "../assets/contacto.webp";
import { HeaderNormal } from "../components/Header-normal";

import "../styles/contacto.css";
export const Contacto = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="contactopage">
      <div className="header">
        <HeaderNormal></HeaderNormal>
      </div>
      <div className="contactocontainer">
        <div className="imagencontacto">
          <img src={contacto} alt="" />
        </div>

        <div className="formulariocontacto">
          <h1 id="h1contacto">Contacto</h1>
          <form>
            <input type="text" placeholder="Ingresa tu nombre" />
            <input type="text" placeholder="Ingresa tu correo electronico" />
            <input type="text" id="mensaje" placeholder="Mensaje" />
            <div className="labels">
              <label>
                <input type="checkbox" id="check" />
                Terminos y condiciones
              </label>
              <label>
                <input type="checkbox" id="check" />
                Acepto que se me envie a mi correo notificaciones y promociones.
              </label>
            </div>

            <button>Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};
