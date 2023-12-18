import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import * as React from "react";
import { useRef } from "react";
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
  const [maxPer, setMaxPer] = React.useState(100);
  const [show, setShow] = React.useState(false);
  const [updatemembership, setUpdatemembership] = React.useState([]);
  const [aditionalBeneficiaty, setAditionalBeneficiaty] = React.useState([]);
  const [error, setError] = React.useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    shouldUseNativeValidation: true,
  });
  const miRef = useRef(null);
  const nodoDiv = miRef.current;

  function recibirBeneficiario(data) {
    setAditionalBeneficiaty((prevData) => {
      const newArray = Array.isArray(prevData) ? [...prevData, data] : [data];
      return newArray;
    });
    setMaxPer(maxPer - data.percentage);
  }

  function onSubmit(data) {
    setUpdatemembership({ ...membershipData, data });
    setData(data);
  }

  React.useEffect(() => {
    if (aditionalBeneficiaty.length === 0 || maxPer != 0) {
      setShow(false);
      if (maxPer != 0) {
        setError("El porcentaje total de los beneficiarios debe ser del 100%");
        
      }
      if (aditionalBeneficiaty.length === 0) {
        setError(
          "La lista de beneficiarios debe contar con al menos un miembro"
        );
        
      }
    } else {
      setShow(true);
    }
  }, [aditionalBeneficiaty]);

  function handleDeleteBenef(beneficiario) {
    let name = beneficiario.full_name;
    const newBenef = aditionalBeneficiaty.filter(
      (persona) => persona.full_name != name
    );
    setAditionalBeneficiaty(newBenef);
    const num = parseFloat(beneficiario.percentage);
    setMaxPer(maxPer + num);
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
        <Box sx={style} id="scrolleable4">
          <h4
            onClick={() => {
              handleClose();
            }}
            id="x"
          >
            x
          </h4>
          <h2 id="db">Datos de beneficiario</h2>

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

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="modal4">
              <div className="hide">
                <BasicModal6 onEnviarDatos={recibirBeneficiario}></BasicModal6>
              </div>
              <div className="continuar5">
                {show ? (
                  ""
                ) : (
                  <div className="errorbenef" ref={miRef}>
                    <h2>{error}</h2>
                  </div>
                )}
                {show && (
                  <div className="tes">
                    <BasicModal5
                      membershipData={updatemembership}
                      wallet={wallet}
                      aditionalBeneficiaty={aditionalBeneficiaty}
                      activated={activated}
                    ></BasicModal5>
                  </div>
                )}
              </div>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
