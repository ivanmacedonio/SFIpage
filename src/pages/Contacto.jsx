import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import contacto from "../assets/contacto.webp";
import { HeaderNormal } from "../components/Header-normal";

import "../styles/contacto.css";
export const Contacto = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [checked, setChecked] = useState(false);

  const { register, handleSubmit } = useForm({
    shouldUseNativeValidation: true,
  });
  async function onSubmit(data) {
    const res = await axios.post(
      "http://127.0.0.1:8000/api/contact_form/",
      data
    );
    window.location.reload()
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
              {...register("name", { required: 'Ingresa un nombre valido' })}
            />
            <input
              type="email"
              placeholder="Ingresa tu correo electronico"
              {...register("email", { required: 'Ingresa un mail valido' })}
            />
            <textarea
              placeholder="Mensaje"
              id="mensaje"
              cols="30"
              rows="10"
              {...register("message", { required: 'Ingresa un mensaje valido' })}
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
                Terminos y condiciones
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
