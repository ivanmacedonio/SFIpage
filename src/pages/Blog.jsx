import React from "react";
import familia from "../assets/Blog.png";
import { HeaderNormal } from "../components/Header-normal";
import "../styles/Blog.css";
export const Blog = () => {
  return (
    <div className="hubpage">
      <div className="header">
        <HeaderNormal></HeaderNormal>
      </div>
      <div className="contenthub">
        <div className="texthub">
          <h1>¡Bienvenido a</h1>
          <h1 id="negrita">nuestra comunidad</h1>
          <h2>
            En nuestro blog, los miembros pueden explorar temas tecnológicos y
            discutir estrategias de gestión en activos digitales. Únete a la
            conversación, comparte tus conocimientos y aprende de otros expertos
            en la comunidad. Descubre las últimas tendencias en activos
            digitales, blockchain y más. Nuestra plataforma de blogs es un
            espacio inclusivo y educativo para todos los entusiastas de las
            finanzas digitales.
          </h2>
        </div>
        <div className="imagehub">
          <img src={familia} alt="" />
        </div>
      </div>
    </div>
  );
};
