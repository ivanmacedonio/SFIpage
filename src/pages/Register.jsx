import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import chicablog from "../assets/afiliarse.webp";
import { HeaderNormal } from "../components/Header-normal";
import "../styles/Register.css";

export const Register = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { register, handleSubmit } = useForm({
    shouldUseNativeValidation: true,
  });
  const onSubmit = (data) => {
    console.log(data);
  };
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Afiliarse</h1>
            <input
              type="text"
              placeholder="Ingresa tu nombre"
              {...register("name", {
                required: "Por favor ingresa tu nombre",
              })}
            />
            <input
              type="text"
              placeholder="Ingresa tu correo electronico"
              {...register("email", {
                required: "Por favor ingresa tu email",
              })}
            />
            <input
              type="text"
              placeholder="Ingresa tu numero de celular"
              {...register("number", {
                required: "Por favor ingresa tu numero",
              })}
            />
            <input
              type="text"
              placeholder="Ingresa tu contraseña"
              {...register("pass1", {
                required: "Por favor ingresa tu contraseña",
              })}
            />
            <input
              type="text"
              placeholder="Confirma tu contraseña"
              {...register("pass2", {
                required: "Por favor ingresa tu contraseña",
              })}
            />
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
