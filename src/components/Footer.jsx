import React from "react";
import { Link } from "react-router-dom";
import fb from "../assets/face.png";
import ig from "../assets/ig.png";
import logo from "../assets/logo-white.png";
import "../styles/footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <Link to={"/"}>
          <img src={logo} alt="" id="logoimg" />
        </Link>
        <div className="icons">
          <a href="https://www.facebook.com/profile.php?id=61553878077986">
            <img src={fb} alt="" />
          </a>
          <a href="https://instagram.com/sf.income?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr">
            <img src={ig} alt="" />
          </a>
        </div>
      </div>
      <div class="parent">
        <div class="div1">
          <h2>LINKS</h2>
          <Link to={"/"}>
            <h3>Inicio</h3>
          </Link>
          <Link to={"/nosotros"}>
            <h3>Nosotros</h3>
          </Link>
          <Link to={"/afiliacion"}>
            <h3>Afiliación</h3>
          </Link>
          <Link to={"/blog"}>
            <h3>Blog</h3>
          </Link>
        </div>
        <div class="div2">
          <Link to={"/contacto"}>
            <h2>SUPPORT</h2>
          </Link>
          <Link to={"/faq"}>
            <h3>FAQ</h3>
          </Link>
          <h3>Foro</h3>
        </div>
      </div>
    </div>
  );
};
