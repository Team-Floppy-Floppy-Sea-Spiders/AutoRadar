require('dotenv').config();
const { ConstructionOutlined } = require('@mui/icons-material');
const { default: axios } = require('axios');
const express = require('express');
const pgController = require('../controllers/pgController');
const wishlistController = require('../controllers/wishlistController');
const router = express.Router();

// routers to handle requests and invoke middleware functions that get executed by controller
router.get(
  '/scrape/:make/:model/:minYear/:zip',
  pgController.getCarsComData,
  pgController.getTrueCarData,
  pgController.getAutoTraderData,
  (req, res) =>
    res.status(200).json({
      carsComData: res.locals.carsComData,
      trueCarData: res.locals.trueCarData,
      autoTraderData: res.locals.autoTraderData,
    })
);

// router to POST to wishlist once user clicks on the favorites icon
router.post('/wishlist', wishlistController.addWishlistItem, (req, res) =>
  res.status(200).json(res.locals.body)
);

// router to GET all the cars from a users wishlist
router.get('/wishlist', wishlistController.getWishlistItems, (req, res) =>
  res.status(200).json(res.locals.body)
);

// router to DELETE a single car from a users wishlist
router.delete(
  '/wishlist/:id',
  wishlistController.deleteWishlistItem,
  (req, res) => res.status(200).json('Your car has been deleted')
);

// Get request to github O-auth
router.get('/auth', (req, res) => {
  res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`)
})

// GET Request to receive the code, then POST request with the code, client ID, and secret to receive Token
router.get('/oauth-callback', ({ query: { code }}, res) => {
  const body = {
    client_id: process.env.GITHUB_CLIENT_ID,
    client_secret: process.env.GITHUB_SECRET,
    code,
  }
  const opts = { headers: {accept: 'application/json'} }
  axios.post('https://github.com/login/oauth/access_token', body, opts)
  .then((res) => res.data.access_token)
  .then((token) => {
    console.log('My token: ', token);
    res.redirect(`/?tok=${token}`)
  })
  .catch((err) => res.status(500).json({ err: err.message }));
});



//router.post('/dataDisplay', pgController.getCarsComData, pgController.insertCarsComData)

module.exports = router;

// controller.scrapeCarInfo,
