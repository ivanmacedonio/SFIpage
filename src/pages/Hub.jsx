import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import icono from "../assets/icono.png";
export const Hub = () => {
  const nav = useNavigate();
  useEffect(() => {
    const intervalId = setInterval(() => {
      nav("/hub");
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div>
      <div
        className="loadingcourse"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10%",
        }}
      >
        <motion.div
          animate={{
            rotate: 360,
            transition: { duration: 1, repeat: Infinity },
          }}
        >
          <img src={icono} alt="" style={{ width: "10rem" }} />
        </motion.div>
      </div>
    </div>
  );
};
