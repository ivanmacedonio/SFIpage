import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/404.css";
export const Error404 = () => {

  const nav = useNavigate()
  useEffect(() => {
    nav('/')
  }, [])
  return <div>
    {/* <div className="errortext">
      <h1>404 Error</h1>
      <h2>Not Found</h2>
    </div>
    <div className="imagenerror">
    <img src={cuatro} alt="" />
    </div> */}
  </div>;
};
