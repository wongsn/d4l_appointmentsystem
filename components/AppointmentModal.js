import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import AppointmentStepper from './AppointmentStepper';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export const AppointmentModal = ({open, handleClose }) => {

  return (
      <Modal
        open={open}
        onBlur={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AppointmentStepper />
        </Box>
      </Modal>
    
  );
}