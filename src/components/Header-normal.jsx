import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import baricon from "../assets/header-icon.svg";
import logo from "../assets/logoSPI.png";
import "../styles/headerNormal.css";

export const HeaderNormal = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
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

  return (
    <div className="header">
      <div className="imagenlogo">
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="links">
        <Link to={"/"}>
          <h2>Inicio</h2>
        </Link>
        <Link to={"/nosotros"}>
          <h2>Nosotros</h2>
        </Link>
        <Link to={"/afiliacion"}>
          <h2>Afiliacion</h2>
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

        <h2 id="session">Iniciar sesion</h2>
      </div>
      <img id="iconbar" src={baricon} alt="" onClick={toggleMenu} />

      {menuAbierto && (
        <div className="hamburguesa">
          <Link to={"/"}>
            <h2>Inicio</h2>
          </Link>
          <Link to={"/nosotros"}>
            <h2>Nosotros</h2>
          </Link>
          <Link to={"/afiliacion"}>
            <h2>Afiliacion</h2>
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
          <h2 id="session">Iniciar sesion</h2>
        </div>
      )}
    </div>
  );
};
