import React, { useEffect, useState } from "react";
import estado from "../assets/Asset 26.png";
import { HeaderNormal } from "../components/Header-normal";
import BasicModal from "../components/ModalProfile1";
import "../styles/perfil.css";

export const Perfil = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [active, setActive] = useState(false);
  const [estilo, setEstilo] = useState({ display: "none" });
  const [isMember, setIsMember] = useState(false);

  function handleQuinquenio() {
    setActive(!active);
    setEstilo({ display: active ? "none" : "block" });
  }

  return (
    <div className="perfilpage">
      <div className="header">
        <HeaderNormal></HeaderNormal>
      </div>
      <div className="profilecontainer">
        <div className="formprofile1">
          <h1 id="perfilh11">Perfil</h1>
          <div className="form1">
            <p>Nombre</p>
            <h2>Cristopher</h2>
            <p>Apellidos</p>
            <h2>Saborio Alfaro</h2>
            <p>Correo</p>
            <h2>saboriocris@gmail.com</h2>
            <p>Cumpleaños</p>
            <h2>14/10/1997</h2>
          </div>
        </div>
        <div className="formprofile2">
          <h1 id="deletemem">Membresía</h1>
          {isMember ? (
            <div className="form2">
              <h1 id="datosmem">Datos de membresia</h1>
              <div className="caja">
                <p>Tipo de membresia</p>
                <h2>Educativo a corto plazo</h2>
              </div>
              <div className="caja">
                <p>Cuotas</p>
                <h2 id="cuotas">24/24</h2>
              </div>
              <div className="caja">
                <p>Tiempo de maduracion</p>
                <h2 id="maduracion">2 meses</h2>
              </div>
              <div className="caja">
                <p>Fecha de inicio</p>
                <h2 id="fecha">1/2/3</h2>
              </div>
              <div className="caja">
                <h3 id="descargar">Descargar contrato</h3>
              </div>
              <div className="caja" id="quinquenio">
                <input type="checkbox" onClick={handleQuinquenio} /> Retiro de
                quinquenio
              </div>
              <div className="caja" id="estadocuota">
                <img src={estado} alt="" />
              </div>
              <h1 id="bonificacionh1">Bonificacion proyectada</h1>
              <div className="containerfechas">
                <div className="caja">
                  <p>Fecha de inicio</p>
                  <h2>1/12/15</h2>
                </div>
                <div className="caja">
                  <p>Fecha de vencimiento</p>
                  <h2>1/12/25</h2>
                </div>
                <div className="caja">
                  <p>Cantidad de bonos</p>
                  <h2>0/60</h2>
                </div>
              </div>
            </div>
          ) : (
            <div className="noMember">
              <BasicModal></BasicModal>
              <h2>
                Por el momento usted no cuenta con ningún plan de membresia
              </h2>
            </div>
          )}
          <div className="alerta" style={estilo}>
            <p>
              Solo tiene una oportunidad de selección. Para realizar un cambio
              del status de retiro preseleccionado debe ponerse en contacto a
              través de nuestra línea de soporte vía email o a través de nuestro
              formulario de contacto en el sitio web. Este proceso debe suceder
              30 días antes de su fecha proyecta de bonificación al finalizar el
              primer quinquenio de maduración.
            </p>
          </div>
          <h1 id="btn-adicional">+ Membresia adicional</h1>
        </div>
      </div>
    </div>
  );
};
