import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";
import biblioteca from "../assets/forobiblioteca.svg";
import blog from "../assets/foroblog.svg";
import { HeaderNormal } from "../components/Header-normal";
import "../styles/Foro.css";
export const Foro = () => {
  const nav = useNavigate()
  return (
    <div>
      <div className="headerForo">
        <HeaderNormal></HeaderNormal>
      </div>
      <div className="optionsForo">
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
          <div className="containerOptionsForo" onClick={() => {nav('/news')}}>
            <img src={blog} alt="" />
            <h2>Blog</h2>
          </div>
        </motion.div>

        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
          <div className="containerOptionsForo" onClick={() => {nav('/biblioteca')}}>
            <img src={biblioteca} alt="" />\<h2>Biblioteca</h2>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
