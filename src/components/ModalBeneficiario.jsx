import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import * as React from "react";
import { useForm } from "react-hook-form";
import "../styles/Beneficiario.css";

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

export default function BasicModal6({ onEnviarDatos }) {
  const [open, setOpen] = React.useState(false);
  const [datosBeneficiario, setDatosbeneficiario] = React.useState({});
  const [maxPercent, setMaxPercent] = React.useState(100);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    shouldUseNativeValidation: true,
  });

  function onSubmit(data) {
    onEnviarDatos(data);
    handleClose();
    reset();
  }

  return (
    <div>
      <Button onClick={handleOpen} id="beneficiario">
        Agregar beneficiario
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} id='scrollbenef'>
          <h2
            onClick={() => {
              handleClose();
            }}
            style={{ fontFamily: "Lato", cursor: 'pointer' }}
          >
            X
          </h2>
          <h2 id="db">Datos de beneficiario adicional</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="modal6">
              <div className="caja4">
                <p>Nombre completo</p>
                <input
                  type="text"
                  placeholder="Nombre"
                  {...register("full_name", {
                    required: "Ingresa un nombre valido",
                  })}
                />
              </div>
              <div className="caja4">
                <p>Identificación</p>
                <input
                  type="text"
                  placeholder="identification"
                  {...register("identification", {
                    required: "Ingresa una identificacion valida",
                  })}
                />
              </div>
              <div className="caja4">
                <p>Teléfono</p>
                <input
                  type="number"
                  placeholder="Telefono"
                  {...register("phone", {
                    required: "Ingresa un telefono valido",
                  })}
                />
              </div>
              <div className="caja4">
                <p>Correo electrónico</p>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "Ingresa un email valido",
                  })}
                />
              </div>
              <div className="caja4">
                <p>Porcentaje</p>
                <input
                  type="number"
                  placeholder="Porcentaje"
                  max={100}
                  {...register("percentage", {
                    required: "Ingresa un porcentaje valido",
                  })}
                />
              </div>
            </div>
            <div className="continuar6">
              <button type="submit">
                <div className="check2">
                  <h2>Continuar</h2>
                </div>
              </button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
