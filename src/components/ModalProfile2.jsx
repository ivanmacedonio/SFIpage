import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import * as React from "react";
import "../styles/ModalProfile2.css";
import BasicModal3 from "./ModalProfile3";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "rgb(52, 52, 52)",
  borderRadius: "1rem",
  width: 400,
  boxShadow: 24,
  p: 4,
};

export default function BasicModal2({ membershipData }) {
  const [number, setNumber] = React.useState();

  React.useEffect(() => {
    function formatearNumero() {

      let numero = (membershipData.percentage_bonus * membershipData.precio) / 100

      let numeroRedondeado = Math.round(numero);

      let cadenaNumero = numeroRedondeado.toString();

      let resultadoFormateado = cadenaNumero.replace(
        /\B(?=(\d{3})+(?!\d))/g,
        ","
      );

      setNumber(resultadoFormateado);
    }
    formatearNumero()

  }, []);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <h1 id="btn-continue" onClick={handleOpen}>
        Continuar
      </h1>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="modal2">
            <h1>Seleccion de bono redimible</h1>
            <p>
              Este bono representa un porcentaje de la totalidad de USDT que ha
              contribuido al valor de su membresía. Puede ser redimido al
              vencimiento de los primeros 60 meses de la fase de maduración de
              la membresía activa. Lea el contrato de membresía en su apartado
              correspondiente para comprender los términos y condiciones que
              abarca al realizar este bono.
            </p>
            <div className="montos">
              <div className="caja2">
                <h2>Porcentaje redimible</h2>
                <h1>{Math.floor(membershipData.percentage_bonus)}%</h1>
                <label>
                  <input type="checkbox" />
                  Activar
                </label>
              </div>
              <div className="caja2">
                <h2>Monto redimible en USDT</h2>
                <h1>{number}</h1>
              </div>
            </div>
            <BasicModal3
              id="continuar"
              membershipData={membershipData}
            ></BasicModal3>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
