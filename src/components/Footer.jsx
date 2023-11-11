import React from "react";
import fb from "../assets/face.png";
import ig from "../assets/ig.png";
import logo from "../assets/logo-white.png";
import wp from "../assets/wp.png";
import "../styles/footer.css";
export const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <img src={logo} alt="" />
        <div className="icons">
          <img src={wp} alt="" />
          <img src={fb} alt="" />
          <img src={ig} alt="" />
        </div>
      </div>
      <div class="parent">
        <div class="div1">
          <h2>LINKS</h2>
          <h3>Inicio</h3>
          <h3>Nosotros</h3>
          <h3>Afiliacion</h3>
          <h3>Blog</h3>
        </div>
        <div class="div2">
          <h2>SUPPORT</h2>
          <h3>FAQ</h3>
          <h3>Foro</h3>
        </div>
        <div class="div3">
          <h2>CONTACT US</h2> <h3>+506 XXX XXX</h3>
        </div>
      </div>
    </div>
  );
};
