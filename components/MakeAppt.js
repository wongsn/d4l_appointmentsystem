import { useState } from 'react'
import makeStyles from '@mui/styles/makeStyles';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { AppointmentModal } from './AppointmentModal';

const useStyles = makeStyles((theme)=> ({
  fab: {
    position: "absolute",
    bottom: 40,
    right: 40,
    backgroundColor:"white",
    color: "black"
  }
}))

const MakeAppt = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  return (
    <Fab
        size="medium"
        aria-label="add"
        className={classes.fab}
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

