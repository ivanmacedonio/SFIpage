import { motion } from "framer-motion";
import React, { useEffect } from "react";

import familia from "../assets/blog.webp";
import { HeaderNormal } from "../components/Header-normal";
import "../styles/Blog.css";
export const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="hubpage">
      <div className="header">
        <HeaderNormal></HeaderNormal>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="contenthub">
          <div className="texthub">
            <h1>¡Bienvenido a</h1>
            <h1 id="negrita">nuestra comunidad</h1>
            <h2>
              En nuestro blog, los miembros pueden explorar temas tecnológicos y
              discutir estrategias de gestión en activos digitales. Únete a la
              conversación, comparte tus conocimientos y aprende de otros
              expertos en la comunidad. Descubre las últimas tendencias en
              activos digitales, blockchain y más. Nuestra plataforma de blogs
              es un espacio inclusivo y educativo para todos los entusiastas de
              las finanzas digitales.
            </h2>
          </div>
          <div className="imagehub">
            <img src={familia} alt="" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
