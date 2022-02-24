import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export const PatientCombo = ({ data, selected, setPatient, query }) => {

  const patientData = data?.patient
  const optionsArray = patientData?.map(data => {
    return `${data.patient_name} - ${data.patient_gender}${data.patient_age} (${data.patient_id})`
  })

  const changePatient = (ev,newValue) => {
    if (newValue) {
      query(newValue.slice(-37,-1))
      setPatient(newValue)
    } else {
      query("")
      setPatient(newValue)
    }
  }

  return (
    <Autocomplete
      value={selected}
      onChange={(ev, newValue) => {
        changePatient(ev, newValue)
      }}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      disablePortal
      sx={{ m: 0.5 }}
      options={ optionsArray }
      label={"Find by patients"}
      renderInput={(params) => <TextField {...params} label="Patients" />}
    />
  );
}


export default PatientCombo
