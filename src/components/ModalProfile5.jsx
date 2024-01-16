import Box from "@mui/material/Box";
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

          window.open(`${res.data.detalleRespuesta.url}`, "_blank");

          // nav('/checkout?canceled=false')
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
              <h1 id="res">Resumen de tu membresía</h1>
              <div className="t">
                <p>Membresía:</p>
                <h3>{membershipData.name}</h3>
              </div>
              <div className="t">
                <p>Monto:</p>
                <h3>{membershipData.precio.toLocaleString("en")} USDT</h3>
              </div>
              <div className="t">
                <p>Acumulación para membresía activa:</p>
                <h3>{membershipData.savings_duration_in_months} meses</h3>
              </div>
              <div className="t">
                <p>Monto de cuota mensual en USDT:</p>
                <h3>
                  {(
                    membershipData.monthly_membership_cost *
                    (membershipData.precio / 10000)
                  ).toFixed(2)}{" "}
                  USDT
                </h3>
              </div>
              <div className="t">
                <p>Maduración de membresía activa:</p>
                <h3>{membershipData.maturity_period_in_months} Meses</h3>
              </div>
            </div>

            <div className="sec2">
              <h1>Selección de bono redimible:</h1>
              <div className="t">
                <p>Porcentaje redimible:</p>
                <h3>{membershipData.percentage_bonus} %</h3>
              </div>
              <div className="t">
                <p>Monto redimible en USDT:</p>
                <h3>
                  {(
                    (membershipData.percentage_bonus * membershipData.precio) /
                    100
                  ).toLocaleString("en")}{" "}
                  USDT
                </h3>
              </div>
              <div className="t">
                <p>Estado:</p>
                <h3>{activated ? 'Activado' : 'Desactivado'}</h3>
              </div>
            </div>

            <div className="sec3">
              <h1>Beneficio a percibir</h1>
              <div className="t">
                <p>Monto de cuota mensual en USDT:</p>
                <h3>{membershipData.monthly_membership_cost} USDT</h3>
              </div>
              <div className="t">
                <p>Cantidad de cuotas mensuales:</p>
                <h3>{membershipData.savings_duration_in_months}</h3>
              </div>
              <div className="t">
                <p>Wallet:</p>
                <h3>{wallet} </h3>
              </div>
            </div>
            <div className="sec4">
              <h1>Datos beneficiarios</h1>

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
                    <h3>{beneficiario.percentage}</h3>
                  </div>
                </div>
              ))}
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
          </div>
          {check ? (
            <h1 id="transferir1" onClick={handleTransfer}>
              Realizar transferencia
            </h1>
          ) : (
            ""
          )}
          {error !== "" ? <div className="errortransfer">{error}</div> : ""}
        </Box>
      </Modal>
    </div>
  );
}
