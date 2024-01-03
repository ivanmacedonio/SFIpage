import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import baricon from "../assets/header-icon.svg";
import logo from "../assets/logoSPI.png";
import { BASE_URL } from "../hooks/fetch";
import "../styles/headerNormal.css";

export const HeaderNormal = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [username, setUsername] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [isKycState, setIsKyc] = useState();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [menuAbierto, setMenuAbierto] = useState(false);
  function toggleMenu() {
    setMenuAbierto(!menuAbierto);
  }

  async function getVerify() {
    try {
      const token = localStorage.getItem("access");
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const res = await axios.get(`${BASE_URL}verify/`, {
        headers: headers,
      });
      console.log(res.status);
      if (res.status === 200) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    } catch (error) {
      setIsLogin(false);
    }
  }

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

      if (res.data === "") {
        setIsKyc(false);
      } else {
        setIsKyc(true);
        setUsername(res.data.KYC_Detail.user_name);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("access");

    if (token) {
      isKYC();
      getVerify();
    } else {
      setIsLogin(false);
    }
  }, []);

  const nav = useNavigate();

  function handleOnClick() {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    nav("/login");
  }

  console.log(isKycState);

  return (
    <div className="header">
      <div className="chan">
        <div className="imagenlogo">
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <img id="iconbar" src={baricon} alt="" onClick={toggleMenu} />
      </div>

      <div className="links">
        <Link to={"/"}>
          <h2>Inicio</h2>
        </Link>
        <Link to={"/nosotros"}>
          <h2>Nosotros</h2>
        </Link>
        <Link to={"/afiliacion"}>
          <h2>Afiliación</h2>
        </Link>

        <h2
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          Blog
        </h2>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <Link to={"/blog"}>
            <MenuItem onClick={handleClose}>Hub</MenuItem>
          </Link>
          <Link to={"/faq"}>
            <MenuItem onClick={handleClose}>Preguntas Frecuentes</MenuItem>
          </Link>
        </Menu>
        <Link to={"/contacto"}>
          <h2>Contacto</h2>
        </Link>

        {isLogin ? (
          <Link to={isKycState ? "/perfil" : "/verificacion"}>
            {" "}
            <h2 id="session">{username}</h2>{" "}
          </Link>
        ) : (
          <Link to={"/login"}>
            {" "}
            <h2 id="session">Iniciar sesión</h2>{" "}
          </Link>
        )}
        {isLogin ? <h2 onClick={handleOnClick}>Cerrar sesión</h2> : ""}
      </div>
      {menuAbierto && (
        <div className="hamburguesa">
          <Link to={"/"}>
            <h2>Inicio</h2>
          </Link>
          <Link to={"/nosotros"}>
            <h2>Nosotros</h2>
          </Link>
          <Link to={"/afiliacion"}>
            <h2>Afiliación</h2>
          </Link>

          <h2
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            Blog
          </h2>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <Link to={"/blog"}>
              <MenuItem onClick={handleClose}>Hub</MenuItem>
            </Link>
            <Link to={"/faq"}>
              <MenuItem onClick={handleClose}>Preguntas Frecuentes</MenuItem>
            </Link>

            <MenuItem onClick={handleClose}>Foro</MenuItem>
          </Menu>
          <Link to={"/contacto"}>
            <h2>Contacto</h2>
          </Link>

          {isLogin ? (
            <Link to={isKycState ? "/perfil" : "/verificacion"}>
              {" "}
              <h2 id="session">{username}</h2>{" "}
            </Link>
          ) : (
            <Link to={"/login"}>
              {" "}
              <h2 id="session">Iniciar sesión</h2>{" "}
            </Link>
          )}
          {isLogin ? <h2 onClick={handleOnClick}>Cerrar sesión</h2> : ""}
        </div>
      )}
    </div>
  );
};
