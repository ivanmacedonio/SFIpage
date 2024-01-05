import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BASE_URL } from "../hooks/fetch";
import "../styles/activate.css";
export const Activate = () => {
  const location = useLocation();
  const [error, setError] = useState("");
  const queryParams = new URLSearchParams(location.search);
  const uidb64 = queryParams.get("uidb64");
  const nav = useNavigate();
  async function activateAccount() {
    try {
      const res = await axios.post(`${BASE_URL}activate-account/`, {
        uidb64: uidb64,
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
      setError(error.response.data.error);
    }
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      nav("/hub");
    }, 3500);
    activateAccount();
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="cancelado">
      {error === "" ? (
        <h1 id="cancelado">
          Tu cuenta fue activada correctamente, redireccionando a Smart Future
          Income
        </h1>
      ) : (
        <h1 id="cancelado" style={{ color: "orange" }}>
          {error}
        </h1>
      )}
      <div className="loader">
        <svg viewBox="25 25 50 50">
          <circle r="20" cy="50" cx="50"></circle>
        </svg>
      </div>
    </div>
  );
};
