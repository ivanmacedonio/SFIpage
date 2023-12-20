import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import membresiaimg from "../assets/Asset 26.png";
import { HeaderNormal } from "../components/Header-normal";
import BasicModal from "../components/ModalProfile1";
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
  const [isVerificated, setIsVerificated] = useState(true);
  const [denegado, setDenegado] = useState(false);
  const [memberDetail, setMemberDetail] = useState([]);
  const [image, setImage] = useState("");

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
                setIsVerificated(false);
                setEmpty(true);
                break;
              case "Pendiente":
                setEmpty(true);
                setIsVerificated(false);
                break;
              case "Aprobado":
                setEmpty(false);
                setProfile(res.data.KYC_Detail);
                setIsVerificated(true);
                break;
              case "Denegado":
                setEmpty(true);
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
  console.log(memberDetail);

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

  return (
    <div className="perfilpage">
      <div className="header">
        <HeaderNormal></HeaderNormal>
      </div>
      <div className="profilecontainer">
        <div className="formprofile1">
          <h1 id="perfilh11">Perfil</h1>
          {empty ? (
            <div className="alert1">
              {denegado ? (
                <h5>
                  Decidimos denegar tu acceso a la plataforma. Para más
                  información acerca de los estados de KYC, contáctese con
                  nosotros.
                </h5>
              ) : (
                <h5>
                  Actualmente tu usuario se encuentra en revisión. Una vez
                  verifiquemos el KYC, tendrás acceso a nuestros planes.
                </h5>
              )}
            </div>
          ) : (
            <div className="form1">
              <p>Nombre</p>
              <h2>{profile.user_name}</h2>
              <p>Identificación</p>
              <h2>{profile.identification}</h2>
              <p>Correo</p>
              <h2>{profile.email}</h2>
              <p>Fecha de nacimiento</p>
              <h2>{profile.date_of_birth}</h2>
            </div>
          )}
        </div>

        {empty ? (
          ""
        ) : (
          <div className="formprofile2">
            <h1 id="deletemem">Membresía</h1>

            {isMember ? (
              <div className="cont">
                {memberDetail.map((membresia) => (
                  <div className="accor">
                    <Accordion>
                      <AccordionSummary
                        expandIcon="+"
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography style={{ fontSize: "2rem" }}>
                          {membresia.purchase_Detail.membership_name}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <div className="containerformulario2">
                          {isVerificated ? (
                            <div className="formulario2">
                              <h5 id="titleForm2">Datos de membresía</h5>

                              <div className="cajaform">
                                <p>Tipo de membresía</p>
                                <h2>
                                  {membresia.purchase_Detail.membership_name}
                                </h2>
                              </div>
                              <div className="cajaform">
                                <p>Cuotas</p>
                                <h2>
                                  {membresia.purchase_Detail.payment_quantity} /
                                  {
                                    membresia.purchase_Detail
                                      .savings_duration_in_months
                                  }
                                </h2>
                              </div>
                              <div className="cajaform">
                                <p>Cuota mensual</p>
                                <h2>
                                  {
                                    membresia.purchase_Detail
                                      .monthly_membership_cost
                                  }{" "}
                                  USDT
                                </h2>
                              </div>
                              <div className="cajaform">
                                <p>Fecha de inicio</p>
                                <h2>
                                  {membresia.purchase_Detail.created_date}
                                </h2>
                              </div>
                              <div className="cajaformIMG">
                                <img src={membresiaimg} alt="" />
                              </div>

                              <div className="cajaform">
                                <label>
                                  <input type="checkbox" />
                                  Retiro de quinquenio
                                </label>
                              </div>
                              <div className="cajaform">
                                <h4>Descargar contrato</h4>
                              </div>
                              <div
                                className="pagarMensualidad"
                                onClick={() => {
                                  handlePurchaseMonth(
                                    membresia.purchase_Detail
                                      .monthly_membership_cost,
                                    membresia.purchase_Detail.membership_id,
                                    membresia.purchase_Detail.purchase_id
                                  );
                                }}
                              >
                                <h5>Pagar cuota mensual</h5>
                              </div>
                              <h5 id="titleForm2">Datos de beneficio</h5>
                              <div className="cajaform">
                                <p>Fecha de inicio</p>
                                <h2>
                                  {membresia.purchase_Detail.created_date}
                                </h2>
                              </div>
                              <div className="cajaform">
                                <p>Fecha de vencimiento</p>
                                <h2>-</h2>
                              </div>
                              <div className="cajaform">
                                <p>Cantidad de bonos</p>
                                <h2>1/60</h2>
                              </div>
                              <div className="cajaform">
                                <p>Monto de cuota mensual</p>
                                <h2>
                                  {
                                    membresia.purchase_Detail
                                      .monthly_membership_cost
                                  }
                                  USDT
                                </h2>
                              </div>
                              {/* <div className="cajaform">
                                <p>Wallet</p>
                                <h2 id="walleth2">{membresia.purchase_Detail.wallet}</h2>
                              </div> */}
                              <div className="cajaform">
                                <p>Tiempo de maduracion</p>
                                <h2>
                                  {
                                    membresia.purchase_Detail
                                      .maturity_period_in_months
                                  }{" "}
                                  Meses
                                </h2>
                              </div>
                            </div>
                          ) : (
                            <div className="form2b">
                              <h1 id="datosmemb">Datos de membresía</h1>
                              <div className="caja" id="expand">
                                <p>Tipo de membresía</p>
                                <h2>
                                  {membresia.purchase_Detail.membership_name}
                                </h2>
                              </div>
                              <div className="caja">
                                <p>Cuotas</p>
                                <h2>0/24</h2>
                              </div>
                              <div className="caja">
                                <p>Tiempo de maduracion</p>
                                <h2>
                                  {
                                    membresia.purchase_Detail
                                      .maturity_period_in_months
                                  }
                                </h2>
                              </div>
                              <div className="caja">
                                <p>Fecha de inicio</p>
                                <h2>
                                  {membresia.purchase_Detail.created_date}
                                </h2>
                              </div>
                              <div className="caja">
                                <h3 id="pending">Pendiente de firmar</h3>
                              </div>
                              <div className="caja" id="quinqueniob">
                                <input
                                  type="checkbox"
                                  onClick={handleQuinquenio}
                                />{" "}
                                Retiro de quinquenio
                              </div>
                              <h1 id="bonificacionh1b">
                                Bonificacion proyectada
                              </h1>
                              <div className="containerfechasb">
                                <div className="caja">
                                  <p>Fecha de inicio</p>
                                  <h2>
                                    {membresia.purchase_Detail.created_date}
                                  </h2>
                                </div>
                                <div className="caja">
                                  <p>Fecha de vencimiento</p>
                                  <h2>-</h2>
                                </div>
                                <div className="caja">
                                  <p>Cantidad de bonos</p>
                                  <h2>0/240</h2>
                                </div>
                                <div className="caja" id="paddi">
                                  <p>Monto de cuota mensual en USDT</p>
                                  <h2>
                                    {
                                      membresia.purchase_Detail
                                        .monthly_membership_cost
                                    }
                                  </h2>
                                </div>
                                <div className="caja" id="wallet">
                                  <p>Wallet</p>
                                  <h2>{membresia.purchase_Detail.wallet}</h2>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                ))}
              </div>
            ) : (
              <div className="noMember">
                <BasicModal></BasicModal>
                <h2>
                  Por el momento usted no cuenta con ningún plan de membresía
                </h2>
              </div>
            )}
            <div className="alerta" style={estilo}>
              <p>
                Solo tiene una oportunidad de selección. Para realizar un cambio
                del status de retiro preseleccionado debe ponerse en contacto a
                través de nuestra línea de soporte vía email o a través de
                nuestro formulario de contacto en el sitio web. Este proceso
                debe suceder 30 días antes de su fecha proyecta de bonificación
                al finalizar el primer quinquenio de maduración.
              </p>
            </div>
            <h1 id="btn-adicional">
              {isMember ? <BasicModal></BasicModal> : ""}
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};
