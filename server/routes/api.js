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
    res
      .status(200)
      .json({
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

//router.post('/dataDisplay', pgController.getCarsComData, pgController.insertCarsComData)

module.exports = router;

// controller.scrapeCarInfo,
