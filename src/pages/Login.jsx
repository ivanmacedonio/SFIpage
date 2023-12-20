import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import chica from "../assets/afiliarse.webp";
import { HeaderNormal } from "../components/Header-normal";
import { BASE_URL } from "../hooks/fetch";
import "../styles/Login.css";
export const Login = () => {
  const [password, setPassword] = useState(false);
  const { register, handleSubmit } = useForm({
    shouldUseNativeValidation: true,
  });
  const [error, setError] = useState("");
  const [display1, setDisplay1] = useState({
    display: "none",
  });
  const handleShow = () => {
    setPassword(!password);
  };
  const nav = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(`${BASE_URL}login/`, data);
      localStorage.setItem("access", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);

      const headers = {
        Authorization: `Bearer ${res.data.access}`,
      };
      const res2 = await axios.get(`${BASE_URL}kyc/`, {
        headers: headers,
      });
      if (res2.data.KYC_Detail) {
        nav("/");
      } else {
        nav("/verificacion");
      }
    } catch (error) {
      setError("El usuario o la contraseña son invalidos");
      setDisplay1({
        display: "block",
      });
    }
  };
  return (
    <div>
      <div className="header">
        <HeaderNormal></HeaderNormal>
      </div>
      <div className="logincontainer">
        <img src={chica} alt="" />
        <div className="formlogin">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Iniciar sesión</h1>
            <input
              type="text"
              placeholder="Ingrese el correo electronico"
              {...register("username", { required: "Ingresa un email valido" })}
            />
            <input
              type={password ? "text" : "password"}
              placeholder="Ingrese la contraseña"
              {...register("password", {
                required: "Ingresa un password valido",
              })}
            />
            <label>
              <input type="checkbox" onClick={handleShow} />
              Mostrar contraseña
            </label>
            <button type="submit">Enviar</button>
            <div className="errorLogin" style={display1}>
              <h3>{error}</h3>
            </div>
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
