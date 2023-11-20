import React, { useEffect } from "react";
import { HeaderNormal } from "../components/Header-normal";
import "../styles/perfil.css";

export const Perfil = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
  return (
    <div className="perfilpage">
      <div className="header">
        <HeaderNormal></HeaderNormal>
      </div>
      <div className="profilecontainer">
        <div className="formprofile1">
          <h1>Perfil</h1>
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
          <h1>Membresía</h1>
          <div className="form2">
            <h2 id="datos">Datos de membresía</h2>
            <p>Tipo de membresia</p>
            <h2>Educativo a corto plazo</h2>
            <p>Cuotas</p>
            <h2>24/24</h2>
            <p>Fecha de inicio</p>
            <h2>01/12/23</h2>
            <p>Fecha de vencimiento</p>
            <h2>1/12/25</h2>
            <p>Cantidad de bonos</p>
            <h2 id="end">0/60</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
