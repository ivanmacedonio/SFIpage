import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import chica from "../assets/Nosotros.webp";
import { Carrouselp2 } from "../components/Carrouselp2";
import { Footer } from "../components/Footer";
import { HeaderNormal } from "../components/Header-normal";
import { Scrollvalores } from "../components/Scrollvalores";
import "../styles/page2.css";
export const Page2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [title, setTitle] = useState("Confianza");
  const [description, setDescription] = useState(
    "Construimos la confianza a través de la transparencia, la honestidad y la seguridad en todas nuestras interacciones. Nuestros socios confían en que estamos comprometidos a salvaguardar y hacer crecer su patrimonio de manera responsable y confiable. "
  );

  const confianzaRef = useRef(null);

  const handleConfianzaClick = (valorTitle, valorDescription) => {
    const box = confianzaRef.current.getBoundingClientRect();
    window.scrollTo({
      top: box.top + window.scrollY - 350,
      behavior: "smooth",
    });
    setTitle(valorTitle);
    setDescription(valorDescription);
  };

  ///FRAMER

  return (
    <div className="page2" id="nosotros">
      <div className="header">
        <HeaderNormal></HeaderNormal>
      </div>
      <div className="page2">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="textp2">
            <div className="imagenp2r">
              <img src={chica} alt="" />
            </div>
            <h1>Por tu futuro aún más seguro.</h1>
            <p>
              Smart Future Income es una empresa visionaria que se preocupa
              profundamente por tu bienestar en un mundo digital en constante
              evolución. Nuestro enfoque es revolucionario, ya que confiamos en
              activos digitales para dirigir el camino hacia tu prosperidad
              futura.
            </p>
          </div>
        </motion.div>

        <div className="carrouselp2">
          <Carrouselp2></Carrouselp2>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="textContainerNosotros">
            <div className="mision">
              <h1>Misión:</h1>
              <p>
                En Smart Future Income, estamos comprometidos a impulsar tu
                futuro a través de soluciones con herramientas tecnológicas y
                activos digitales. Nuestra misión es brindar oportunidades de
                crecimiento sólido y sostenible en la economía digital,
                asegurando la seguridad y la prosperidad de nuestros socios en
                el futuro.
              </p>
            </div>
            <div className="vision">
              <h1>Visión:</h1>
              <p>
                La visión de Smart Future Income es ser la principal herramienta
                de las nuevas y futuras generaciones, por la cual se aseguran
                sus próximos años. Legando a garantizar un estilo de vida mejor
                para nuestras socias y socios, a pesar de las crisis o
                situaciones sociales que se vengan en los años siguientes.
              </p>
            </div>
            <div className="vision2">
              <p>
                Nuestra visión es ser el referente en la industria, asegurando
                tu futuro, reconocidos por nuestra innovación constante, nuestro
                compromiso con la seguridad y la excelencia en el servicio al
                socio. Queremos empoderar a las personas para que tomen el
                control de su objetivo económico confiando en nuestros
                servicios.
              </p>
            </div>
          </div>
        </motion.div>
        <div className="valores" id="valor">
          <div className="valorestitle">
            <h1>Valores</h1>
          </div>
          <div className="scrollvalores">
            <Scrollvalores></Scrollvalores>
          </div>
          <div className="lista">
            <div className="listvalores">
              <ul>
                <motion.div>
                  <li
                    onClick={() =>
                      handleConfianzaClick(
                        "Confianza",
                        "Construimos la confianza a través de la transparencia, la honestidad y la seguridad en todas nuestras interacciones. Nuestros socios confían en que estamos comprometidos a salvaguardar y hacer crecer su patrimonio de manera responsable y confiable.  "
                      )
                    }
                  >
                    Confianza
                  </li>
                </motion.div>
                <li
                  onClick={() =>
                    handleConfianzaClick(
                      "Seguridad",
                      "Operamos con los más altos estándares de seguridad en todos los aspectos de nuestro negocio. Desde la gestión de activos hasta la protección de los datos de nuestros socios, nos comprometemos a garantizar un entorno seguro y confiable. La seguridad de nuestras operaciones y la protección de nuestros clientes son fundamentales para nosotros.  "
                    )
                  }
                >
                  Seguridad
                </li>
                <li
                  onClick={() =>
                    handleConfianzaClick(
                      "Lealtad",
                      "Estamos comprometidos con nuestros socios a largo plazo y trabajamos incansablemente para asegurarnos de que sus intereses siempre estén protegidos. Nuestra lealtad hacia nuestros socios se refleja en la construcción de relaciones sólidas y duraderas.    "
                    )
                  }
                >
                  Lealtad
                </li>
                <li
                  onClick={() =>
                    handleConfianzaClick(
                      "Integridad",
                      "Operamos de manera ética y moral, siempre tomando decisiones basadas en principios sólidos. Nos comprometemos a mantener los más altos estándares de integridad en todas nuestras actividades, brindando a nuestros socios la tranquilidad de saber que sus futuros prósperos están en buenas manos.     "
                    )
                  }
                >
                  Integridad
                </li>
              </ul>
            </div>
            <div className="listvalores2">
              <ul>
                <li
                  onClick={() =>
                    handleConfianzaClick(
                      "Transparencia",
                      "Comunicamos de manera abierta y honesta con nuestros socios sobre su futuro.      "
                    )
                  }
                >
                  Transparencia
                </li>
                <li
                  onClick={() =>
                    handleConfianzaClick(
                      "Principio de Servicio",
                      "Brindamos un servicio personalizado y atento a cada uno de nuestros socios. Brindando la plataforma para toda persona que quiera un mejor futuro.    "
                    )
                  }
                >
                  Principio de Servicio
                </li>
                <li
                  onClick={() =>
                    handleConfianzaClick(
                      "Equidad",
                      "Creemos en la justicia y la igualdad de oportunidades para todos nuestros socios, independientemente de la situación o circunstancias personales. Nos esforzamos por asegurarnos de que cada individuo tenga acceso a soluciones reales que les permitan alcanzar sus objetivos para futuro, de manera justa y equitativa.     "
                    )
                  }
                >
                  Equidad
                </li>
                <li
                  onClick={() =>
                    handleConfianzaClick(
                      "Excelencia",
                      "Nos esforzamos por alcanzar la excelencia en la gestión empresarial, proporcionando un servicio al socio excepcional y comprometiéndonos a superar cualquier expectativa. Nuestro enfoque en la excelencia nos impulsa a ser líderes en la industria y a ofrecer a nuestros socios la máxima calidad en todas las áreas de nuestro negocio.   "
                    )
                  }
                >
                  Excelencia
                </li>
              </ul>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 300 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="confianza" id="set" ref={confianzaRef}>
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="footer">
        <Footer></Footer>
      </div>
    </div>
  );
};
