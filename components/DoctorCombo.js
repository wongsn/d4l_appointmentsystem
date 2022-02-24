import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export const DoctorCombo = ({ data, selected, setDoctor, query }) => {

  const doctorData = data.doctor
  const optionsArray = doctorData.map(data => {
    return `${data.doctor_name} (${data.doctor_id})`
  })
  const changeDoctor = (ev, newValue) => {
    if(newValue) {
      query(newValue.slice(-37,-1))
      setDoctor(newValue)
    } else {
      setDoctor(newValue)
      query("")
    }
  }
  return (
    <Autocomplete
      value={selected}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      onChange={(ev, newValue) =>{
        changeDoctor(ev, newValue)    
      }}
      disablePortal
      options={ optionsArray }
      sx={{ m: 0.5 }}
      renderInput={(params) => <TextField {...params} label="Doctors" />}
    />
  );
}


export default DoctorCombo
