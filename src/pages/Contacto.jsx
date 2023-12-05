import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import contacto from "../assets/contacto.webp";
import { BASE_URL } from "../hooks/fetch";

import { HeaderNormal } from "../components/Header-normal";
import "../styles/contacto.css";
export const Contacto = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const nav = useNavigate();

  const [checked, setChecked] = useState(false);
  const urlDelPDF = "../assets/terminos.pdf";
  const { register, handleSubmit } = useForm({
    shouldUseNativeValidation: true,
  });

  async function onSubmit(data) {
    const res = await axios.post(`${BASE_URL}contact_form/`, data);
    window.location.reload();
  }
  return (
    <div className="contactopage">
      <div className="header">
        <HeaderNormal></HeaderNormal>
      </div>
      <div className="contactocontainer">
        <div className="imagencontacto">
          <img src={contacto} alt="" />
        </div>

        <div className="formulariocontacto">
          <h1 id="h1contacto">Contacto</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Ingresa tu nombre"
              {...register("name", { required: "Ingresa un nombre valido" })}
            />
            <input
              type="email"
              placeholder="Ingresa tu correo electronico"
              {...register("email", { required: "Ingresa un mail valido" })}
            />
            <textarea
              placeholder="Mensaje"
              id="mensaje"
              cols="30"
              rows="10"
              {...register("message", {
                required: "Ingresa un mensaje valido",
              })}
            ></textarea>
            <div className="labels">
              <label>
                <input
                  type="checkbox"
                  id="check"
                  {...register("checked", {
                    required: "Debes aceptar los terminos y condiciones",
                  })}
                />
                <a
                  onClick={() => {
                    window.location.assign(
                      "https://smartprofitinvestments-my.sharepoint.com/personal/transformacion_spiglobal_net/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Ftransformacion%5Fspiglobal%5Fnet%2FDocuments%2FMicrosoft%20Teams%20Chat%20Files%2FT%C3%89RMINOS%20DE%20USO%20DE%20BENEFICIO%20SFI%2Epdf&parent=%2Fpersonal%2Ftransformacion%5Fspiglobal%5Fnet%2FDocuments%2FMicrosoft%20Teams%20Chat%20Files&ga=1"
                    );
                  }}
                >
                  Terminos y condiciones
                </a>
              </label>
              <label>
                <input
                  type="checkbox"
                  id="check"
                  onClick={() => {
                    setChecked(!checked);
                  }}
                />
                Acepto que se me envie a mi correo notificaciones y promociones.
              </label>
            </div>

            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};
