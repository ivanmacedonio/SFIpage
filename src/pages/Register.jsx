import axios from "axios";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../hooks/fetch";
import "../styles/Register.css";
export const Register = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  const { register, handleSubmit, control } = useForm({
    shouldUseNativeValidation: true,
  });
  const [error, setError] = useState("");
  const [loading, setIsLoading] = useState(false);
  const [errorRegisterStyle, setErrorRegisterStyle] = useState({
    display: "none",
  });

  const [show, setShow] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    if (data.password == data.password2) {
      try {
        if (data.phone_number && data.phone_number.length > 6) {
          const res = await axios.post(`${BASE_URL}register/`, data);
          setTimeout(() => {
            setIsLoading(false);
            navigate("/login");
          }, 3000);
        } else {
          setIsLoading(false);
          setError("Número telefonico no valido");
          setErrorRegisterStyle({
            display: "block",
          });
        }
      } catch (error) {
        setIsLoading(false);
        setError(`${""}Usuario ya registrado`);
        setErrorRegisterStyle({
          display: "block",
        });
        console.log(error);
      }
    } else {
      setError("Las contraseñas no coinciden");
      setErrorRegisterStyle({
        display: "block",
      });
    }
  };
  return (
    <div className="containergeneralRegister">
      <div className="registercontainer">
        <h1>Crear una cuenta</h1>
        <p>Crea una cuenta en Smart Future Income</p>

        <div className="formregister">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Nombre"
              {...register("full_name", {
                required: "Por favor ingresa tu nombre",
              })}
            />
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Por favor ingresa tu email",
              })}
            />

            <Controller
              name="phone_number"
              control={control}
              rules={{ required: "Telefono" }}
              render={({ field }) => (
                <PhoneInput
                  inputStyle={{ fontSize: "1.2rem", width: "100%" }}
                  containerStyle={{ marginBottom: "1rem" }}
                  type="number"
                  placeholder="Ingresa tu numero de celular"
                  value={field.value} // Important: Set the value from React Hook Form
                  onChange={(value) => field.onChange(value)} // Important: Set the onChange from React Hook Form
                  className="no-spinner"
                />
              )}
            />
            <div className="passcontainer">
              <input
                type={show ? "text" : "password"}
                placeholder="Contraseña"
                {...register("password", {
                  required: "Por favor ingresa tu contraseña",
                })}
              />
            </div>

            <div className="passcontainer">
              <input
                type={show ? "text" : "password"}
                placeholder="Repite tu contraseña"
                {...register("password2", {
                  required: "Por favor ingresa tu contraseña",
                })}
              />
            </div>
            <label>
              <input
                type="checkbox"
                onClick={() => {
                  setShow(!show);
                }}
              />
              Mostrar contraseña
            </label>

            <button type="submit">
              {loading ? <div class="spinner"></div> : "Registrarse"}
            </button>
          </form>

          <div className="errorRegister" style={errorRegisterStyle}>
            <h2>{error}</h2>
          </div>
          <div className="option">
            <Link to={"/login"}>
              <p id="loguear">¿Ya tienes una cuenta? Ingresa aquí</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
