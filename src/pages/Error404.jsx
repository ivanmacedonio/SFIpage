import React from "react";
import cuatro from '../assets/cuatro.svg';
import "../styles/404.css";
export const Error404 = () => {
  return <div>
    <div className="errortext">
      <h1>404 Error</h1>
      <h2>Not Found</h2>
    </div>
    <div className="imagenerror">
    <img src={cuatro} alt="" />
    </div>
  </div>;
};
