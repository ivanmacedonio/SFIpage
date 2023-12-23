import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import * as React from "react";
import { useRef } from "react";
import { Controller, useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
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
  const [edit, setEdit] = React.useState(false);
  const [storage, setStorage] = React.useState();
  const [maxPer, setMaxPer] = React.useState(100);
  const [show, setShow] = React.useState(false);
  const [updatemembership, setUpdatemembership] = React.useState([]);
  const [aditionalBeneficiaty, setAditionalBeneficiaty] = React.useState([]);
  const [error, setError] = React.useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
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

  function onSubmitEdit(data) {
    setAditionalBeneficiaty((prevData) => [...prevData, data]);
    const numper = parseFloat(data.percentage);
    setMaxPer(maxPer - numper);
    setEdit(!edit);
  }

  React.useEffect(() => {
    setValue("full_name", storage?.full_name || "");
    setValue("identification", storage?.identification || "");
    setValue("email", storage?.email || "");
    setValue("percentage", storage?.percentage || "");
    setValue("phone", storage?.phone || "");
  }, [setValue, storage]);

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
        <Box sx={style} id="scrollbenef">
          <h4
            onClick={() => {
              {
                edit ? setEdit(!edit) : handleClose();
              }
            }}
            id="x"
            style={{ fontSize: "2rem" }}
          >
            x
          </h4>
          {edit ? (
            <form onSubmit={handleSubmit(onSubmitEdit)}>
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
                  <Controller
                    name="phone"
                    control={control}
                    rules={{ required: "Por favor ingresa tu numero" }}
                    render={({ field }) => (
                      <PhoneInput
                        inputStyle={{ fontSize: "1.2rem", width: "100%" }}
                        containerStyle={{ marginBottom: "1rem" }}
                        type="number"
                        placeholder="Número de celular"
                        value={field.value}
                        onChange={(value) => field.onChange(value)}
                        className="no-spinner"
                        country={"cr"}
                      />
                    )}
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
          ) : (
            <div className="containeraux">
              <h2 id="db">Datos de beneficiario</h2>

              <div className="listaBeneficiarios">
                {aditionalBeneficiaty.map((beneficiario) => (
                  <div className="box">
                    <label>
                      <h3>{beneficiario.full_name}</h3>
                      <h5>{beneficiario.percentage}%</h5>
                    </label>
                    <div className="optns">
                      <h3
                        id="cruz"
                        onClick={() => {
                          handleDeleteBenef(beneficiario);
                        }}
                      >
                        X
                      </h3>
                      <h3
                        id="btn-editar"
                        onClick={() => {
                          setEdit(!edit);
                          setStorage(beneficiario);
                          handleDeleteBenef(beneficiario);
                        }}
                      >
                        Editar
                      </h3>
                    </div>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="modal4">
                  <div className="hide">
                    <BasicModal6
                      onEnviarDatos={recibirBeneficiario}
                    ></BasicModal6>
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
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
}
