import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import * as React from "react";
import '../styles/acordeonfaq.css';

export default function BasicAccordion() {
  return (
    <div id="acordeon">
      <Accordion>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Typography>1. ¿Qué es Smart Future Income? </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Smart Future Income es una empresa visionaria que se preocupa
            profundamente por tu bienestar en un mundo digital en constante
            evolución. Nuestro enfoque es revolucionario, ya que confiamos en
            activos digitales
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
          <Typography>2. ¿Cómo funciona la membresía? </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Typography>3. ¿Cómo se gestionan los activos digitales?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Typography>4. ¿Cómo puedo contactar a Smart Future Income? </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
