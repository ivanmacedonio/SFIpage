import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import * as React from "react";
import { useForm } from "react-hook-form";
import "../styles/ModalProfile4.css";
import BasicModal6 from "./ModalBeneficiario";
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

export default function BasicModal4({ membershipData, wallet, activated }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [data, setData] = React.useState({});
  const [show, setShow] = React.useState(false);
  const [setted, setSetted] = React.useState(false);
  const [percentage, setPercent] = React.useState(100);
  const [updatemembership, setUpdatemembership] = React.useState([]);
  const [aditionalBeneficiaty, setAditionalBeneficiaty] = React.useState([]);
  const [readOnly, setReadonly] = React.useState(false);
  const [namefilter, setNamefilter] = React.useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    shouldUseNativeValidation: true,
  });

  function recibirBeneficiario(data, maxPercent, per) {
    setAditionalBeneficiaty((prevData) => {
      const newArray = Array.isArray(prevData) ? [...prevData, data] : [data];
      return newArray;
    });
    setPercent(percentage - per);
  }

  function onSubmit(data) {
    setShow(true);
    setReadonly(true);
    setUpdatemembership({ ...membershipData, data });
    setData(data);
  }

  function handleClick() {
    const newData = { ...data, percentage };
    setNamefilter(data.full_name);
    if (setted === false) {
      setAditionalBeneficiaty((prevData) => {
        const newArray = Array.isArray(prevData)
          ? [...prevData, newData]
          : [newData];
        return newArray;
      });
      setSetted(true);
    } else {
      console.log("pass");
    }
  }

  function handleDeleteBenef(beneficiario) {
    let name = beneficiario.full_name;
    let number = parseFloat(beneficiario.percentage);
    const newBenef = aditionalBeneficiaty.filter(
      (persona) => persona.full_name != name
    );
    setAditionalBeneficiaty(newBenef);
    setPercent(percentage + number);
  }

  React.useEffect(() => {
    const newData = aditionalBeneficiaty.filter(
      (persona) => persona.full_name != namefilter
    );
    setAditionalBeneficiaty(newData);
  }, [aditionalBeneficiaty]);

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
        <Box sx={style} id="scrolleable4">
          <h4
            onClick={() => {
              handleClose();
            }}
            id="x"
          >
            x
          </h4>
          <div className="listaBeneficiarios">
            {aditionalBeneficiaty.map((beneficiario) => (
              <div className="box">
                <label>
                  <h3>{beneficiario.full_name}</h3>
                  <h5>{beneficiario.percentage}%</h5>
                </label>
                <h3
                  id="cruz"
                  onClick={() => {
                    handleDeleteBenef(beneficiario);
                  }}
                >
                  X
                </h3>
              </div>
            ))}
          </div>
          <h2 id="db">Datos de beneficiario</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="modal4">
              <div className="caja4">
                <p>Nombre completo</p>
                <input
                  type="text"
                  readOnly={readOnly}
                  placeholder="Nombre"
                  {...register("full_name", {
                    required: "Ingresa un nombre valido",
                  })}
                />
              </div>
              <div className="caja4">
                <p>Identificacion</p>
                <input
                  type="text"
                  readOnly={readOnly}
                  placeholder="Identificacion"
                  {...register("identification", {
                    required: "Ingresa una identificacion valida",
                  })}
                />
              </div>
              <div className="caja4">
                <p>Telefono</p>
                <input
                  type="text"
                  readOnly={readOnly}
                  placeholder="Telefono"
                  {...register("phone", {
                    required: "Ingresa un telefono valido",
                  })}
                />
                <div className="hide">
                  <BasicModal6
                    onEnviarDatos={recibirBeneficiario}
                  ></BasicModal6>
                </div>
              </div>
              <div className="caja4">
                <p>Correo electronico</p>
                <input
                  type="email"
                  readOnly={readOnly}
                  placeholder="Email"
                  {...register("email", {
                    required: "Ingresa un email valido",
                  })}
                />
              </div>
            </div>
            <div className="continuar5">
              {show ? (
                ""
              ) : (
                <button type="submit">
                  <div className="check2">
                    <h2>Check data</h2>
                  </div>
                </button>
              )}
              {show && (
                <div className="tes" onClick={handleClick}>
                  <BasicModal5
                    membershipData={updatemembership}
                    wallet={wallet}
                    aditionalBeneficiaty={aditionalBeneficiaty}
                    percentage={percentage}
                    activated={activated}
                  ></BasicModal5>
                </div>
              )}
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
