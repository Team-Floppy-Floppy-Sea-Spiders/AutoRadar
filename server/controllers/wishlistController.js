const pool = require('../models/pgModels');

// update the database by inserting new row into wishlist table
const wishlistController = {};
wishlistController.addWishlistItem = async (req, res, next) => {
  try {
    const { price, image, mileage, year, make, model, url, zip, date } =
      req.body;

    const newWishlistItem = await pool.query(
      'INSERT INTO Wishlist(price, image, mileage, year, make, model, url, zip, date) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)',
      [price, image, mileage, year, make, model, url, zip, date]
    );

    console.log('newWishlistItem:', newWishlistItem);

    res.locals.body = newWishlistItem;
    return next();
  } catch (error) {
    return next({
      log: 'Error in wishlistController.addWishlist',
      status: 400,
      message: { error: `Error in wishlistController.addWishlist : ${error}` },
    });
  }
};

// update table by deleting row
wishlistController.deleteWishlistItem = async (req, res, next) => {
  try {
    // specify exactly what we want to delete
    const { id } = req.params;

    const deleteWishListItem = await pool.query(
      'DELETE FROM Wishlist WHERE _id = $1',
      [id]
    );

    console.log('deleteWishListItem: wishlist item deleted');

    return next();
  } catch (error) {
    return next({
      log: 'Error in wishlistController.deleteWishlistItem',
      status: 400,
      message: {
        error: `Error in wishlistController.deleteWishlistItem ${error}`,
      },
    });
  }
};

// select all wishlist items
wishlistController.getWishlistItems = async (req, res, next) => {
  try {
    // you are selecting all the data from the table 'wishlist'
    const allWishListItems = await pool.query('SELECT * FROM Wishlist');
    res.locals.body = allWishListItems; // aka sending back on the response object

    console.log('allWishListItems', allWishListItems);

    return next();
  } catch (error) {
    return res.locals.body = [];
    
    return next({
      log: 'Error in wishlistController.getWishlistItems',
      status: 400,
      message: {
        error: `Error in wishlistController.getWishlistItems ${error}`,
      },
    });
  }
};
module.exports = wishlistController;
