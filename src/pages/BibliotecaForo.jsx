import axios from "axios";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { HeaderNormal } from "../components/Header-normal";
import { BASE_URL } from "../hooks/fetch";
import "../styles/BibliotecaForo.css";

export const BibliotecaForo = () => {
  const [data, setData] = useState([]);
  const [detail, setDetail] = useState({});
  const [show, setShow] = useState(false);
  async function getData() {
    try {
      const res = await axios.get(`${BASE_URL}forum/library/`);
      console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleDetail(item) {
    setDetail(item);
    console.log(detail);
    setShow(true);
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <React.Fragment>
      <div className="header">
        <HeaderNormal></HeaderNormal>
      </div>
      <div className="containerBiblioteca">
        <h1>
          Material de <strong>Smart Future Income</strong>
        </h1>
        {show ? (
          <React.Fragment>
            <h5
              onClick={() => {
                setShow(!show);
              }}
              id="volver"
            >
              Volver
            </h5>
            <div className="itemdetail">
              <h2 key={detail.id}>{detail.title}</h2>
              <p>{detail.description}</p>
              <button
                onClick={() => {
                  window.open(detail.filePost, "_blank");
                }}
              >
                Ver archivo
              </button>
            </div>
          </React.Fragment>
        ) : (
          <div className="filescontainer">
            {data.map((item) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
              >
                <div
                  className="itemContainer"
                  onClick={() => {
                    handleDetail(item);
                  }}
                >
                  <h2 key={item.id}>{`${item.title.slice(0, 20)}...`}</h2>
                  <p>{`${item.description.slice(0, 40)}...`}</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(item.filePost, "_blank");
                    }}
                  >
                    Ver archivo
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </React.Fragment>
  );
};
