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
  const [membershipData, setMembershipData] = useState({
    name : 'Elige tu membresia'
  });

  const handlePrecioChange = (event) => {
    setPrecio(parseInt(event.target.value, 10));
  };
  const nav = useNavigate();
  const estiloLista = {
    background: 'linear-gradient(to right, rgb(3, 180, 211), rgb(2, 80, 116))',
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

  async function getNewAccess(refresh) {
    try {
      const res = await axios.post("http://localhost:8000/token/refresh/", {
        refresh: refresh,
      });
      localStorage.removeItem("access");
      localStorage.setItem("access", res.data.access);
      console.log("nuevo access");
    } catch (error) {
      nav("/login");
    }
  }

  useEffect(() => {
    async function getMemberships() {
      const token = localStorage.getItem("access");
      const refresh = localStorage.getItem("refresh");
      if (token) {
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        try {
          const res = await axios.get(
            " http://127.0.0.1:8000/api/membership/",
            {
              headers,
            }
          );
          setMembership(res.data);
        } catch (error) {
          await getNewAccess(refresh);
          window.location.reload();
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
      name : member.name,
      savings_duration_in_months: member.savings_duration_in_months,
      monthly_membership_cost: member.monthly_membership_cost,
      maturity_period_in_months: member.maturity_period_in_months,
      optional_withdrawal_percentage: member.optional_withdrawal_percentage,
    });
    setList(!list)
  }

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
            <div className="list">
              <div className="membresiaModal1">
                <div className="slide2">
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
                </div>

                <p>Acumulacion para membresia activa</p>
                <h2>{membershipData.savings_duration_in_months} </h2>
                <p>Monto de cuota mensual en USDT</p>
                <h2>{membershipData.monthly_membership_cost}</h2>
                <p>Maduracion de membresia activa</p>
                <h2>{membershipData.maturity_period_in_months}</h2>
              </div>
              <div className="btn">
                <BasicModal2 membershipData = {membershipData}></BasicModal2>
              </div>
            </div>
          ) : (
            <ul>
              {membership.map((member) => (
                <li className="listaMembership" style={estiloLista}>
                  <h1 onClick={() => handleData(member)}>
                    {member.name}
                  </h1>
                </li>
              ))}
            </ul>
          )}
        </Box>
      </Modal>
    </div>
  );
}
