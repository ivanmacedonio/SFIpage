import axios from "axios";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import foto from "../assets/anon.png";
import iconoflecha from "../assets/flechaprofile.png";
import icono from "../assets/icono.png";
import { HeaderNormal } from "../components/Header-normal";
import BasicModal from "../components/ModalProfile1";
import BasicModalPagos from "../components/modalPagos";
import { BASE_URL, BASE_URL_LOGIN } from "../hooks/fetch";
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
  const [selected, setSelected] = useState(false);
  const [tempMember, setTempMember] = useState();
  const [loading, setIsLoading] = useState(true);
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
          setInterval(() => {
            setIsLoading(false);
          }, 2000);
          console.log(res.data);
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
                setEmpty(false);
                setProfile(res.data.KYC_Detail);
                setDenegado(true);
                break;
            }
          } else {
            setEmpty(true);
          }
        } catch (error) {
          console.log(error);
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
      console.log(resMember.data);
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
      window.location.reload();
    } catch (error) {
      toast.error(error.response.data.respuestaServicio.detalle_tecnico);
    }
  }

  return (
    <div className="general-container">
      <div className="header-container">
        <HeaderNormal></HeaderNormal>
      </div>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            fontFamily: "lato",
            fontSize: "1.2rem",
          },
        }}
      ></Toaster>
      <div className="background-profile"></div>
      {loading ? (
        <div
          className="loadingcourse"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10%",
          }}
        >
          <motion.div
            animate={{
              rotate: 360,
              transition: { duration: 1, repeat: Infinity },
            }}
          >
            <img src={icono} alt="" style={{ width: "5rem" }} />
          </motion.div>
        </div>
      ) : (
        <React.Fragment>
          {empty ? (
            <div className="empty">
              <h2>
                Necesitas tener un KYC verificado para poder acceder a tu
                perfil.
              </h2>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="containers-data">
                {selected ? (
                  ""
                ) : (
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
                )}
                {selected ? (
                  <div className="membresia-data-container">
                    <div
                      className="close"
                      onClick={() => {
                        setSelected(false);
                        setTempMember([]);
                      }}
                    >
                      Volver
                    </div>
                    <div className="payment">
                      <BasicModalPagos
                        movements={tempMember.purchase_Detail.movements}
                      ></BasicModalPagos>
                    </div>

                    <div className="box-grid1" id="info">
                      <label id="info-benef">
                        <h3>Información de membresía</h3>
                      </label>
                      <hr />
                    </div>

                    <div className="box-grid">
                      <label>
                        <h3>Descripción:</h3>
                        <h4> {tempMember.purchase_Detail.membership_name}</h4>
                      </label>
                    </div>
                    <div className="box-grid">
                      <label>
                        <h3>Cuotas:</h3>
                        <h4>
                          {" "}
                          {tempMember.purchase_Detail.payment_quantity} /
                          {
                            tempMember.purchase_Detail
                              .savings_duration_in_months
                          }
                        </h4>
                      </label>
                    </div>
                    <div className="box-grid">
                      <label>
                        <h3>Total:</h3>
                        <h4>
                          {" "}
                          {tempMember.purchase_Detail.amount.toLocaleString(
                            "en"
                          )}{" "}
                          USDT
                        </h4>
                      </label>
                    </div>
                    <div className="box-grid">
                      <label>
                        <h3>Producto:</h3>
                        <h4> {tempMember.purchase_Detail.contract_number}</h4>
                      </label>
                    </div>
                    <div className="box-grid">
                      <label>
                        <h3>Cuota mensual:</h3>
                        <h4>
                          {" "}
                          {tempMember.purchase_Detail.monthly_membership_cost.toLocaleString(
                            "en"
                          )}{" "}
                          USDT
                        </h4>
                      </label>
                    </div>
                    <div className="box-grid">
                      <label>
                        <h3>Fecha de Inicio:</h3>
                        <h4> {tempMember.purchase_Detail.created_date}</h4>
                      </label>
                    </div>
                    <div className="box-grid">
                      <label>
                        <h3>Estado:</h3>
                        <h4 id="estado">
                          {tempMember.purchase_Detail.contract_state}
                        </h4>
                      </label>
                    </div>

                    <div className="box-grid">
                      {tempMember.purchase_Detail.contract_file === null ? (
                        <label>
                          <h4 id="no-contract">Aún no hay contrato activo</h4>
                        </label>
                      ) : (
                        <h4
                          id="contract"
                          onClick={() => {
                            window.open(
                              `${BASE_URL_LOGIN}${tempMember.purchase_Detail.contract_file}`,
                              "_blank" // Esto abrirá el enlace en una nueva ventana o pestaña
                            );
                          }}
                        >
                          <label htmlFor="">Descargar contrato</label>
                        </h4>
                      )}
                    </div>

                    <div className="box-grid1" id="info">
                      <label id="info-benef">
                        <h3>Fase de maduración</h3>
                      </label>
                      <hr />
                    </div>
                    <div class="box-grid" id="center1">
                      <label>
                        <input
                          type="checkbox"
                          defaultChecked={
                            tempMember.purchase_Detail
                              .ind_bonus_will_be_redeemed
                          }
                        />
                        <div class="slider"></div>
                        <h4>Retiro de quinquenio</h4>
                      </label>
                    </div>
                    <div className="box-grid" id="center1">
                      <label>
                        <h3>Tiempo de maduración:</h3>
                        <h4> 240 Meses</h4>
                      </label>
                    </div>

                    <div className="box-grid1" id="info">
                      <label id="info-benef">
                        <h3>Información de beneficio</h3>
                      </label>
                      <hr />
                    </div>
                    <div className="box-grid">
                      <label>
                        <h3>Fecha de Inicio:</h3>
                        <h4>
                          {" "}
                          {tempMember.purchase_Detail.benefit_start_date}
                        </h4>
                      </label>
                    </div>
                    <div className="box-grid">
                      <label>
                        <h3>Fecha de Vencimiento:</h3>
                        <h4> {tempMember.purchase_Detail.benefit_end_date}</h4>
                      </label>
                    </div>
                    <div className="box-grid">
                      <label>
                        <h3>Cantidad de beneficios:</h3>
                        <h4>
                          {" "}
                          0/
                          {tempMember.purchase_Detail.months_of_profit}
                        </h4>
                      </label>
                    </div>
                    <div className="box-grid">
                      <label>
                        <h3>Monto de cuota mensual:</h3>
                        <h4>
                          {(
                            tempMember.purchase_Detail
                              .amount_without_five_year_withdrawal *
                            (tempMember.purchase_Detail.amount / 10000)
                          ).toLocaleString("en")}
                          USDT
                        </h4>
                      </label>
                    </div>

                    <div className="box-grid" id="walletprof">
                      <label>
                        <h3>Wallet:</h3>
                        <h4> {tempMember.purchase_Detail.wallet} </h4>
                      </label>
                    </div>
                  </div>
                ) : (
                  <div className="membresia-container">
                    {denegado ? (
                      <h2 style={{ gridColumn: "span 5", color: "red" }}>
                        Tu cuenta tiene restricción para adquirir membresías
                      </h2>
                    ) : (
                      <div className="box-grid" id="add-member">
                        <BasicModal></BasicModal>
                      </div>
                    )}

                    {isMember ? (
                      <React.Fragment>
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
                              <h3>
                                {membresia.purchase_Detail.membership_name}
                              </h3>
                            </div>

                            <div className="box-grid">
                              <h3>
                                {membresia.purchase_Detail.contract_number}
                              </h3>
                            </div>

                            <div className="box-grid">
                              <h3>
                                {
                                  membresia.purchase_Detail
                                    .monthly_membership_cost
                                }{" "}
                                USDT
                              </h3>
                            </div>
                            <div
                              className="box-grid"
                              id="box-img"
                              onClick={() => {
                                setSelected(true);
                                setTempMember(membresia);
                              }}
                            >
                              <img src={iconoflecha} alt="" />
                            </div>
                            <motion.div whileTap={{ scale: 1.2 }}>
                              <div className="box-grid" id="pagar-btn">
                                <h3
                                  onClick={() => {
                                    handlePurchaseMonth(
                                      membresia.purchase_Detail.amount,
                                      membresia.purchase_Detail.membership_id,
                                      membresia.purchase_Detail.purchase_id
                                    );
                                  }}
                                >
                                  PAGAR
                                </h3>
                              </div>
                            </motion.div>
                          </React.Fragment>
                        ))}
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                  </div>
                )}
                {selected ? (
                  ""
                ) : (
                  <div className="member-simple">
                    <h1>Mis membresías</h1>
                    {isMember ? (
                      <React.Fragment>
                        {memberDetail.map((membresia) => (
                          <div className="box-flex">
                            <label
                              onClick={() => {
                                setSelected(true);
                                setTempMember(membresia);
                              }}
                            >
                              <h2>
                                {membresia.purchase_Detail.membership_name}
                              </h2>

                              <img src={iconoflecha} alt="" />
                            </label>
                            <motion.div whileTap={{ scale: 1.2 }}>
                              <button
                                onClick={() => {
                                  handlePurchaseMonth(
                                    membresia.purchase_Detail
                                      .monthly_membership_cost,
                                    membresia.purchase_Detail.membership_id,
                                    membresia.purchase_Detail.purchase_id
                                  );
                                }}
                              >
                                Pagar
                              </button>
                            </motion.div>
                          </div>
                        ))}
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    <div className="modal">
                      {denegado ? (
                        <h2
                          style={{
                            fontFamily: "lato",
                            color: "red",
                            textAlign: "center",
                          }}
                        >
                          Tu cuenta tiene restricción para adquirir membresías
                        </h2>
                      ) : (
                        <BasicModal></BasicModal>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </React.Fragment>
      )}
    </div>
  );
};
