import React from 'react';
import {useLocation} from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Select, TextInput } from '@mantine/core';



export default function SearchBar({
  updateMake,
  make,
  updateModel,
  modelList,
  updateYear,
  updateZip,
  fetching,
}) {

  const [loading, setLoading] = React.useState(true);
  function handleClick() {
    setLoading(true);
  }

  return (
    <Box
      component='form'
      className='search-bar-box1'
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
        required
        size='lg'
      />
      <Select
        label='Model'
        placeholder='Select Model'
        data={modelList}
        onChange={updateModel}
        required
        size='lg'
      />
      {/* <TextField
        onChange={updateYear}
        id='outlined-basic'
        label='Minimum Year'
        variant='outlined'
      /> */}
      {/* <TextField
        onChange={updateZip}
        id='outlined-basic'
        label='Zip'
        variant='outlined'
      /> */}
      <TextInput
        onChange={updateYear}
        placeholder="Type Year"
        label="Minimum Year"
        size='lg'
      />
      <TextInput
        onChange={updateZip}
        placeholder="Type ZipCode"
        label="Zip"
        size='lg'
      />

      <Button variant='contained' color='success' onClick={fetching}>
        Search
      </Button>

    </Box>
  );
}