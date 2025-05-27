


// Importing the required modules
// Importing the express module
const express = require('express');
// Importing the router module from the express module
const router = express.Router();
// Importing the user controllers
const {
    // GET controllers
    getUser,
    getUserData,
    getUsers,

    // POST controllers
    // createUser,

    // PATCH controllers
    // updateUser,

    // DELETE controllers
    // deleteUser,
} = require('../controllers/userController');
// Importing the userAuth middleware
const userAuth = require('../middlewares/userAuth');



// GET routes
// GET all users
router.get('/', userAuth, getUsers);

// GET a single user
router.get('/:id', userAuth, getUser);

// GET logged-in user data
router.get('/data', userAuth, getUserData);



module.exports = router;