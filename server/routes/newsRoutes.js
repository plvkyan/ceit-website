


// Importing the required modules
// Importing the express module
const express = require('express');
// Importing the router module from the express module
const router = express.Router();
// Importing the news controllers
const {
    // GET controllers
    getNews,
    getAllNews,

    // POST controllers
    createNews,

    // PATCH controllers
    updateNews,

    // DELETE controllers
    deleteNews,
} = require('../controllers/newsController');
const { create } = require('../models/newsModel');



// Routes

// GET routes
// GET all news
router.get('/', getAllNews);

// GET a single news
router.get('/:id', getNews);



// POST routes
// POST new news
router.post('/', createNews);



// PATCH routes
// PATCH a news
router.patch('/:id', updateNews);



// DELETE routes
// DELETE a news
router.delete('/:id', deleteNews);


// Exporting the router module
// This allows other files to import this router module
// and use the defined routes
module.exports = router;
