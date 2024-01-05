import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import icono from "../assets/icono.png";
import { MicroNav } from "../components/MicroNav";
import { BASE_URL, BASE_URL_LOGIN } from "../hooks/fetch";
import "../styles/Login.css";
export const Login = () => {
  const [password, setPassword] = useState(false);
  const [loading, setIsLoading] = useState(false);
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
    setIsLoading(true);
    try {
      const res = await axios.post(`${BASE_URL_LOGIN}token/`, data);
      // const res = await axios.post(`${BASE_URL}login/`, data);
      localStorage.setItem("access", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);

      const headers = {
        Authorization: `Bearer ${res.data.access}`,
      };
      const res2 = await axios.get(`${BASE_URL}kyc/`, {
        headers: headers,
      });
      if (res2.data.KYC_Detail) {
        setTimeout(() => {
          setIsLoading(false);
          nav("/");
        }, 3000);
      } else {
        setTimeout(() => {
          setIsLoading(false);
          nav("/verificacion");
        }, 3000);
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      setError(error.response.data.detail);
      setDisplay1({
        display: "block",
      });
    }
  };

  function createGoogleToken(response) {
    const googleToken = response.credential;
    axios
      .post(`${BASE_URL}validate-google/`, { credential: googleToken })
      .then((response) => {
        localStorage.setItem("access", response.data.access);
        nav("/");
      })
      .catch((error) => {
        console.log(error);
        nav("/register");
      });
  }

  return (
    <div>
      <div className="containergeneral">
        <div className="logincontainer">
          <div className="containericono">
            <img src={icono} alt="" />
            <h1 id="slogan">Smart Future Income</h1>
          </div>

          <div className="separador">
            <h1>Inicia sesión en tu cuenta </h1>
            <p>¡Nos alegramos de volver a verte!</p>
            <hr />
          </div>
          <GoogleLogin
            onSuccess={(response) => {
              createGoogleToken(response);
            }}
            onError={(response) => {
              setError(`Error en la autenticacion con Google: ${response}`);
            }}
          />

          {/* <div className="tokens">
            <button>Google</button>
            <button>Facebook</button>
          </div> */}
          <div className="formlogin">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                placeholder="Email"
                {...register("username", {
                  required: "Ingresa un email valido",
                })}
              />
              <input
                type={password ? "text" : "password"}
                placeholder="Contraseña"
                {...register("password", {
                  required: "Ingresa un password valido",
                })}
              />
              <label>
                <input type="checkbox" onClick={handleShow} />
                Mostrar contraseña
              </label>
              <button type="submit">
                {loading ? <div class="spinner"></div> : "Ingresar"}
              </button>

              <div className="errorLogin" style={display1}>
                <h3>{error}</h3>
              </div>
              <a href="" id="forgot">
                <Link to={"/forgot"}>Olvide mi contraseña</Link>
              </a>

              <Link to={"/register"}>
                <div className="afiliar">¿No estas afiliado? Afiliate aquí</div>
              </Link>
            </form>
          </div>
        </div>
        <MicroNav state={"login"}></MicroNav>
      </div>
    </div>
  );
};
