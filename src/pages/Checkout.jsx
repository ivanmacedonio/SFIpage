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
    if (canceled === "true") {
      Reset()
    } else {
      Purchase();
    }

    return () => clearTimeout(timer);
  }, []);

  async function Reset() {
    const token = localStorage.getItem("access");
    if (token) {
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const params = {
        _cacheBuster: new Date().getTime(),
      };
      try {
        const res2 = await axios.get(`${BASE_URL}get_user_selections/`, {
          headers: headers,
          params: params,
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("err");
    }
  }

  async function Purchase() {
    const token = localStorage.getItem("access");
    if (token) {
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const params = {
        _cacheBuster: new Date().getTime(),
      };
      try {
        const res2 = await axios.get(`${BASE_URL}get_user_selections/`, {
          headers: headers,
          params: params,
        });
        console.log(res2.data);
        const res = await axios.post(`${BASE_URL}purchase/`, res2.data, {
          headers: headers,
          params: params,
        });
        console.log(res);
      } catch (error) {
        // nav('/')
        console.log(error);
      }
    } else {
      // nav('/login')
      console.log('error');
    }
  }

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
