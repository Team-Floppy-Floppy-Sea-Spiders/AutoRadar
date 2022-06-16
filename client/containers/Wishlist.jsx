import React, { useEffect, useState } from 'react';
import WishlistCardsList from '../Components/WishlistCardsList';
import { Select } from '@mantine/core'

export default function Wishlist() {
  const [wishList, setWishList] = useState([]);
  const [deleted, setDeleted] = useState(0);
  const [filter, setFilter] = useState('relevance');
  let wishlistCards = wishList;
 
  if (filter === 'relevance') {
    wishlistCards = [wishList];
  } else if (filter === 'pricelowest'){
    wishlistCards = wishlistCards.sort((a, b) => a.price-b.price); 
  } else if (filter === 'pricehighest'){
    wishlistCards = wishlistCards.sort((a, b) => b.price - a.price);
  } else if (filter === 'mileagelowest') {
    wishlistCards = wishlistCards.sort((a, b) => a.mileage - b.mileage)
  } else if (filter === 'mileagehighest') {
    wishlistCards = wishlistCards.sort((a, b) => b.mileage - a.mileage)
  } else if (filter === 'yearoldest') {
    wishlistCards = wishlistCards.sort((a, b) => a.year - b.year)
  } else if (filter === 'yearnewest') {
    wishlistCards = wishlistCards.sort((a, b) => b.year - a.year)
  }

  useEffect(() => {
    fetch('/api/wishlist')
      .then((data) => data.json())
      .then((data) => setWishList(data.rows))
      .catch((err) => console.log('Error in Wishlist.jsx', err));
  }, [deleted]);
  console.log('data coming back from our server', wishList);
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
        />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
        }}
      >
        <WishlistCardsList
          carsArr={wishList}
          name={'Wishlist'}
          setDeleted={setDeleted}
          deleted={deleted}
        />
      </div>
    </>
  );
}
