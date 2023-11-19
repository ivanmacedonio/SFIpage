import React from "react";
import boy from "../assets/pasosSFI.png";
import { Carrouselp3 } from "../components/Carrouselp3";
import { Footer } from "../components/Footer";
import { HeaderNormal } from "../components/Header-normal";
import { Scrollp3 } from "../components/Scrollp3";
import "../styles/page3.css";
export const Page3 = () => {
  return (
    <div className="page3">
      <div className="header">
        <HeaderNormal></HeaderNormal>
      </div>
      <div className="containerp3">
        <div className="titlep3">
          <h1>Únete a Smart Future Income en cuatro sencillos pasos:</h1>
        </div>
      </div>
      <div className="carrouselp3">
        <Carrouselp3></Carrouselp3>
      </div>
      <div className="pasosp3">
        <div className="imagenp3">
          <img src={boy} alt="" />
        </div>
        <div className="numbers">
          <h1>1</h1>
          <h1>2</h1>
          <h1>3</h1>
          <h1>4</h1>
        </div>
        <div className="textpasos">
          <div className="card">
            <h1>KYC y Registro</h1>
            <p>
              Crea tu cuenta en minutos. Proporciona tus datos básicos y
              selecciona un nombre de usuario y contraseña, mientras esperas la
              validación y aprobación de tu perfil.{" "}
            </p>
          </div>
          <div className="card">
            <h1>Selecciona tu Membresía:</h1>
            <p>
              Explora nuestras opciones de membresía y elige la que se adapte
              mejor a tus necesidades y objetivos
            </p>
          </div>
          <div className="card">
            <h1>Acceso:</h1>
            <p>
              Una vez que te conviertas en miembro, tendrás acceso a una amplia
              gama de beneficios, incluyendo a sesiones sobre educación de alta
              calidad, asesoramiento dentro del blog de la comunidad de SFI y la
              oportunidad de participar en proyectos que asegurarán tus años
              futuros.{" "}
            </p>
          </div>
          <div className="card">
            <h1>Pago con Activos Digitales:</h1>
            <p>
              Realiza el pago de tu membresía mensual utilizando tu wallet de
              activos digitales. Nuestro sistema seguro te guiará a través del
              proceso.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="planesp3">
        <h1>Planes</h1>
        <p>¿7 Razones para convertirme en afiliado? </p>
      </div>
      <div className="scrollp3">
        <Scrollp3></Scrollp3>
      </div>
      <div className="razonescontainer">
        <div className="razones">
          <ul>
            <li>
              El plan de membresías es una forma eficiente de poder asegurar tu
              futuro.
            </li>
            <li>
              Decide cuál es el modelo de membresía entre nuestra gama de planes
              y haz las aportaciones que más te convengan
            </li>
            <li>Comienza tu membresía desde tan solo $84 al mes.</li>
            <li>Realizar membresías periódicas o sumas únicas. </li>
            <li>
              Cualquiera puede realizar el aporte de tu membresía para cultivar
              la maceta de tu futura prosperidad. Recuerda debes regarla
              periódicamente!
            </li>
          </ul>
        </div>
        <div className="razones2">
          <ul>
            <li>
              Obtenga beneficios informativos desde el día 1 en nuestro blog y a
              partir de los 2 años de maduración de tus membresías para percibir
              la tranquilidad prospera que solo SFI le puede ofrecer
            </li>
            <li>Asesoramiento especializado de SFI durante el proceso. </li>
          </ul>
        </div>
      </div>

      <div className="footer">
        <Footer></Footer>
      </div>
    </div>
  );
};
