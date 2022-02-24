import { useState, useRef, useEffect } from 'react'
import { Button, Input } from '@mui/material';
import { gql, useMutation } from '@apollo/client';


const UploadFile = () => {

  const [data, setData] = useState([])
  const inputRef = useRef()

  const ADD_APPOINTMENT = gql`
    mutation AddAppointment($objects: [appointment_insert_input!]!) {
      insert_appointment(objects: $objects) {
        returning {
          appointment_id
        }
      }
    }
  `

  const [ addAppointment, { data: appointmentData, loading, error }] = useMutation(ADD_APPOINTMENT)

  // run mutation event on Apollo
  useEffect(()=> {
    console.log(data)
    if (data.length > 0 ) addAppointment(data)
    // ensure to clean up the data
    return (
      data.length > 0 && setData([])
    )
  }, [data])

  const processData = dataString => {
    // split the data into header and corresponding rows
    const dataStringLines = dataString.split(/\r\n|\n/);
    const headers = dataStringLines[0].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
    const correctHeaders = ['doctor_id', 'doctor_name', 'patient_id', 'patient_name', 'patient_age', 'patient_gender', 'appointment_id', 'appointment_datetime']
 
    const list = [];

    for (let i = 1; i < dataStringLines.length; i++) {
      const row = dataStringLines[i].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
      if (headers && row.length == headers.length) {
        const obj = {};
        for (let j = 0; j < headers.length; j++) {
          let rowData = row[j];
          if (rowData.length > 0) {
            if (rowData[0] == '"')
              rowData = rowData.substring(1, rowData.length - 1);
            if (rowData[rowData.length - 1] == '"')
              rowData = rowData.substring(rowData.length - 2, 1);
          }
          if (headers[j]) {
            obj[headers[j]] = rowData;
          }
        }
 
        // remove the blank rows
        if (Object.values(obj).filter(x => x).length > 0) {
          list.push(obj);
        }
      }
    }
 
    setData(list);
  }
 
  // handle file upload
  const handleFileUpload = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (evt) => {
      /* Parse data */
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: 'binary' });
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
      processData(data);
    };
    reader.readAsBinaryString(file);
  }

  const handleInputClick = () => {
    inputRef.current.children[0].click()
  }

  return (
    <>
      <Input 
        sx={{display: 'none'}}
        type="file"
        ref={inputRef}
        accept=".csv, .xlsx, .xls"
        onChange={handleFileUpload}
      />
      <Button 
        variant="contained"
        onClick={handleInputClick}
      >
        Upload File (.csv, .xlsx, .xls)
      </Button>
    </>
  )
}

export default UploadFile