import axios from "axios";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BASE_URL } from "../hooks/fetch";
import "../styles/Checkout.css";

export const Checkout = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const canceled = queryParams.get("canceled");
  const nav = useNavigate();

  useEffect(() => {
    if (canceled === "true") {
      console.log("canceled");
    } else {
      async function Purchase(datos) {
        const token = localStorage.getItem("access");
        if (token) {
          const headers = {
            Authorization: `Bearer ${token}`,
          };
          try {
            const res = await axios.post(`${BASE_URL}purchase/`, datos, {
              headers: headers,
            });
            localStorage.clear();
            nav("/");
          } catch (error) {
            console.log(error);
            localStorage.clear();
          }
        }
      }
      const datos = {
        charge_coinbase_commerce: localStorage.getItem("code"),
        amount: localStorage.getItem("amount"),
        wallet: localStorage.getItem("wallet"),
        membership: localStorage.getItem("id"),
        currency: "USDT",
        beneficiaries: [
          {
            full_name: localStorage.getItem("full_name"),
            identification: localStorage.getItem("identification"),
            email: localStorage.getItem("email"),
            phone: localStorage.getItem("phone"),
            percentage: localStorage.getItem("percentage"),
          },
        ],
      };
      Purchase(datos);
      const timer = setTimeout(() => {
        nav("/");
      }, 3500);
      return () => clearTimeout(timer);
    }
  });

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
        <div className="cancelado">
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
