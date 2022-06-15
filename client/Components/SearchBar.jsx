import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';


export default function SearchBar({updateMake, updateModel, updateYear, updateZip, fetching}) {
  return (
    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      margin: 2
    }}
    noValidate
    autoComplete="off"
  >
    <TextField onChange={updateMake} color="secondary" label="Make" variant="outlined" />
    <TextField onChange={updateModel} id="outlined-basic" label="Model" variant="outlined" />
    <TextField onChange={updateYear} id="outlined-basic" label="Minimum Year" variant="outlined" />
    <TextField onChange={updateZip} id="outlined-basic" label="Zip" variant="outlined" />
    <Button variant="contained" color="success" onClick={fetching}>Search</Button>
  </Box>
  )
}
