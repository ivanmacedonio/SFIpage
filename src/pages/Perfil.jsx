import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import estado from "../assets/Asset 26.png";
import { HeaderNormal } from "../components/Header-normal";
import BasicModal from "../components/ModalProfile1";
import { BASE_URL } from "../hooks/fetch";
import "../styles/perfil.css";

export const Perfil = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const nav = useNavigate();
  const [profile, setProfile] = useState([]);
  const [empty, setEmpty] = useState(false);
  const [active, setActive] = useState(false);
  const [estilo, setEstilo] = useState({ display: "none" });
  const [isMember, setIsMember] = useState(false);
  const [isVerificated, setIsVerificated] = useState(true);
  const [denegado, setDenegado] = useState(false);

  useEffect(() => {
    async function getUser() {
      const token = localStorage.getItem("access");
      if (token) {
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        try {
          const res = await axios.get(`${BASE_URL}kyc/`, {
            headers,
          });
          // if (res.data.KYC_Detail.state != "") {
          //   setProfile(res.data.KYC_Detail);
          // } else {
          //   setEmpty(true);
          // }
          console.log(res.data.KYC_Detail.state);
          switch (res.data.KYC_Detail.state) {
            case "":
              setIsVerificated(false);
              setEmpty(true);
              break;
            case "Pendiente":
              setEmpty(true);
              setIsVerificated(false);
              break;
            case "Aprobado":
              setEmpty(false);
              setProfile(res.data.KYC_Detail);
              setIsVerificated(true);
              break;
            case "Denegado":
              setEmpty(true)
              setDenegado(true);
              break;
          }
        } catch (error) {
          setEmpty(true);
        }
      } else {
        nav("/login");
      }
    }
    getUser();
    window.scrollTo(0, 0);
  }, []);

  function handleQuinquenio() {
    setActive(!active);
    setEstilo({ display: active ? "none" : "block" });
  }

  return (
    <div className="perfilpage">
      <div className="header">
        <HeaderNormal></HeaderNormal>
      </div>
      <div className="profilecontainer">
        <div className="formprofile1">
          <h1 id="perfilh11">Perfil</h1>
          {empty ? (
            <div className="alert1">
              {denegado ? (
                <h5>
                  Decidimos denegar tu acceso a la plataforma. Para mas
                  informacion acerca de los estados de KYC contactese con
                  nosotros
                </h5>
              ) : (
                <h5>
                  Actualmente tu usuario se encuentra en revision. Una vez
                  verifiquemos el KYC, tendras acceso a nuestros planes.
                </h5>
              )}
            </div>
          ) : (
            <div className="form1">
              <p>Nombre</p>
              <h2>{profile.user_name}</h2>
              <p>Identificacion</p>
              <h2>{profile.identification}</h2>
              <p>Correo</p>
              <h2>{profile.email}</h2>
              <p>Cumpleaños</p>
              <h2>{profile.date_of_birth}</h2>
            </div>
          )}
        </div>

        {empty ? (
          ""
        ) : (
          <div className="formprofile2">
            <h1 id="deletemem">Membresía</h1>

            {isMember ? (
              <div className="containerperfil2">
                {isVerificated ? (
                  <div className="form2">
                    <h1 id="datosmem">Datos de membresía</h1>
                    <div className="caja">
                      <p>Tipo de membresía</p>
                      <h2>Educativo a corto plazo</h2>
                    </div>
                    <div className="caja">
                      <p>Cuotas</p>
                      <h2 id="cuotas">24/24</h2>
                    </div>
                    <div className="caja">
                      <p>Cuota mensual</p>
                      <h2 id="maduracion">416.68 USDT</h2>
                    </div>
                    <div className="caja">
                      <p>Fecha de inicio</p>
                      <h2 id="fecha">1/2/3</h2>
                    </div>
                    <div className="caja">
                      <h3 id="descargar">Descargar contrato</h3>
                    </div>
                    <div className="caja" id="quinquenio">
                      <input type="checkbox" onClick={handleQuinquenio} />{" "}
                      Retiro de quinquenio
                    </div>
                    <div className="caja" id="estadocuota">
                      <img src={estado} alt="" />
                    </div>
                    <h1 id="bonificacionh1">Bonificacion proyectada</h1>
                    <div className="containerfechas">
                      <div className="caja">
                        <p>Fecha de inicio</p>
                        <h2>1/12/15</h2>
                      </div>
                      <div className="caja">
                        <p>Fecha de vencimiento</p>
                        <h2>1/12/25</h2>
                      </div>
                      <div className="caja">
                        <p>Cantidad de bonos</p>
                        <h2>0/60</h2>
                      </div>
                      <div className="caja">
                        <p>Monto de cuota mensual en USDT</p>
                        <h2>1.000 USDT</h2>
                      </div>
                      <div className="caja">
                        <p>Wallet</p>
                        <h2>XXXXXXXX</h2>
                      </div>
                      <div className="caja" id="full">
                        <p>Tiempo de maduracion</p>
                        <h2>10 años</h2>
                      </div>
                    </div>
                    <div className="texxt">
                      <p>
                        {" "}
                        La maduracion de tu plan iniciara el proceso de
                        maduracion por 10 años, una vez hayas alcanzado el
                        estatus de "membresia activa" y cumplido con la cantidad
                        de cuotas mensuales de tu membresia
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="form2b">
                    <h1 id="datosmemb">Datos de membresía</h1>
                    <div className="caja" id="expand">
                      <p>Tipo de membresía</p>
                      <h2>Educativo a corto plazo</h2>
                    </div>
                    <div className="caja">
                      <p>Cuotas</p>
                      <h2>24/24</h2>
                    </div>
                    <div className="caja">
                      <p>Tiempo de maduracion</p>
                      <h2>2 meses</h2>
                    </div>
                    <div className="caja">
                      <p>Fecha de inicio</p>
                      <h2>1/2/3</h2>
                    </div>
                    <div className="caja">
                      <h3 id="pending">Pendiente de firmar</h3>
                    </div>
                    <div className="caja" id="quinqueniob">
                      <input type="checkbox" onClick={handleQuinquenio} />{" "}
                      Retiro de quinquenio
                    </div>
                    <h1 id="bonificacionh1b">Bonificacion proyectada</h1>
                    <div className="containerfechasb">
                      <div className="caja">
                        <p>Fecha de inicio</p>
                        <h2>1/12/15</h2>
                      </div>
                      <div className="caja">
                        <p>Fecha de vencimiento</p>
                        <h2>1/12/25</h2>
                      </div>
                      <div className="caja">
                        <p>Cantidad de bonos</p>
                        <h2>0/240</h2>
                      </div>
                      <div className="caja" id="paddi">
                        <p>Monto de cuota mensual en USDT</p>
                        <h2>1000 USDT</h2>
                      </div>
                      <div className="caja" id="wallet">
                        <p>Wallet</p>
                        <h2>XXXX</h2>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="noMember">
                <BasicModal></BasicModal>
                <h2>
                  Por el momento usted no cuenta con ningún plan de membresía
                </h2>
              </div>
            )}
            <div className="alerta" style={estilo}>
              <p>
                Solo tiene una oportunidad de selección. Para realizar un cambio
                del status de retiro preseleccionado debe ponerse en contacto a
                través de nuestra línea de soporte vía email o a través de
                nuestro formulario de contacto en el sitio web. Este proceso
                debe suceder 30 días antes de su fecha proyecta de bonificación
                al finalizar el primer quinquenio de maduración.
              </p>
            </div>
            <h1 id="btn-adicional">+ Membresía adicional</h1>
          </div>
        )}
      </div>
    </div>
  );
};
