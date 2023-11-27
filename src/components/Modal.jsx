import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import '../styles/modal3.css';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: 'rgb(0, 80, 117)',
  color: 'White',
  borderStyle: 'none',
  borderColor: 'White',
  borderRadius: '1.4rem',
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal({name, descrip}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Ver más</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <h2 id="modal3h2" onClick={()=> {handleClose(false)}}>X</h2>
            <Typography id="transition-modal-title" variant="h6" component="h2" fontSize='3rem' fontFamily= 'Lato, sans-serif' fontWeight={900}>
              {name}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }} fontSize='1.3rem'>
              {descrip}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}