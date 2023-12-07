import axios from 'axios';
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Checkout.css";
export const Checkout = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const canceled = queryParams.get("canceled");
  const nav = useNavigate();

  /*useEffect(() => {
    const timer = setTimeout(() => {
      nav("/");
    }, 3500);
    return () => clearTimeout(timer)
  }, []); */

  async function Purchase(){
    const token = localStorage.getItem('access')
    if (token){
      try{
        const res = await axios.post('http://127.0.0.1:8000/api/purchase/')


      } catch ( error ){
        console.log(error)
      }
    }
  }

  useEffect(() => {
    if (canceled === 'true'){
      localStorage.removeItem('code')
    } else {
      const data = localStorage.getItem('dataCharge')
      console.log(data)
    }
  })

  return (
    <div>
      {canceled === "true" ? (
        <div>
          <div className="cancelado">
            <h1 id="cancelado">
              Tu pago ha sido cancelado, redireccionando a Smart Future Income
            </h1>
            <div className="loader">
              <svg viewBox="25 25 50 50">
                <circle r="20" cy="50" cx="50"></circle>
              </svg>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1 id="cancelado">
            {" "}
            Tu pago se realizo correctamente, redireccionando a Smart Future
            Income
          </h1>
          <div className="loader">
            <svg viewBox="25 25 50 50">
              <circle r="20" cy="50" cx="50"></circle>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};
