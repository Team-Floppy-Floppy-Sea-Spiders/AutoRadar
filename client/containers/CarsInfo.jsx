import { Button } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import CarsList from '../Components/CarsList';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

export default function CarsInfo({carsCom, autoTrader, trueCar}) {
  const allCarCards = [...carsCom, ...autoTrader, ...trueCar]
  // allCarCards = allCarCards.sort((a, b) => b.price-a.price);
  return (
    <>    
    <div style={{
      display: 'flex',
      justifyContent: 'space-evenly'
    }}>
      <CarsList carsArr={allCarCards} name={'Car Listing'}/>
    </div>
    </>
  )
}
