import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import axios from "axios";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { usePurchaseContext } from "../context/PurchaseContext";
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
  percentage,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [datapurchase, setDatapurchase] = React.useState({});
  const [userid, setId] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [kycdata, setKycdata] = React.useState([]);
  const [check, setCheck] = React.useState(false);
  const nav = useNavigate();

  const { updatePurchaseData } = usePurchaseContext();

  React.useEffect(() => {
    async function getUser() {
      const token = localStorage.getItem("access");
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      if (token) {
        try {
          const res1 = await axios.get(`${BASE_URL}kyc/`, {
            headers,
          });
          console.log(res1.data);
          setKycdata(res1.data.KYC_Detail);
          setId(res1.data.KYC_Detail.identification);
          setUsername(res1.data.KYC_Detail.user_name);
          setDatapurchase({
            amount: membershipData.precio,
            currency: "USDT",
            membership: membershipData.id,
            user_id: userid,
            user_name: username,
            membership_name: membershipData.name,
          });
        } catch (error) {
          console.log(error);
        }
      } else {
        nav("/login");
      }
    }
    getUser();
  }, []);

  console.log(percentage);

  async function handleTransfer() {
    try {
      const token = localStorage.getItem("access");
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      if (token) {
        if (check === true) {
          const res = await axios.post(
            `${BASE_URL}create_charge/`,
            datapurchase,
            {
              headers: headers,
            }
          );
          const dataP = {
            amount: membershipData.precio,
            currency: 'USDT',
            membership: membershipData.id,
            charge_coinbase_commerce: res.data.detalleRespuesta.code,
            wallet: wallet,
            beneficiaries: [
              {
                full_name: aditionalBeneficiaty[0].full_name,
                identification: aditionalBeneficiaty[0].identification,
                email: aditionalBeneficiaty[0].email,
                phone: aditionalBeneficiaty[0].phone,
                percentage: percentage,
              },
            ],
          };
          const res2 = await axios.post(
            `${BASE_URL}store_user_selections/`,
            dataP,
            {
              headers: headers,
            }
          );
          console.log(res2);
          window.location.href = `${res.data.detalleRespuesta.url}`;
          // nav('/checkout?canceled=false')
        } else {
          console.log("not check");
        }
      } else {
        localStorage.removeItem("access");
        nav("/login");
      }
    } catch (error) {
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
        <Box sx={style}>
          <div className="modal5" id="scrolleableTransfer">
            <h1 id="res">Resumen de tu membresia</h1>
            <div className="t">
              <p>Membresia:</p>
              <h3>{membershipData.name}</h3>
            </div>
            <div className="t">
              <p>Monto:</p>
              <h3>{membershipData.precio} USDT</h3>
            </div>
            <div className="t">
              <p>Acumulacion para membresia activa:</p>
              <h3>{membershipData.savings_duration_in_months} meses</h3>
            </div>
            <div className="t">
              <p>Monto de cuota mensual en USDT:</p>
              <h3>{membershipData.base_monthly_benefit_amount} USDT</h3>
            </div>
            <div className="t">
              <p>Maduracion de membresia activa:</p>
              <h3>{membershipData.maturity_period_in_months} Meses</h3>
            </div>
            <h1>Seleccion de bono redimible:</h1>
            <div className="t">
              <p>Porcentaje redimible:</p>
              <h3>{membershipData.percentage_bonus} %</h3>
            </div>
            <div className="t">
              <p>Monto redimible en USDT:</p>
              <h3>
                {membershipData.percentage_bonus * membershipData.precio} USDT
              </h3>
            </div>
            <div className="t">
              <p>Estado:</p>
              <h3>Desactivado</h3>
            </div>
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
              <p>Wallet(ERC-20):</p>
              <h3>{wallet} </h3>
            </div>
            <h1>Datos beneficiario</h1>
            <div className="t">
              <p>Nombre completo:</p>
              <h3>{username}</h3>
            </div>
            <div className="t">
              <p>Identificacion:</p>
              <h3>{kycdata.identification}</h3>
            </div>
            <div className="t">
              <p>Correo electronico:</p>
              <h3>{kycdata.email}</h3>
            </div>
            <div className="t">
              <p>Telefono:</p>
              <h3>{kycdata.phone}</h3>
            </div>

            <label>
              <input
                type="checkbox"
                onClick={() => {
                  setCheck(!check);
                }}
              />
              Al hacer click aqui, acepto los terminos de uso, la Politica de
              privacidad y acepta que sus datos seran enviados a SFI
            </label>
          </div>
          {check ? (
            <h1 id="transferir1" onClick={handleTransfer}>
              Realizar transferencia
            </h1>
          ) : (
            ""
          )}
        </Box>
      </Modal>
    </div>
  );
}
