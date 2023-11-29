import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import * as React from "react";
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

export default function BasicModal5() {
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
          <div className="modal5" id="scrolleable">
            <h1 id="res">Resumen de tu membresia</h1>
            <div className="t">
              <p>Membresia:</p>
              <h3>Años dorados</h3>
            </div>
            <div className="t">
              <p>Monto:</p>
              <h3>10k USDT</h3>
            </div>
            <div className="t">
              <p>Acumulacion para membresia activa:</p>
              <h3>120 Meses</h3>
            </div>
            <div className="t">
              <p>Monto de cuota mensual en USDT:</p>
              <h3>83.33 USDT</h3>
            </div>
            <div className="t">
              <p>Maduracion de membresia activa:</p>
              <h3>120 Meses</h3>
            </div>
            <h1>Seleccion de bono redimible:</h1>
            <div className="t">
              <p>Porcentaje redimible:</p>
              <h3>85%</h3>
            </div>
            <div className="t">
              <p>Monto redimible en USDT:</p>
              <h3>8500 USDT</h3>
            </div>
            <div className="t">
              <p>Estado:</p>
              <h3>Desactivado</h3>
            </div>
            <h1>Benficio a percibir</h1>
            <div className="t">
              <p>Monto de cuota mensual en USDT:</p>
              <h3>1000 USDT</h3>
            </div>
            <div className="t">
              <p>Cantidad de cuotas mensuales:</p>
              <h3>240</h3>
            </div>
            <div className="t">
              <p>Wallet(ERC-20):</p>
              <h3>0x00121201021020110</h3>
            </div>
            <h1>Datos beneficiario</h1>
            <div className="t">
              <p>Nombre completo:</p>
              <h3>XXXXXXXXXXXXXXX</h3>
            </div>
            <div className="t">
              <p>Identificacion:</p>
              <h3>XXXXXXXXXXXX</h3>
            </div>
            <div className="t">
              <p>Correo electronico:</p>
              <h3>XXXXXXXXXXX</h3>
            </div>
            <div className="t">
              <p>Telefono:</p>
              <h3>XXXXXXXXXXXXX</h3>
            </div>
            <label>
              <input type="checkbox" />
              Al hacer click aqui, acepto los terminos de uso, la Politica de
              privacidad y acepta que sus datos seran enviados a SFI
            </label>
          </div>
          <h1 id="transferir1">Realizar transferencia</h1>
        </Box>
      </Modal>
    </div>
  );
}
