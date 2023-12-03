import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import * as React from "react";
import { useForm } from "react-hook-form";
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

export default function BasicModal4({membershipData , wallet}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [show, setShow] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    shouldUseNativeValidation: true,
  });

  function onSubmit(data) {
    setShow(true)
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
          <h2 id="db">Datos de beneficiario</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="modal4">
              <div className="caja4">
                <p>Nombre completo</p>
                <input
                  type="text"
                  placeholder="Nombre"
                  {...register("name", {
                    required: "Ingresa un nombre valido",
                  })}
                />
              </div>
              <div className="caja4">
                <p>Identificacion</p>
                <input
                  type="text"
                  placeholder="Identificacion"
                  {...register("identificacion", {
                    required: "Ingresa una identificacion valida",
                  })}
                />
              </div>
              <div className="caja4">
                <p>Telefono</p>
                <input
                  type="text"
                  placeholder="Telefono"
                  {...register("telefono", {
                    required: "Ingresa un telefono valido",
                  })}
                />
                <h2 id="beneficiario">+ Beneficiario adicional</h2>
              </div>
              <div className="caja4">
                <p>Correo electronico</p>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "Ingresa un email valido",
                  })}
                />
              </div>
            </div>
            <div className="continuar5">
              <button type="submit">
                <div className="check2">
                  <h2>Check data</h2>
                </div>
              </button>
              {show && <BasicModal5 membershipData = {membershipData} wallet = {wallet}></BasicModal5>}
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
