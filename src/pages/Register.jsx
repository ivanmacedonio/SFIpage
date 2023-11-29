import React, { useEffect } from "react";
import chicablog from "../assets/afiliarse.webp";
import { HeaderNormal } from "../components/Header-normal";
import "../styles/Register.css";

export const Register = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="page4">
      <div className="header">
        <HeaderNormal></HeaderNormal>
      </div>
      <div className="contentp4">
        <div className="imageblog">
          <img src={chicablog} alt="" />
        </div>
        <div className="formp4">
          <form action="">
            <h1>Afiliarse</h1>
            <input type="text" placeholder="Ingresa tu nombre" />
            <input type="text" placeholder="Ingresa tu correo electronico" />
            <input type="text" placeholder="Ingresa tu numero de celular" />
            <input type="text" placeholder="Ingresa tu contraseña" />
            <input type="text" placeholder="Confirma tu contraseña" />
            <button type="submit" id="afiliarsebutton">
              Afiliarse
            </button>
          </form>
          <div className="option">
            <p>Or signup with</p>
            <div className="buttonslogin">
              <button>Google</button>
              <button>Facebook</button>
            </div>
            <p>Already have an account? Sign in</p>
          </div>
        </div>
      </div>
    </div>
  );
};
