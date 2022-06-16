import { Button } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import CarsList from '../Components/CarsList';
import { Select } from '@mantine/core';

export default function CarsInfo({carsCom, autoTrader, trueCar}) {
  let allCarCards = [...carsCom, ...autoTrader, ...trueCar];
  const [filter, setFilter] = useState('relevance');

  if (filter === 'relevance') {
    allCarCards = [...carsCom, ...autoTrader, ...trueCar];
  } else if (filter === 'pricelowest'){
    allCarCards = allCarCards.sort((a, b) => a.price-b.price); 
  } else if (filter === 'pricehighest'){
    allCarCards = allCarCards.sort((a, b) => b.price - a.price);
  } else if (filter === 'mileagelowest') {
    allCarCards = allCarCards.sort((a, b) => a.mileage - b.mileage)
  } else if (filter === 'mileagehighest') {
    allCarCards = allCarCards.sort((a, b) => b.mileage - a.mileage)
  } else if (filter === 'yearoldest') {
    allCarCards = allCarCards.sort((a, b) => a.year - b.year)
  } else if (filter === 'yearnewest') {
    allCarCards = allCarCards.sort((a, b) => b.year - a.year)
  }

  return (
    <> 
    <Select
      label="Filter: "
      placeholder="Relevance"
      value={filter}
      onChange={setFilter}
      data={[
        { value: 'relevance', label: 'Relevance' },
        { value: 'pricelowest', label: 'Price - Lowest' },
        { value: 'pricehighest', label: 'Price - Highest' },
        { value: 'mileagelowest', label: 'Mileage - Lowest' },
        { value: 'mileagehighest', label: 'Mileage - Highest' },
        { value: 'yearnewest', label: 'Year - Newest' },
        { value: 'yearoldest', label: 'Year - Oldest' },
      ]}
      styles={(theme) => ({
        root: {
          position: 'relative',
          textAlign: 'center',
          left: '61%',
          width: '300px',
          border: 0,
        }
      })}
    />   
    <br/><br/>
    <div className='cars-info-div1'>
      <CarsList carsArr={allCarCards} name={'Car Listing'}/>
    </div>
    </>
  )
}
