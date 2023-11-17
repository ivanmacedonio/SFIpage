import React from "react";
import "../styles/Carrouselp3.css";
export const Carrouselp3 = () => {
  return (
    <div className="carousel">
      <div className="slide">
        <p>
          Crea tu cuenta en minutos. Proporciona tus datos básicos y selecciona
          un nombre de usuario y contraseña, mientras esperas la validación y
          aprobación de tu perfil.
        </p>
      </div>
      <div className="slide">
        <p>
          Explora nuestras opciones de membresía y elige la que se adapte mejor
          a tus necesidades y objetivos.
        </p>
      </div>
      <div className="slide" id="higher">
        <p>
          Una vez que te conviertas en miembro, tendrás acceso a una amplia gama
          de beneficios, incluyendo a sesiones sobre educación de alta calidad,
          asesoramiento dentro del blog de la comunidad de SFI y la oportunidad
          de participar en proyectos que asegurarán tus años futuros.
        </p>
      </div>
      <div className="slide">
        <p>
          Realiza el pago de tu membresía mensual utilizando tu wallet de
          activos digitales. Nuestro sistema seguro te guiará a través del
          proceso.
        </p>
      </div>
    </div>
  );
};
