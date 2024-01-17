import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom";
import { HeaderNormal } from "../components/Header-normal";
import { BASE_URL } from "../hooks/fetch";
import "../styles/Verificacion.css";

export const Verificacion = () => {
  const nav = useNavigate();
  const { register, handleSubmit, control } = useForm({
    shouldUseNativeValidation: true,
  });
  const [verificado, setVerificado] = useState(true);
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState("");

  const [estiloError, setEstiloError] = useState({
    display: "none",
  });
  const divRef = useRef(null);
  const nodoDiv = divRef.current;

  useEffect(() => {
    window.scrollTo(0, 0);
    async function getUser() {
      const token = localStorage.getItem("access");
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const params = {
        _cacheBuster: new Date().getTime(),
      };
      if (token) {
        try {
          const res = await axios.get(`${BASE_URL}kyc/`, {
            headers: headers,
            params: params,
          });

          if (res.data.KYC_Detail.state != "") {
            nav("/");
          } else {
            console.log(pass);
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        nav("/login");
      }
    }

    async function getCountries() {
      const resC = await axios.get("https://restcountries.com/v2/all");
      setCountries(resC.data);
    }
    getUser();
    getCountries();
  }, []);

  const [archivo, setArchivo] = useState(null);
  const [isFile, setIsFile] = useState(false);
  const [countries, setCountries] = useState([]);

  function handleFileChange(e) {
    if (e.target.type === "file") {
      setArchivo(e.target.files[0]);
      setIsFile(true);
    } else {
      setFormulario({
        ...formulario,
        [e.target.name]: e.target.value,
      });
      setIsFile(false);
    }
  }

  const calculateAge = (birthdate) => {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  };

  async function onSubmit(data) {
    const token = localStorage.getItem("access");
    if (token) {
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const params = {
        _cacheBuster: new Date().getTime(),
      };
      const formData = new FormData();
      formData.append("full_name", data.full_name);
      formData.append("nationality", data.nationality);
      formData.append("identification", data.identification);
      formData.append("date_of_birth", data.date_of_birth);
      formData.append("email", data.email);
      formData.append("phone", data.phone_number);
      formData.append("address", data.address);
      formData.append("gender", data.gender);
      formData.append("identification_file", archivo);

      const age = calculateAge(data.date_of_birth);

      if (isFile === false || checked === false) {
        nodoDiv.scrollIntoView({ behavior: "smooth" });
        setError("Para continuar debes completar todos los campos");
        setEstiloError({
          display: "block",
        });
      } else {
        if (data.phone_number && data.phone_number.length > 6) {
          if (age < 18) {
            setEstiloError({
              display: "block",
            });
            setError("Debes ser mayor de edad");
          } else {
            const res = await axios.post(`${BASE_URL}kyc/`, formData, {
              headers: headers,
              params: params,
            });
            nav("/");
          }
        } else {
          setEstiloError({
            display: "block",
          });
          setError("Número telefonico no valido");
          console.log("error");
        }
      }
    } else {
      nav("/login");
    }
  }

  return (
    <div className="verificacionpage">
      <div className="header">
        <HeaderNormal></HeaderNormal>
      </div>
      {verificado ? (
        <div className="verificacioncontainer">
          <div className="textverif-cont">
            <div className="textverif">
              <h1>Necesitamos verificar tu cuenta.</h1>
              <h2>
                Para que pueda convertirse en miembro de Smart Future Income y
                crear un plan con nosotros, necesitamos verificar su identidad.
              </h2>
            </div>
          </div>

          <div className="formverif">
            <h1>Verificar</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="slot">
                <p>Nombre completo</p>
                <input
                  type="text"
                  placeholder="Ingresa tu nombre"
                  {...register("full_name", {
                    required: "Por favor ingresa un nombre valido",
                  })}
                />
              </div>
              <div className="slot">
                <p>Identificacion</p>
                <input
                  type="text"
                  placeholder="Ingresa tu identificacion"
                  {...register("identification", {
                    required: "Por favor ingresa una identificacion valida",
                  })}
                />
              </div>
              <div className="slot" id="marg">
                <p>Nacionalidad</p>
                {/* <input
                  type="text"
                  placeholder="Ingresa tu Nacionalidad"
                  {...register("nationality", {
                    required: "Por favor ingresa una nacionalidad valida",
                  })}
                /> */}
                <select
                  {...register("nationality", {
                    required: "Por favor selecciona una nacionalidad valida",
                  })}
                >
                  {countries.map((country) => (
                    <option value={country.name}> {country.name}</option>
                  ))}
                </select>
              </div>
              <div className="slot">
                <p>Genero</p>
                <select
                  {...register("gender", {
                    required: "Por favor ingresa un genero",
                  })}
                >
                  <option value="" disabled>
                    Selecciona un género
                  </option>
                  <option value="Masculino">Masculino</option>
                  <option value="Femenino">Femenino</option>
                </select>
              </div>
              <div className="slot">
                <p>Telefono</p>
                <Controller
                  name="phone_number"
                  control={control}
                  rules={{ required: "Por favor ingresa tu numero" }}
                  render={({ field }) => (
                    <PhoneInput
                      inputStyle={{ fontSize: "1.2rem", width: "100%" }}
                      containerStyle={{ width: "80%" }}
                      type="number"
                      placeholder="Número de celular"
                      value={field.value}
                      onChange={(value) => field.onChange(value)}
                      className="no-spinner"
                      country={"cr"}
                    />
                  )}
                />
              </div>
              <div className="slot">
                <p>Fecha de nacimiento</p>
                <input
                  type="date"
                  placeholder="Ingresa tu Fecha de nacimiento"
                  {...register("date_of_birth", {
                    required: "Por favor ingresa una fecha valida",
                  })}
                />
              </div>
              <div className="slot" id="direccion">
                <p>Email</p>
                <input
                  type="text"
                  placeholder="Ingresa tu Email"
                  {...register("email", {
                    required:
                      "Por favor ingresa una direccion de correo valida",
                  })}
                />
              </div>
              <div className="slot" id="direccion">
                <p>Direccion</p>
                <input
                  type="text"
                  placeholder="Ingresa tu Direccion"
                  {...register("address", {
                    required: "Por favor ingresa una direccion valida",
                  })}
                />
              </div>
              <div className="slot" id="select">
                <p>Expediente de identificación/pasaporte o fotografía</p>
                <input type="file" name="archivo" onChange={handleFileChange} />
                {isFile ? (
                  <div className="slot" id="selectImage">
                    Archivo seleccionado correctamente
                  </div>
                ) : (
                  ""
                )}
              </div>

              <div className="slot" id="checkb">
                <label>
                  <input
                    type="checkbox"
                    onClick={() => {
                      setChecked(!checked);
                    }}
                  />{" "}
                  <p>
                    Al hacer clic aquí, confirma que ha leído y acepta los
                    <a
                      style={{ color: "blue" }}
                      href="https://www.smartfutureincome.com/media/terminos.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      términos de uso
                    </a>
                    , la Política de privacidad y acepta que sus datos serán
                    enviados a Smart Furute Income.
                  </p>
                </label>
              </div>

              <div className="slot" id="enviar">
                <button type="submit">Enviar</button>
              </div>
            </form>
            <div className="error" style={estiloError} ref={divRef}>
              <h3>{error}</h3>
            </div>
          </div>
        </div>
      ) : (
        <div className="alertaverif">
          <div className="content">
            <h1>Verificando su informacion</h1>
            <p>
              Para que seas miembro de Smart Future Income estamos verificando
              su informacion. Por favor vuelve mas tarde para verificar el
              estado de su cuenta
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
