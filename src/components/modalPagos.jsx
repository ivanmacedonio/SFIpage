import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import * as React from "react";
import { useState } from "react";
import "../styles/pay.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "45%",
  border: "none",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function BasicModalPagos({ movements }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = movements.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        style={{
          color: "green",
          fontWeight: 500,
          border: "2px solid green",
          borderRadius: "0.5rem",
        }}
      >
        Historial de pagos
      </Button>
      <Modal
        open={open}
        id="modalpagos"
        style={{ overflow: "auto" }}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="boxpay">
          <h2
            onClick={() => {
              handleClose();
            }}
            id="x1"
          >
            x
          </h2>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Historial de movimientos
          </Typography>
          <div className="grid-payment">
            <h3>Autor</h3>
            <h3>Código</h3>
            <h3>Fecha de creación</h3>
            <h3>Monto</h3>
            <h3>Estado</h3>

            {movements.map((movement) => (
              <React.Fragment>
                <h2 key={movement.code}>{movement.created_by_name}</h2>
                <h2 key={movement.code}>{movement.code}</h2>
                <h2 key={movement.code}>{movement.created_date}</h2>
                <h2 key={movement.code}>
                  {movement.amount.toLocaleString("en")} USDT
                </h2>
                <h2 key={movement.code}>{movement.status}</h2>
              </React.Fragment>
            ))}
          </div>
          <React.Fragment>
            <div className="mobilelabel">
              {currentItems.map((movement) => (
                <React.Fragment key={movement.code}>
                  <div className="labelspayment">
                    <label>
                      <h3>Autor:</h3>
                      <h2>{movement.created_by_name}</h2>
                    </label>
                    <label>
                      <h3>Código:</h3>
                      <h2>{movement.code}</h2>
                    </label>
                    <label>
                      <h3>Fecha de creación:</h3>
                      <h2>{movement.created_date}</h2>
                    </label>
                    <label>
                      <h3>Monto:</h3>
                      <h2>{movement.amount} USDT</h2>
                    </label>
                    <label>
                      <h3>Estado:</h3>
                      <h2>{movement.status}</h2>
                    </label>
                  </div>
                </React.Fragment>
              ))}

              <div className="pagination">
                {Array.from(
                  { length: Math.ceil(movements.length / itemsPerPage) },
                  (_, i) => (
                    <motion.div whileTap={{ scale: 2 }}>
                      <button
                        key={i + 1}
                        onClick={() => paginate(i + 1)}
                        className={currentPage === i + 1 ? "active" : ""}
                      >
                        {i + 1}
                      </button>
                    </motion.div>
                  )
                )}
              </div>
            </div>
          </React.Fragment>
        </Box>
      </Modal>
    </div>
  );
}
