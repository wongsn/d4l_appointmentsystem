import { useState } from 'react'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { AppointmentModal } from './AppointmentModal';


const MakeAppt = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  return (
    <Fab
        size="medium"
        aria-label="add"
        sx={{ position: "absolute",
              bottom: 40,
              right: 40,
              backgroundColor:"white",
              color: "black"}}
        onClick={handleOpen}
      >
      <AppointmentModal 
        open={open} 
        handleClose={handleClose} />
      <AddIcon />
    </Fab>
  )
}

export default MakeAppt

