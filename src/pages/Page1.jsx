import { motion } from "framer-motion";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import mujeresinicio from "../assets/mujeres_inicio.webp";
import familia from "../assets/pareja_inicio.webp";
import { Footer } from "../components/Footer";
import { HeaderNormal } from "../components/Header-normal";
import { Scrollpage1 } from "../components/Scrollpage1";

import "../styles/page1.css";
export const Page1 = () => {
  const nav = useNavigate();
  async function verify() {
    const token = localStorage.getItem("access");

    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const res = await axios.get(`${BASE_URL}kyc`, {
      headers: headers,
    });
    console.log(res.data);

    useEffect(() => {
      try {
        verify();
      } catch (error) {
        console.log(error);
        localStorage.removeItem('access')
        nav("/login");
      }
    }, []);
  }

  return (
    <div className="page1">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="header">
          <HeaderNormal></HeaderNormal>
        </div>
        {/* <div className="toast">
          <Toaster position="bottom-center" reverseOrder={false} />
        </div> */}

        <div className="divpage1">
          <React.Fragment>
            <div className="welcome">
              <div className="textp1">
                <h2>Bienvenido a</h2>
                <h1>Smart Future Income.</h1>
                <h2 id="h2delete">¡Por un futuro más seguro!</h2>
                <p id="big">
                  Estamos aquí para ayudarte a asegurar tu futuro. Nuestra
                  membresía te brinda la oportunidad de construir un futuro
                  sólido y seguro a lo largo del tiempo. Con nuestra experiencia
                  en la gestión de activos digitales, puedes tener la
                  tranquilidad de un futuro más alentador. Únete a nosotros y
                  descubre cómo convirtiéndote en afiliado hoy puedes asegurarte
                  un mañana estable.
                </p>
                <div className="scroll">
                  <Scrollpage1></Scrollpage1>
                </div>
              </div>
            </div>

            <div className="imgfamilia">
              <img src={familia} alt="" />
            </div>
            <div className="imgfamilia2">
              <img src={mujeresinicio} alt="" id="imgfamilia2" />
            </div>
            <div className="imagenmid">
              <img src={familia} alt="" />
            </div>
            <div className="textfamilia2">
              <p>Hazte miembro de</p>
              <p>este gran apoyo</p>
              <p>para tu futuro</p>
              <Link to={"/membresia"}>
                <h1>Calcula tu membresía aquí</h1>
              </Link>
            </div>
          </React.Fragment>
        </div>
      </motion.div>
      <div className="footer">
        <Footer></Footer>
      </div>
    </div>
  );
};
