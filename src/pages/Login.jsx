import React, { useState } from "react";
import { Link } from "react-router-dom";
import chica from "../assets/afiliarse.webp";
import { HeaderNormal } from "../components/Header-normal";
import "../styles/Login.css";
export const Login = () => {
  const [password, setPassword] = useState(false);

  const handleShow = () => {
    setPassword(!password)
  };
  return (
    <div>
      <div className="header">
        <HeaderNormal></HeaderNormal>
      </div>
      <div className="logincontainer">
        <img src={chica} alt="" />
        <div className="formlogin">
          <form>
            <h1>Iniciar sesión</h1>
            <input type="text" placeholder="Ingrese el correo electronico" />
            <input type={password ? 'password' : 'text'} placeholder="Ingrese la contraseña" />
            <label>
              <input type="checkbox" onClick={handleShow} />
              Mostrar contraseña
            </label>
            <button type="submit">Enviar</button>
            <a href="" id="forgot">
              Olvide mi contraseña
            </a>
            <Link to={"/register"}>
              <div className="afiliar">No estas afiliado? Afiliate aquí</div>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};
