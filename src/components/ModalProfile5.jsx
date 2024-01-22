import Box from "@mui/material/Box";
import { motion } from "framer-motion";

import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import axios from "axios";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../hooks/fetch";

import "../styles/ModalProfile5.css";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "rgb(52, 52, 52)",
  borderRadius: "1rem",
  color: "white",
  width: 400,
  boxShadow: 24,
  p: 4,
};

export default function BasicModal5({
  membershipData,
  wallet,
  aditionalBeneficiaty,
  activated,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [datapurchase, setDatapurchase] = React.useState({});
  const [userid, setId] = React.useState("");
  const [obtain, setObtain] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [kycdata, setKycdata] = React.useState([]);
  const [check, setCheck] = React.useState(false);
  const nav = useNavigate();
  const [error, setError] = React.useState("");
  const [listado, setListado] = React.useState(false);
  const [redirect, setRedirect] = React.useState("");

  React.useEffect(() => {
    async function getUser() {
      const token = localStorage.getItem("access");
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const params = {
        _cacheBuster: new Date().getTime(),
      };
      if (token) {
        try {
          const res1 = await axios.get(`${BASE_URL}kyc/`, {
            headers,
            params: params,
          });
          setKycdata(res1.data.KYC_Detail);
          setId(res1.data.KYC_Detail.identification);
          setUsername(res1.data.KYC_Detail.user_name);
          setDatapurchase({
            amount: membershipData.precio,
            membership: membershipData.id,
            type: "P",
            // currency: "USD",
            // user_id: userid,
            // user_name: username,
            // membership_name: membershipData.name,
          });
          setObtain(true);
        } catch (error) {
          console.log(error);
        }
      } else {
        nav("/login");
      }
    }
    getUser();
  }, []);

  async function handleTransfer() {
    try {
      const token = localStorage.getItem("access");
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const params = {
        _cacheBuster: new Date().getTime(),
      };
      if (token) {
        if (check === true) {
          const res = await axios.post(
            `${BASE_URL}create_charge/`,
            datapurchase,
            {
              headers: headers,
              params: params,
            }
          );
          const aditionalBeneficiaries = aditionalBeneficiaty.map(
            (beneficiario) => ({
              full_name: beneficiario.full_name,
              identification: beneficiario.identification,
              email: beneficiario.email,
              phone: beneficiario.phone,
              percentage: beneficiario.percentage,
            })
          );
          const dataP = {
            amount: membershipData.precio,
            currency: "USDT",
            membership: membershipData.id,
            charge_coinbase_commerce: res.data.detalleRespuesta.code,
            wallet: wallet,
            ind_bonus_will_be_redeemed: activated,
            beneficiaries: aditionalBeneficiaries,
          };

          const res2 = await axios.post(
            `${BASE_URL}store_user_selections/`,
            dataP,
            {
              headers: headers,
              params: params,
            }
          );

          setRedirect(res.data.detalleRespuesta.url);
        } else {
          console.log("not check");
        }
      } else {
        localStorage.removeItem("access");
        nav("/login");
      }
    } catch (error) {
      setError(error.response.data.respuestaServicio.detalle_tecnico);
      console.log(error);
    }
  }

  return (
    <div>
      <Button onClick={handleOpen} id="continuar">
        Continuar
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} id="modal55">
          <h2
            onClick={() => {
              handleClose();
            }}
            style={{ fontFamily: "Lato", cursor: "pointer" }}
          >
            X
          </h2>
          <div className="modal5" id="scrolleableTransfer">
            <div className="sec1">
              <h1 id="res">Resumen de tu membresía:</h1>
              <hr style={{ marginBottom: "1rem" }} />
              <div className="container-sec">
                <div className="t">
                  <p>
                    Membresía: <strong> {membershipData.name}</strong>
                  </p>
                </div>
                <div className="t">
                  <p>Monto:</p>
                  <h3>{membershipData.precio.toLocaleString("en")} USDT</h3>
                </div>
                <div className="t">
                  <p>
                    Acumulación para membresía activa:{" "}
                    <strong>
                      {membershipData.savings_duration_in_months} meses
                    </strong>
                  </p>
                </div>
                <div className="t">
                  <p>
                    Monto de cuota mensual en USDT:{" "}
                    <strong>
                      {" "}
                      {(
                        membershipData.monthly_membership_cost *
                        (membershipData.precio / 10000)
                      ).toFixed(2)}{" "}
                      USDT
                    </strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="sec2">
              <h1>Selección de bono redimible:</h1>
              <hr style={{ marginBottom: "1rem" }} />
              <div className="container-sec">
                <div className="t">
                  <p>
                    Porcentaje redimible:{" "}
                    <strong> {membershipData.percentage_bonus} %</strong>
                  </p>
                </div>
                <div className="t">
                  <p>
                    Monto redimible:{" "}
                    <strong>
                      {" "}
                      {(
                        (membershipData.percentage_bonus *
                          membershipData.precio) /
                        100
                      ).toLocaleString("en")}{" "}
                      USDT
                    </strong>
                  </p>
                </div>
                <div className="t">
                  <p>Estado:</p>
                  <h3>{activated ? "Activado" : "Desactivado"}</h3>
                </div>
                <div className="t">
                  <p>
                    Maduración de membresía activa:{" "}
                    <strong>
                      {membershipData.maturity_period_in_months} Meses
                    </strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="sec3">
              <h1>Beneficio de membresía a percibir:</h1>
              <hr style={{ marginBottom: "1rem" }} />
              <div className="container-sec">
                <div className="t">
                  <p>
                    Monto de cuota mensual:{" "}
                    <strong>
                      {" "}
                      {(
                        membershipData.profit_month *
                        (membershipData.precio / 10000)
                      ).toLocaleString("en")}{" "}
                      USDT
                    </strong>
                  </p>
                </div>
                <div className="t">
                  <p>
                    Cantidad de cuotas mensuales: <strong>240</strong>
                  </p>
                </div>
                {/* <div className="t">
                  <p>Wallet:</p>
                  <h3 id="walletmodal5">{wallet} </h3>
                </div> */}
              </div>
            </div>
            <div className="sec4">
              <h1>Datos beneficiarios:</h1>
              <div className="grid2">
                {aditionalBeneficiaty.map((beneficiario) => (
                  <div className="cont21">
                    <h2>{beneficiario.full_name}</h2>
                    <div className="t">
                      <p>Identificación:</p>
                      <h3>{beneficiario.identification}</h3>
                    </div>
                    <div className="t">
                      <p>Email:</p>
                      <h3>{beneficiario.email}</h3>
                    </div>
                    <div className="t">
                      <p>Teléfono:</p>
                      <h3>{beneficiario.phone}</h3>
                    </div>
                    <div className="t">
                      <p>Porcentaje</p>
                      <h3>{beneficiario.percentage} %</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <label>
            <input
              type="checkbox"
              onClick={() => {
                setCheck(!check);
              }}
            />
            Al hacer clic aquí, acepto los términos de uso, la política de
            privacidad y acepto que sus datos serán enviados a SFI
          </label>
          {check ? (
            // <h1 id="transferir1" onClick={handleTransfer}>
            //   Transferencia USDT
            // </h1>
            <div className="listadoPagos">
              <h1
                id="transferir1"
                onClick={() => {
                  setListado(!listado);
                }}
              >
                Seleccione el método de adquisición {""} ‣
              </h1>

              {listado ? (
                <div className="divflex">
                  <motion.div whileTap={{ scale: 1.1 }}>
                    <h2 onClick={handleTransfer}>Transferencia con USDT</h2>
                  </motion.div>
                  {redirect !== "" ? <a href={redirect}>Continuar</a> : ""}
                </div>
              ) : (
                ""
              )}

            </div>
          ) : (
            ""
          )}
          {error !== "" ? <div className="errortransfer">{error}</div> : ""}
        </Box>
      </Modal>
    </div>
  );
}
