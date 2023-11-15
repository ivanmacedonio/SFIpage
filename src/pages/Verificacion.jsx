import React from "react";
import { HeaderNormal } from "../components/Header-normal";
import "../styles/Verificacion.css";
export const Verificacion = () => {
  return (
    <div className="verificacionpage">
      <div className="header">
        <HeaderNormal></HeaderNormal>
      </div>
      <div className="verificacioncontainer">
        <div className="textverif">
          <h1>Necesitamos verificar tu cuenta.</h1>
          <h2>
            Para que pueda convertirse en miembro de Smart Future Income y crear
            un plan con nosotros, necesitamos verificar su identidad.
          </h2>
        </div>
        <div className="formverif">
          <h1>Verificar</h1>
          <form>
            <div className="slot">
              <p>Nombre completo</p>
              <input type="text" placeholder="Ingresa tu nombre" />
            </div>
            <div className="slot">
              <p>Identificacion</p>
              <input type="text" placeholder="Ingresa tu identificacion" />
            </div>
            <div className="slot">
              <p>Nacionalidad</p>
              <input type="text" placeholder="Ingresa tu Nacionalidad" />
            </div>
            <div className="slot">
              <p>Genero</p>
              <input type="text" placeholder="Ingresa tu Genero" />
            </div>
            <div className="slot">
              <p>Telefono</p>
              <input type="text" placeholder="Ingresa tu Telefono" />
            </div>
            <div className="slot">
              <p>Fecha de nacimiento</p>
              <input type="text" placeholder="Ingresa tu Fecha de nacimiento" />
            </div>
            <div className="slot" id="direccion">
              <p>Direccion</p>
              <input type="text" placeholder="Ingresa tu Fecha de Direccion" />
            </div>
            <div className="slot" id="select">
              <p>Expediente de identificación/pasaporte o fotografía</p>
              <input type="file" />
            </div>
            <div className="slot" id="checkb">
              <input type="checkbox" />{" "}
              <p>
                Al hacer clic aquí, confirma que ha leído y acepta los Términos
                de uso, la Política de privacidad y acepta que sus datos serán
                enviados a Smart Furute Income.
              </p>
            </div>
            <div className="slot" id="enviar">
              <button>Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
