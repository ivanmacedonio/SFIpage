import React from "react";
import chicablog from "../assets/Afiliarse.png";
import { HeaderNormal } from "../components/Header-normal";
import "../styles/Register.css";
export const Register = () => {
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
            <button type="submit" id="afiliarsebutton">Afiliarse</button>
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
