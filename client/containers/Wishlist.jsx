import React, { useEffect, useState } from 'react';
import WishlistCardsList from '../Components/WishlistCardsList';

export default function Wishlist() {
  const [wishList, setWishList] = useState([]);
  const [deleted, setDeleted] = useState(0);

  useEffect(() => {
    fetch('/api/wishlist')
      .then((data) => data.json())
      .then((data) => setWishList(data.rows))
      .catch((err) => console.log('Error in Wishlist.jsx', err));
  }, [deleted]);
  console.log('data coming back from our server', wishList);
  // vehicleObj.price = Number(priceElement.text().replace(/\D/g, ''));
  //         vehicleObj.image = image;
  //         vehicleObj.mileage = Number(mileageElement.text().replace(/\D/g, ''));
  //         [ vehicleObj.year, vehicleObj.make, vehicleObj.model ] = titleElement.text().split(' '); // [2015, Honda, Civic, LX]
  //         vehicleObj.year = Number(vehicleObj.year);
  //         vehicleObj.url = url;
  //         vehicleObj.zip = Number(zip);
  //         vehicleObj.date = actualDate;
  return (
    <>
      <div className='wishlist-div1'>
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
