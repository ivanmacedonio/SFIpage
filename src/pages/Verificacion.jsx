import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { HeaderNormal } from "../components/Header-normal";
import { BASE_URL } from "../hooks/fetch";
import "../styles/Verificacion.css";

export const Verificacion = () => {
  const nav = useNavigate();
  const { register, handleSubmit } = useForm({
    shouldUseNativeValidation: true,
  });
  const [verificado, setVerificado] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
    async function getUser() {
      const token = localStorage.getItem("access");
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      if (token) {
        try {
          const res = await axios.get(`${BASE_URL}kyc/`, {
            headers: headers,
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
    getUser();
  }, []);

  const [archivo, setArchivo] = useState(null);

  function handleFileChange(e) {
    if (e.target.type === "file") {
      setArchivo(e.target.files[0]);
      console.log(e);
    } else {
      setFormulario({
        ...formulario,
        [e.target.name]: e.target.value,
      });
      console.log("no file");
    }
  }

  async function onSubmit(data) {
    const token = localStorage.getItem("access");
    if (token) {
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const formData = new FormData();
      formData.append("full_name", data.full_name);
      formData.append("nationality", data.nationality);
      formData.append("identification", data.identification);
      formData.append("date_of_birth", data.date_of_birth);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("address", data.address);
      formData.append("gender", data.gender);
      formData.append("identification_file", archivo);
      try {
        const res = await axios.post(`${BASE_URL}kyc/`, formData, {
          headers: headers,
        });
        nav('/')
      } catch (error) {
        console.log(error);
      }
    } else {
      nav('/login')
    }
  }

  return (
    <div className="verificacionpage">
      <div className="header">
        <HeaderNormal></HeaderNormal>
      </div>
      {verificado ? (
        <div className="verificacioncontainer">
          <div className="textverif">
            <h1>Necesitamos verificar tu cuenta.</h1>
            <h2>
              Para que pueda convertirse en miembro de Smart Future Income y
              crear un plan con nosotros, necesitamos verificar su identidad.
            </h2>
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
              <div className="slot">
                <p>Nacionalidad</p>
                <input
                  type="text"
                  placeholder="Ingresa tu Nacionalidad"
                  {...register("nationality", {
                    required: "Por favor ingresa una nacionalidad valida",
                  })}
                />
              </div>
              <div className="slot">
                <p>Genero</p>
                <input
                  type="text"
                  placeholder="Ingresa tu Genero"
                  {...register("gender", {
                    required: "Por favor ingresa un genero",
                  })}
                />
              </div>
              <div className="slot">
                <p>Telefono</p>
                <input
                  type="number"
                  placeholder="Ingresa tu Telefono"
                  {...register("phone", {
                    required: "Por favor ingresa un telefono valido",
                  })}
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
                <input
                  type="file"
                  name="archivo"
                  onChange={handleFileChange}
                />
              </div>
              <div className="slot" id="checkb">
                <input type="checkbox" />{" "}
                <p>
                  Al hacer clic aquí, confirma que ha leído y acepta los
                  <a href="https://smartprofitinvestments-my.sharepoint.com/personal/transformacion_spiglobal_net/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Ftransformacion%5Fspiglobal%5Fnet%2FDocuments%2FMicrosoft%20Teams%20Chat%20Files%2FT%C3%89RMINOS%20DE%20USO%20DE%20BENEFICIO%20SFI%2Epdf&parent=%2Fpersonal%2Ftransformacion%5Fspiglobal%5Fnet%2FDocuments%2FMicrosoft%20Teams%20Chat%20Files&ga=1">
                    {" "}
                    términos de uso
                  </a>
                  , la Política de privacidad y acepta que sus datos serán
                  enviados a Smart Furute Income.
                </p>
              </div>
              <div className="slot" id="enviar">
                <button type="submit">Enviar</button>
              </div>
            </form>
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
