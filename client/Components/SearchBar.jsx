import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Select } from '@mantine/core';
// import { Co2Sharp } from '@mui/icons-material';

export default function SearchBar({
  updateMake,
  make,
  updateModel,
  modelList,
  updateYear,
  updateZip,
  fetching,
}) {
  return (
    <Box
      component='form'
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        margin: 2,
      }}
      noValidate
      autoComplete='off'
    >
      <Select
        label='Make'
        placeholder='Select Make'
        value={make}
        data={[
          { value: 'honda', label: 'Honda' },
          { value: 'toyota', label: 'Toyota' },
          { value: 'tesla', label: 'Tesla' },
          { value: 'ford', label: 'Ford' },
          { value: 'audi', label: 'Audi' },
        ]}
        onChange={updateMake}
      />
      <Select
        label='Model'
        placeholder='Select Model'
        data={modelList}
        onChange={updateModel}
      />
      <TextField
        onChange={updateYear}
        id='outlined-basic'
        label='Minimum Year'
        variant='outlined'
      />
      <TextField
        onChange={updateZip}
        id='outlined-basic'
        label='Zip'
        variant='outlined'
      />
      <Button variant='contained' color='success' onClick={fetching}>
        Search
      </Button>
    </Box>
  );
}

// const cars = {
//   makes: [
//     {id: 1,
//       name: Honda},
//     {id: 2,
//       name: Ford},
//     {id: 3,
//       name: Tesla},
//   ],
//   models:[
//     {
//       id: 1,
//       name: Accord,
//       makes: 1
//     },
//   ]
// }
