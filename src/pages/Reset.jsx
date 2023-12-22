import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../styles/Reset.css";

export const Reset = () => {
  const { register, handleSubmit } = useForm({
    shouldUseNativeValidation: true,
  });
  const [error, setError] = useState();
  function onSubmit(data) {
    if (data.pass1 !== data.pass2) {
      setError("Las contraseñas no coinciden");
    } else {
      console.log("peticion http");
    }
  }
  return (
    <div className="containerresetgenerall">
      <div className="resetcontainer">
        <h1>Crear una nueva contraseña</h1>
        <h3>
          Como medida de seguridad, la contraseña debe ser diferente a las
          usadas anteriormente
        </h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p>Contraseña</p>
          <input
            type="text"
            {...register("pass1", {
              required: "Ingresa una contraseña valida",
            })}
          />
          <p>Confirma tu contraseña</p>
          <input
            type="text"
            {...register("pass2", {
              required: "Ingresa una contraseña valida",
            })}
          />
          <div className="errorreset">
            {error && <h2 id="error">Las contraseñas no coinciden o no son validas</h2>}
          </div>
          <button type="submit">Restablecer</button>
        </form>
      </div>
    </div>
  );
};
