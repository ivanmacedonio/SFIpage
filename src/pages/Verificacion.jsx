import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderNormal } from "../components/Header-normal";
import "../styles/Verificacion.css";

export const Verificacion = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const nav = useNavigate();

  const [verificado, setVerificado] = useState(true);
  return (
    <div className="verificacionpage">
      <div className="header">
        <HeaderNormal></HeaderNormal>
      </div>
      {verificado ? (
        <div className="verificacioncontainer">
          <div className="textverif">
            <h1>Necesitamos verificar tu cuenta.</h1>
            <h2>
              Para que pueda convertirse en miembro de Smart Future Income y
              crear un plan con nosotros, necesitamos verificar su identidad.
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
                <input
                  type="text"
                  placeholder="Ingresa tu Fecha de nacimiento"
                />
              </div>
              <div className="slot" id="direccion">
                <p>Direccion</p>
                <input type="text" placeholder="Ingresa tu Direccion" />
              </div>
              <div className="slot" id="select">
                <p>Expediente de identificación/pasaporte o fotografía</p>
                <input type="file" />
              </div>
              <div className="slot" id="checkb">
                <input type="checkbox" />{" "}
                <p>
                  Al hacer clic aquí, confirma que ha leído y acepta los
                  <a href="https://smartprofitinvestments-my.sharepoint.com/personal/transformacion_spiglobal_net/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Ftransformacion%5Fspiglobal%5Fnet%2FDocuments%2FMicrosoft%20Teams%20Chat%20Files%2FT%C3%89RMINOS%20DE%20USO%20DE%20BENEFICIO%20SFI%2Epdf&parent=%2Fpersonal%2Ftransformacion%5Fspiglobal%5Fnet%2FDocuments%2FMicrosoft%20Teams%20Chat%20Files&ga=1">
                    {" "}
                    términos de uso
                  </a>
                  , la Política de privacidad y acepta que sus datos serán
                  enviados a Smart Furute Income.
                </p>
              </div>
              <div className="slot" id="enviar">
                <button
                  onClick={() => {
                    nav("/membresia");
                  }}
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="alertaverif">
          <div className="content">
            <h1>Verificando su informacion</h1>
            <p>
              Para que seas miembro de Smart Future Income estamos verificando
              su informacion. Por favor vuelve mas tarde para verificar el
              estado de su cuenta
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
