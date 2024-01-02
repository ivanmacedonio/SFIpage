import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { MicroNav } from "../components/MicroNav";
import { BASE_URL } from "../hooks/fetch";
import "../styles/Reset.css";

export const Reset = () => {
  const nav = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");
  const uidb64 = queryParams.get("uidb64");
  const { register, handleSubmit } = useForm({
    shouldUseNativeValidation: true,
  });
  const [error, setError] = useState();
  const [passType, setPassType] = useState(false);
  const [success, setSuccess] = useState("");
  async function onSubmit(data) {
    if (data.pass1 !== data.pass2) {
      setError("Las contraseñas no coinciden");
    } else {
      const dataReset = {
        new_password: data.pass1,
        uidb64: uidb64,
        token: token,
      };
      try {
        const res = await axios.post(
          `${BASE_URL}password-reset-confirm/`,
          dataReset
        );

        setSuccess("Contraseña modificada correctamente");
        setTimeout(() => {
          nav("/login");
        }, 2000);
      } catch (error) {
        setError(error.response.data.error);
        console.log(error.response.data.error);
      }
    }
  }

  function handleShow() {
    setPassType(!passType);
    console.log(`${token} --- ${uidb64}`);
  }

  return (
    <div className="containerresetgenerall">
      <div className="resetcontainer">
        <h1>Crear una nueva contraseña</h1>
        <h3>
          Como medida de seguridad, la contraseña debe ser diferente a las
          usadas anteriormente
        </h3>
        <hr style={{ marginTop: "2rem" }} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <p>Contraseña</p>
          <input
            type={passType ? "text" : "password"}
            {...register("pass1", {
              required: "Ingresa una contraseña valida",
            })}
          />
          <p>Confirma tu contraseña</p>
          <input
            type={passType ? "text" : "password"}
            {...register("pass2", {
              required: "Ingresa una contraseña valida",
            })}
          />
          <div className="errorreset">
            {error && <h2 id="error">{error}</h2>}
          </div>
          <label>
            <input type="checkbox" onClick={handleShow} />
            Mostrar contraseña
          </label>
          <div className="successChange">
            <h2>{success}</h2>
          </div>
          <button type="submit">Restablecer</button>
        </form>
      </div>
      <MicroNav state={"change"}></MicroNav>
    </div>
  );
};
