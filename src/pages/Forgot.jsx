import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import candado from "../assets/shield.jpg";
import { MicroNav } from "../components/MicroNav";
import { BASE_URL } from "../hooks/fetch";
import "../styles/Forgot.css";

export const Forgot = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [change, setChange] = useState(false);
  const [error, setError] = useState("");
  const [text, setText] = useState("Enviar");
  const { register, handleSubmit } = useForm({
    shouldUseNativeValidation: true,
  });

  async function onSubmit(data) {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    try {
      const res = await axios.post(`${BASE_URL}password-reset/`, data);
      setText("Enviado correctamente");
      setChange(true);
      setError('')
      console.log(res)
    } catch (error) {
      setError(error.response.data.email);
      setChange(false);
    }
  }
  return (
    <div className="containrgeneral">
      <div className="forgotcontainer">
        <div className="formularioRestablecer">
          <h3 id="slogan">Smart Future Income</h3>
          <h1>¿Olvidaste tu contraseña?</h1>
          <h4>
            No te preocupes, nosotros nos encargamos de que recuperes tu cuenta.
          </h4>

          <form onSubmit={handleSubmit(onSubmit)}>
            <p>Dirección de correo electronico</p>
            <input
              type="text"
              placeholder="Email"
              {...register("email", {
                required: "Ingresa un email valido",
              })}
            />
            <button
              type="submit"
              id={change ? "change" : ""}
              disabled={change ? true : false}
            >
              {" "}
              {isLoading ? <div class="spinner"></div> : `${text}`}
            </button>
          </form>
          {error !== "" ? <div className="errorForgot">{error}</div> : ""}
        </div>
      </div>
      <div className="candado">
        <img src={candado} alt="" />
        <h2>
          Te enviaremos un formulario al correo electrónico indicado, donde
          podrás restablecer tu contraseña. Ante cualquier problema, no dudes en
          contactarte con nosotros.
        </h2>
      </div>
      <MicroNav state={'change'}></MicroNav>
    </div>
  );
};
