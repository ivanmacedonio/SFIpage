import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import * as React from "react";
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

export default function BasicModal3() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          <div className="modal3">
            <h2>Beneficio a percibir</h2>
            <div className="montos2">
              <div className="caja3">
                <p>Monto de cuota mensual en USDT</p>
                <h1>1000 USDT</h1>
              </div>
              <div className="caja3">
                <p>Cantidad de cuotas mensuales</p>
                <h1>240</h1>
              </div>
            </div>
            <p>Ingresa tu wallet (debe ser de la red Ethereum)</p>
            <input type="text" placeholder="Ingresa tu Wallet" />
            <p>Confirma tu wallet</p>
            <input type="text" placeholder="Confirma tu Wallet" />
            <h3>
              Por favor, asegúrese de agregar correctamente la dirección de su
              billetera para recibir los beneficios de un futuro seguro en el
              activo digital USDT a través de la red Ethereum ERC-20.
            </h3>
            <div className="continuar4">
              <BasicModal4></BasicModal4>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
