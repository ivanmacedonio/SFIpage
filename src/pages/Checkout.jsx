import axios from "axios";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BASE_URL } from "../hooks/fetch";
import "../styles/Checkout.css";
export const Checkout = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const canceled = queryParams.get("canceled");

  useEffect(() => {
    const timer = setTimeout(() => {
      nav("/");
    }, 3500);

    async function Purchase() {
      const token = localStorage.getItem("access");
      if (token) {
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        try {
          const res2 = await axios.get(
            "http://127.0.0.1:9000/api/get_user_selections/",
            {
              headers: headers,
            }
          );
          console.log(res2.data);
          const res = await axios.post(`${BASE_URL}purchase/`, res2.data, {
            headers: headers,
          });
          console.log(res);
        } catch (error) {
          // nav('/')
          console.log("error 1");
        }
      } else {
        // nav('/login')
        console.log("error2");
      }
    }

    if (canceled === "true") {
      console.log("canceled");
    } else {
      Purchase();
    }

    return () => clearTimeout(timer);
  }, [canceled]);

  const nav = useNavigate();

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
