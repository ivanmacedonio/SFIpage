import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import * as React from "react";
import "../styles/acordeonfaq.css";

export default function BasicAccordion() {
  return (
    <div id="acordeon">
      <Accordion>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Typography>1. ¿Qué es Smart Future Income?</Typography>

        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Smart Future Income es una empresa visionaria que se preocupa
            profundamente por tu bienestar en un mundo digital en constante
            evolución. Nuestro enfoque es revolucionario, ya que confiamos en
            activos digitales Nos esforzamos por hacer que cada paso en el viaje
            de nuestros socios sea un paso hacia un futuro más brillante y
            próspero. A medida que continuamos creciendo y evolucionando,
            nuestra visión es ser la fuerza motriz detrás de una nueva era
            tecnológica, donde la seguridad, el crecimiento sostenible y la
            confianza son la norma.  En Smart Future Income, creemos que el
            futuro de cada individuo es valioso y merece ser moldeado con
            inteligencia y visión. Estamos comprometidos a ser el vehículo que
            lleve a las personas hacia un mañana más brillante, donde los
            activos digitales sean la moneda de la prosperidad y la seguridad.
            Juntos, estamos construyendo un futuro inteligente y exitoso,
            respaldado por activos digitales y tecnologías innovadoras, en el
            que todos puedan confiar y prosperar.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
          <Typography>2. ¿Cómo funciona la membresía? </Typography>

        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            El proceso para afiliarse a SFI es super sencillo en 4 simples
            pasos, solo debes completar y aprobar el KYC, escoger el plan que
            más se apega a tus necesidades y realizar las cuotas de membresía a
            través de tus activos digitales con la wallet de tu preferencia.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Typography>3. ¿Cómo se gestionan los activos digitales? </Typography>

        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Representa la cuota de membresía para poder acceder al portal, la
            información y asegurar los años venideros.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Typography>
            4. ¿Cómo puedo contactar a Smart Future Income?{" "}
          </Typography>

        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Claro, siempre puedes ponerte en contacto con nosotros. Solo debes
            llenar el formulario del sitio o por nuestras redes sociales y en
            breve uno de nuestros asesores calificados te guiará en todo el
            proceso.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
