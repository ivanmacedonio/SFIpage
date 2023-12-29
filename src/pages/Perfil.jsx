import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import foto from "../assets/anon.png";
import iconoflecha from "../assets/flechaprofile.png";
import { HeaderNormal } from "../components/Header-normal";
import { BASE_URL } from "../hooks/fetch";
import "../styles/perfil.css";

export const Perfil = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const nav = useNavigate();
  const [profile, setProfile] = useState([]);
  const [empty, setEmpty] = useState(false);
  const [active, setActive] = useState(false);
  const [estilo, setEstilo] = useState({ display: "none" });
  const [isMember, setIsMember] = useState(false);
  const [denegado, setDenegado] = useState(false);
  const [memberDetail, setMemberDetail] = useState([]);
  useEffect(() => {
    async function getUser() {
      const token = localStorage.getItem("access");
      if (token) {
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const params = {
          _cacheBuster: new Date().getTime(),
        };
        try {
          const res = await axios.get(`${BASE_URL}kyc/`, {
            headers,
            params: params,
          });
          if (res.data.KYC_Detail) {
            switch (res.data.KYC_Detail.state) {
              case "":
                setEmpty(true);
                break;
              case "Pendiente":
                setEmpty(true);
                break;
              case "Aprobado":
                setEmpty(false);
                setProfile(res.data.KYC_Detail);
                break;
              case "Denegado":
                setDenegado(true);
                break;
            }
          } else {
            nav("/verificacion");
          }
        } catch (error) {
          setEmpty(true);
          nav("/login");
        }
      } else {
        nav("/login");
      }
    }

    async function getMember() {
      const token = localStorage.getItem("access");
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const params = {
        _cacheBuster: new Date().getTime(),
      };
      const resMember = await axios.get(`${BASE_URL}purchase/`, {
        headers: headers,
        params: params,
      });
      setMemberDetail(resMember.data);
      if (resMember.data) {
        setIsMember(true);
      } else {
        setIsMember(false);
      }
    }
    getUser();
    getMember();
    window.scrollTo(0, 0);
  }, []);

  function handleQuinquenio() {
    setActive(!active);
    setEstilo({ display: active ? "none" : "block" });
  }

  async function handlePurchaseMonth(monto, membresia, compraid) {
    const token = localStorage.getItem("access");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const params = {
      _cacheBuster: new Date().getTime(),
    };
    const datamonth = {
      amount: monto,
      purchase: compraid,
      membership: membresia,
      type: "M",
    };
    try {
      const resmonth = await axios.post(
        `${BASE_URL}create_charge/`,
        datamonth,
        {
          headers: headers,
          params: params,
        }
      );
      window.open(`${resmonth.data.detalleRespuesta.url}`, "_blank");
    } catch (error) {
      console.log(error);
    }
  }
  console.log(memberDetail);
  return (
    <div className="general-container">
      <div className="header-container">
        <HeaderNormal></HeaderNormal>
      </div>
      <div className="background-profile"></div>
      {empty ? (
        <div className="empty">
          {denegado ? (
            <h2>
            Decidimos denegar tu acceso a la plataforma, si crees que estamos en un error no dudes en contactarnos.
          </h2>
          ) : (
            <h2>
              Necesitas tener un KYC verificado para poder acceder a tu perfil.
            </h2>
          )}
        </div>
      ) : (
        <div className="containers-data">
          <div className="profile-container">
            <div className="profile-box">
              <div className="img-profile">
                <img src={foto} alt="" />
              </div>
              <label>
                <h2>Nombre:</h2>
                <p>{profile.user_name}</p>
              </label>
              <label>
                <h2>Nacionalidad:</h2>
                <p>{profile.nationality}</p>
              </label>
              <label>
                <h2>Email:</h2>
                <p>{profile.email}</p>
              </label>
              <label>
                <h2>Identificación:</h2>
                <p>{profile.identification}</p>
              </label>
              <label>
                <h2>Teléfono:</h2>
                <p>{profile.phone}</p>
              </label>
              <label>
                <h2>Dirección:</h2>
                <p>{profile.address}</p>
              </label>
            </div>
          </div>
          <div className="membresia-container">
            <div className="box-grid" id="title-table">
              <h3>Descripción</h3>
            </div>
            <div className="box-grid" id="title-table">
              <h3>Producto</h3>
            </div>
            <div className="box-grid" id="title-table">
              <h3>Mensualidad</h3>
            </div>
            <div className="box-grid" id="title-table">
              <h3>Ver</h3>
            </div>
            <div className="box-grid" id="title-table">
              <h3>Pagar</h3>
            </div>
            {memberDetail.map((membresia) => (
              <React.Fragment>
                <div className="box-grid">
                  <h3>{membresia.purchase_Detail.membership_name}</h3>
                </div>

                <div className="box-grid">
                  <h3>{membresia.purchase_Detail.contract_number}</h3>
                </div>

                <div className="box-grid">
                  <h3>
                    {membresia.purchase_Detail.monthly_membership_cost} USDT
                  </h3>
                </div>
                <div className="box-grid" id="box-img">
                  <img src={iconoflecha} alt="" />
                </div>
                <div className="box-grid" id="pagar-btn">
                  <h3
                    onClick={() => {
                      handlePurchaseMonth(
                        membresia.purchase_Detail.monthly_membership_cost,
                        membresia.purchase_Detail.membership_id,
                        membresia.purchase_Detail.purchase_id
                      );
                    }}
                  >
                    PAGAR
                  </h3>
                </div>
              </React.Fragment>
            ))}
          </div>
          <div className="mis-membresias">
            <h3>Ver mis membresías</h3>
          </div>
        </div>
      )}
    </div>
  );
};
