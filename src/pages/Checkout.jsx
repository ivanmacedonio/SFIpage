import axios from "axios";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { usePurchaseContext } from "../context/PurchaseContext";
import { BASE_URL } from "../hooks/fetch";
import "../styles/Checkout.css";
export const Checkout = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const canceled = queryParams.get("canceled");
  const { purchaseData } = usePurchaseContext();
  const { amount, id, code, wallet, full_name, identification, email, phone, percentage } = purchaseData;
  

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     nav("/");
  //   }, 3500);
  //   return () => clearTimeout(timer);
  // }, []);

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
        console.log(res);
        localStorage.clear();
      } catch (error) {
        localStorage.clear();
      }
    }
  }

  const datos = {
    charge_coinbase_commerce: localStorage.getItem("code"),
    amount: amount,
    wallet: wallet,
    membership: id,
    currency: "USDT",
    beneficiaries: [
      {
        full_name: full_name,
        identification: identification,
        email: email,
        phone: phone,
        percentage: percentage,
      },
    ],
  };

  const nav = useNavigate();

  if (canceled === "true") {
    console.log("canceled");
  } else {
     console.log(datos);
     Purchase(datos);
  }

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
