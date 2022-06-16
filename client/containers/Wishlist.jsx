import React, { useEffect, useState } from 'react';
import WishlistCardsList from '../Components/WishlistCardsList';

export default function Wishlist() {

    const [wishList, setWishList] = useState([]);

    useEffect(() => {
        fetch('/api/wishlist')
            .then(data => data.json())
            .then(data => setWishList([data]))
            .catch(err => console.log('Error in Wishlist.jsx', err));
        
    //     setWishList([
    //     {
    //         price: 50000,
    //         image: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/2017_Honda_Civic_SR_VTEC_1.0_Front.jpg',
    //         mileage: 2000,
    //         year: 2012,
    //         make: 'honda',
    //         model: 'civic',
    //         url: 'https://www.google.com',
    //         zip: 20171,
    //     },
    //     {
    //         price: 10000000,
    //         image: 'https://cdn.motor1.com/images/mgl/4JyZA/s1/lamborghini-aventador-lp-780-4-ultimae.jpg',
    //         mileage: 20,
    //         year: 2021,
    //         make: 'lamborghini',
    //         model: 'aventador',
    //         url: 'https://www.google.com',
    //         zip: 20171,
    //     }
    // ])
    }, []);
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
            <div style={{
            display: 'flex',
            justifyContent: 'space-evenly'
            }}>
            <WishlistCardsList carsArr={wishList} name={'Wishlist'}/>
            </div>
        </> 
    )
}
