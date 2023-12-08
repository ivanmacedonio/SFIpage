import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import axios from "axios";
import * as React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const [membership, setMembership] = useState([]);
  const [list, setList] = useState(true);
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [membershipData, setMembershipData] = useState({
    name: "Elige tu membresía",
  });

  const handlePrecioChange = (event) => {
    setPrecio(parseInt(event.target.value, 10));
  };
  const nav = useNavigate();
  const estiloLista = {
    background: "linear-gradient(to right, rgb(3, 180, 211), rgb(2, 80, 116))",
    borderRadius: "1rem",
    color: "white",
    listStyle: "none",
    paddingLeft: "1rem",
    fontWeight: "700",
    fontSize: "1rem",
    cursor: "pointer",
  };

  const hov = {
    cursor: "pointer",
  };

  useEffect(() => {
    async function getMemberships() {
      const token = localStorage.getItem("access");
      if (token) {
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        try {
          const res = await axios.get(`http://127.0.0.1:9000/api/membership/`, {
            headers,
          });
          setMembership(res.data);
        } catch (error) {
          nav("/login");
          localStorage.removeItem("access");
        }
      } else {
        nav("/login");
      }
    }
    getMemberships();
    window.scrollTo(0, 0);
  }, []);

  function handleData(member) {
    setMembershipData({
      id: member.id,
      name: member.name,
      savings_duration_in_months: member.savings_duration_in_months,
      monthly_membership_cost: member.monthly_membership_cost,
      maturity_period_in_months: member.maturity_period_in_months,
      optional_withdrawal_percentage: member.optional_withdrawal_percentage,
      minimum: member.minimum_amount_threshold,
      maximum: member.maximum_amount_threshold,
      chunk: member.chunk_size_amount,
      percentage_bonus: member.percentage_bonus,
      base_monthly_benefit_amount: member.base_monthly_benefit_amount,
      precio: precio,
    });
    setList(!list);
    setShow(true);
  }

  return (
    <div>
      <Button onClick={handleOpen} id="botonadquirirmodal">
        + Adquirir membresía
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
            <h3>Tipo de membresía</h3>
            <h1
              onClick={() => {
                setList(!list);
              }}
              style={hov}
            >
              {membershipData.name}
            </h1>
          </div>

          {list ? (
            <div className="back">
              {show ? (
                <div className="list">
                  <div className="membresiaModal1">
                    <div className="slide2">
                      <p>Monto en USDT</p>
                      <input
                        type="range"
                        id="rangoPrecio"
                        name="rangoPrecio"
                        min={membershipData.minimum}
                        max={membershipData.maximum}
                        step={membershipData.chunk}
                        value={precio}
                        onChange={handlePrecioChange}
                      />
                      <output htmlFor="rangoPrecio">
                        Valor: {precio.toLocaleString()} USDT
                      </output>
                    </div>

                    <p>Acumulacion para membresía activa</p>
                    <h2>{membershipData.savings_duration_in_months} </h2>
                    <p>Monto de cuota mensual en USDT</p>
                    <h2>{membershipData.monthly_membership_cost}</h2>
                    <p>Maduracion de membresía activa</p>
                    <h2>{membershipData.maturity_period_in_months}</h2>
                  </div>

                  <div
                    className="btn"
                    onClick={() => {
                      setMembershipData((prevData) => ({
                        ...prevData,
                        precio: precio,
                      }));
                    }}
                  >
                    <BasicModal2 membershipData={membershipData}></BasicModal2>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          ) : (
            <ul>
              {membership.map((member) => (
                <li className="listaMembership" style={estiloLista}>
                  <h1 onClick={() => handleData(member)}>{member.name}</h1>
                </li>
              ))}
            </ul>
          )}
        </Box>
      </Modal>
    </div>
  );
}
