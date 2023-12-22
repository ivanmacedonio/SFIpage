import React, { useState } from "react";
import { useForm } from "react-hook-form";
import candado from "../assets/shield.jpg";
import "../styles/Forgot.css";

export const Forgot = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [change, setChange] = useState(false);
  const [text, setText] = useState("Enviar");
  const { register, handleSubmit } = useForm({
    shouldUseNativeValidation: true,
  });

  function onSubmit(data) {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setChange(true);
      setText("Enviado con éxito");
    }, 3000);
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
            <button type="submit" id={change ? "change" : ""}>
              {" "}
              {isLoading ? <div class="spinner"></div> : `${text}`}
            </button>
          </form>
        </div>
      </div>
      <div className="candado">
        <img src={candado} alt="" />
        <h2>
          Te enviaremos un formulario al correo electronico indicado donde
          podras restablecer tu contraseña. Ante cualquier problema no dudes en
          contactarte con nosotros
        </h2>
      </div>
    </div>
  );
};
