import axios from "axios";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import biblioteca from "../assets/forobiblioteca.svg";
import blog from "../assets/foroblog.svg";
import { HeaderNormal } from "../components/Header-normal";
import { BASE_URL } from "../hooks/fetch";
import "../styles/Foro.css";
export const Foro = () => {
  const nav = useNavigate();
  async function isKYC() {
    const token = localStorage.getItem("access");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const params = {
      _cacheBuster: new Date().getTime(),
    };
    try {
      const res = await axios.get(`${BASE_URL}kyc/`, {
        headers,
        params: params,
      });

      if (res.data.KYC_Detail.state === "Aprobado"){
        console.log(res.data.KYC_Detail.state)
      } else {
        nav('/hub')
      }
    } catch (error) {
      console.log(error);
      nav('/hub')
    }
  }

  useEffect(() => {
    isKYC()
  }, [])
  return (
    <div>
      <div className="headerForo">
        <HeaderNormal></HeaderNormal>
      </div>
      <div className="optionsForo">
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
          <div
            className="containerOptionsForo"
            onClick={() => {
              nav("/news");
            }}
          >
            <img src={blog} alt="" />
            <h2>Blog</h2>
          </div>
        </motion.div>

        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
          <div
            className="containerOptionsForo"
            onClick={() => {
              nav("/biblioteca");
            }}
          >
            <img src={biblioteca} alt="" />\<h2>Biblioteca</h2>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
