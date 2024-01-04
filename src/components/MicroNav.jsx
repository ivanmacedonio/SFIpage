import React from "react";
import { Link } from "react-router-dom";

export const MicroNav = ({ state }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "gray",
        fontFamily: "Lato",
      }}
    >
      {state === "login" && (
        <ul
          style={{
            display: "flex",
            gap: "3rem",
            
            fontSize: "1.1rem",
          }}
        >
          <li style={{ cursor: "pointer" }}>
            <Link to={"/"}>Inicio</Link>
          </li>
          <li>
            <Link to={"/register"}>Register</Link>
          </li>
        </ul>
      )}

      {state === "register" && (
        <ul
          style={{
            display: "flex",
            gap: "3rem",
            marginTop: "3rem",
            fontSize: "1.1rem",
          }}
        >
          <li style={{ cursor: "pointer" }}>
            <Link to={"/"}>Inicio</Link>
          </li>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
        </ul>
      )}

      {state === "change" && (
        <ul
          style={{
            display: "flex",
            gap: "3rem",
            marginTop: "3rem",
            fontSize: "1.1rem",
          }}
        >
          <li style={{ cursor: "pointer" }}>
            <Link to={"/"}>Inicio</Link>
          </li>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
          <li>
            <Link to={"/register"}>Register</Link>
          </li>
        </ul>
      )}
    </div>
  );
};
