import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import * as React from "react";
import { useForm } from "react-hook-form";
import validateFormData from "../hooks/Validation";
import "../styles/ModalProfile3.css";
import BasicModal4 from "./ModalProfile4";

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

export default function BasicModal3({ membershipData }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [show, setShow] = React.useState(false);
  const [walletData, setWalletData] = React.useState("");
  const [errorsData, setErrorsData] = React.useState("");
  const [error, setError] = React.useState(false);
  const { register, handleSubmit } = useForm({
    shouldUseNativeValidation: true,
  });

  function onSubmit(data) {
    const errors = validateFormData(data.wallet1);
    console.log(errors);
    if (errors === "") {
      if (data.wallet1 === data.wallet2) {
        setShow(true);
        setWalletData(data.wallet1);
        setError(false);
      } else {
        setErrorsData("Las direcciones no coinciden");
      }
    } else {
      setError(true);
      setErrorsData(errors);
    }
  }

  console.log(membershipData);

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
        <Box sx={style} id="scrolleable3">
          <div className="modal3">
            <h2>Beneficio a percibir</h2>
            <div className="montos2">
              <div className="caja3">
                <p>Monto de cuota mensual en USDT</p>
                <h1>{membershipData.base_monthly_benefit_amount}USDT</h1>
              </div>
              <div className="caja3">
                <p>Cantidad de cuotas mensuales</p>
                <h1>{membershipData.maturity_period_in_months} </h1>
              </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <p>Ingresa tu wallet (debe ser de la red Ethereum)</p>
              <input
                type="text"
                placeholder="Ingresa tu Wallet"
                {...register("wallet1", {
                  required: "Ingresa una wallet valida",
                })}
              />
              <p>Confirma tu wallet</p>
              <input
                type="text"
                placeholder="Confirma tu Wallet"
                {...register("wallet2", {
                  required: "Vuelve a ingresar tu wallet",
                })}
              />
              <div className="errors">
                {error ? <h2> {errorsData} </h2> : ""}
              </div>

              <h3>
                Por favor, asegúrese de agregar correctamente la dirección de su
                billetera para recibir los beneficios de un futuro seguro en el
                activo digital USDT a través de la red Ethereum ERC-20.
              </h3>
              <div className="continuar4">
                <div className="check">
                  <button type="submit" id="check">
                    Check Wallet
                  </button>
                </div>
                {show ? (
                  <BasicModal4 membershipData={membershipData} wallet = {walletData}></BasicModal4>
                ) : (
                  ""
                )}
              </div>
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
