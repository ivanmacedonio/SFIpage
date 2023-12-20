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
  const [error, setError] = React.useState(false);
  React.useEffect(() => {
    function formatearNumero() {
      let numero =
        (membershipData.percentage_bonus * membershipData.precio) / 100;

      let cadenaNumero = numero.toString();

      let resultadoFormateado = cadenaNumero.replace(
        /\B(?=(\d{3})+(?!\d))/g,
        "."
      );

      setNumber(resultadoFormateado);
    }
    formatearNumero();
  }, [membershipData]);

  const [open, setOpen] = React.useState(false);
  const [activated, setIsActivated] = React.useState(true);
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
        <Box sx={style} id="scrol">
          <div className="modal2">
            <h3
              id="x"
              onClick={() => {
                handleClose();
              }}
            >
              X
            </h3>
            <h1>Selección de bono redimible</h1>
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
                {activated ? (
                  <h1>{Math.floor(membershipData.percentage_bonus)}%</h1>
                ) : (
                  <h1 style={{ color: "gray" }}>0</h1>
                )}
                <label>
                  <input
                    type="checkbox"
                    onClick={() => {
                      setIsActivated(!activated);
                    }}
                    checked={activated}
                  />
                  Activar
                </label>
              </div>
              <div className="caja2">
                <h2>Monto redimible en USDT</h2>
                {activated ? (
                  <h1>{number}</h1>
                ) : (
                  <h1 style={{ color: "gray" }}>0</h1>
                )}
              </div>
            </div>

            <div className="btn-continue">
              <BasicModal3
                id="continuar"
                membershipData={membershipData}
                activated={activated}
              ></BasicModal3>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
