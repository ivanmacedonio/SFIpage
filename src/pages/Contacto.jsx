import axios from "axios";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
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
  const { register, handleSubmit, reset } = useForm({
    shouldUseNativeValidation: true,
  });



  async function onSubmit(data) {
    try {
      const res = await axios.post(`${BASE_URL}contact_form/`, data);
      toast.success(
        "Hemos recibido tu mensaje y estamos emocionados de ayudarte. Nuestro equipo de atención al cliente revisará tu solicitud cuidadosamente. Espera recibir respuesta de uno de nuestros representantes en las próximas 48 horas para proporcionarte la asistencia que necesitas."
      );
      reset()
    } catch (error) {
      toast.error("Ha ocurrido un problema al enviar el correo");
      console.log(error);
    }
  }

  return (
    <div className="contactopage">
      <div className="header">
        <HeaderNormal></HeaderNormal>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="contactocontainer">
          <Toaster
            position="top-center"
            toastOptions={{
              style: {
                fontFamily: "lato",
                fontSize: "1.2rem",
              },
            }}
          ></Toaster>
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
                        "https://www.smartfutureincome.com/media/terminos.pdf"
                      );
                    }}
                  >
                    Términos y condiciones
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
                  Acepto que se me envíe a mi correo notificaciones y
                  promociones
                </label>
              </div>
              <motion.div whileTap={{ scale: 1.2 }}>
                <button type="submit">Enviar</button>
              </motion.div>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
