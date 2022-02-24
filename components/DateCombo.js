import { useState } from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

const DateCombo = ({date, setDate}) => {

  return (
    <LocalizationProvider 
      sx={{ m: 0.5 }}
      dateAdapter={AdapterDateFns}>
        <DatePicker
          disableFuture
          label="Filter by date"
          openTo="year"
          views={['year', 'month', 'day']}
          value={date}
          onChange={setDate}
          renderInput={(params) => <TextField {...params} />}
        />
    </LocalizationProvider>
  );
}

export default DateCombo