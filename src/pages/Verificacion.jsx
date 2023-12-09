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
          if (res.data[0].state != "") {
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

  const [formData, setFormData] = useState({
    full_name: "",
    nationality: "",
    identification: "",
    date_of_birth: "",
    phone: "",
    address: "",
    gender: "",
    // identification_file: "",
  });
  // function handleFileChange(e) {
  //   setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  // }

  async function onSubmit(data) {
    const token = localStorage.getItem("access");
    if (token) {
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      console.log(data);
      setFormData({
        full_name: data.full_name,
        nationality: data.nationality,
        identification: data.identification,
        date_of_birth: data.date_of_birth,
        phone: data.phone,
        address: data.address,
        gender: data.gender,
      });

      const form = new FormData();
      form.append("full_name", formData.full_name);
      form.append("nationality", formData.nationality);
      form.append("identification", formData.identification);
      form.append("date_of_birth", formData.date_of_birth);
      form.append("phone", formData.phone);
      form.append("address", formData.address);
      form.append("gender", formData.gender);
      // form.append("identification_file", formData.identification_file);
      try {
        const res = await axios.post(`${BASE_URL}kyc/`, form, {
          headers: headers,
        });
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("error");
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
            <form
              onSubmit={handleSubmit(onSubmit)}
              encType="multipart/form-data"
            >
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
                <p>Direccion</p>
                <input
                  type="text"
                  placeholder="Ingresa tu Direccion"
                  {...register("address", {
                    required: "Por favor ingresa una direccion valida",
                  })}
                />
              </div>
              {/* <div className="slot" id="select">
                <p>Expediente de identificación/pasaporte o fotografía</p>
                <input
                  type="file"
                  name="identification_file"
                  accept=".jpg,.jpeg,.png,.pdf"
                  onChange={handleFileChange}
                  {...register("identification_file", {
                    required: "Por favor ingresa una imagen",
                  })}
                />
              </div> */}
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
