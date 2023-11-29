import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import * as React from "react";
import { useState } from "react";
import "../styles/Modal1.css";
import BasicModal2 from "./ModalProfile2";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "rgb(52, 52, 52)",
  borderRadius: "2rem",
  boxShadow: 24,
  p: 4,
  color: "white",
  fontFamily: "Lato",
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [precio, setPrecio] = useState(50000); // Valor inicial

  const handlePrecioChange = (event) => {
    setPrecio(parseInt(event.target.value, 10));
  };

  return (
    <div>
      <Button onClick={handleOpen} id="botonadquirirmodal">
        + Adquirir membresia
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} id="scrolleable">
          <div className="membresiaModal1">
            <h4 onClick={handleClose}>X</h4>
            <h3>Tipo de membresia</h3>
            <h1>Años dorados</h1>
            <p>Monto en USDT</p>
            <input
              type="range"
              id="rangoPrecio"
              name="rangoPrecio"
              min={10000}
              max={100000}
              step={1}
              value={precio}
              onChange={handlePrecioChange}
            />
            <output htmlFor="rangoPrecio">
              Valor: {precio.toLocaleString()} USDT
            </output>

            <p>Acumulacion para membresia activa</p>
            <h2>120 meses</h2>
            <p>Monto de cuota mensual en USDT</p>
            <h2>83.33 USDT</h2>
            <p>Maduracion de membresia activa</p>
            <h2>120 meses</h2>
            <label>
              <input type="checkbox" />
              Confirmar cantidad de cuotas y monto de cuota mensual para poder
              seguir
            </label>
          </div>
          <div className="btn">
            <BasicModal2></BasicModal2>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
