import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import * as React from "react";
import "../styles/ModalProfile4.css";
import BasicModal5 from "./ModalProfile5";

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

export default function BasicModal4() {
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
          <h2 id="db">Datos de beneficiario</h2>
          <div className="modal4">
            <div className="caja4">
              <p>Nombre completo</p>
              <input type="text" placeholder="Nombre" />
            </div>
            <div className="caja4">
              <p>Identificacion</p>
              <input type="text" placeholder="Identificacion" />
            </div>
            <div className="caja4">
              <p>Telefono</p>
              <input type="text" placeholder="Telefono" />
              <h2 id="beneficiario">+ Beneficiario adicional</h2>
            </div>
            <div className="caja4">
              <p>Correo electronico</p>
              <input type="text" placeholder="Email" />
            </div>
          </div>
          <div className="continuar5">
            <BasicModal5></BasicModal5>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
