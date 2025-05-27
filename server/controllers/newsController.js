


// Importing the required modules
// Importing the mongoose module
const mongoose = require('mongoose');
// Importing the news model
const News = require('../models/newsModel');



// Controller functions for handling all news
// GET controllers
// GET all all news
const getAllNews = async (req, res) => {
    try {
        // Fetching all all news from the database
        const allNews = await News.find({}).sort({ createdAt: -1 });
        // Sending a response with the fetched all news
        return res.status(200).json(allNews);
    } catch (error) {
        // Sending a response with a 500 status code and an error message
        return res.status(500).json({ error: error.message });
    }
};

// GET a single news
const getNews = async (req, res) => {
    // Extracting the news ID from the request parameters
    const { id } = req.params;

    try {
        // Validating the ID format
        if (!mongoose.Types.ObjectId.isValid(id)) {
            // If the ID format is invalid, send a 400 response
            return res.status(400).json({ error: 'Invalid news ID format' });
        }

        // Fetching the news by ID from the database
        const news = await News.findById(id);

        // If the news is not found, send a 404 response
        if (!news) {
            return res.status(404).json({ error: 'News not found' });
        }

        // If the news is found, send a 200 response with the news
        // Sending a response with the fetched news
        return res.status(200).json(news);
    } catch (error) {
        // If an error occurs, send a 500 response
        // This could be due to a database error or an invalid ID format
        // Sending a response with a 500 status code and an error message
        return res.status(500).json({ error: error.message });
    }
};



// POST controllers
// POST a new news
const createNews = async (req, res) => {
    // Extracting the title and content from the request body
    const { title, content } = req.body;

    try {
        // Creating a new news using the News model
        const news = await News.create({ title, content });
        // Sending a response with the created news
        return res.status(201).json(news);
    } catch (error) {
        // Sending a response with a 400 status code and an error message
        return res.status(400).json({ error: error.message });
    }
};



// PATCH controllers
// PATCH an news
const updateNews = async (req, res) => {
    // Extracting the news ID from the request parameters
    const { id } = req.params;

    try {
        // Validating the ID format
        if (!mongoose.Types.ObjectId.isValid(id)) {
            // If the ID format is invalid, send a 400 response
            return res.status(400).json({ error: 'Invalid news ID format' });
        }

        // Fetching the news by ID from the database
        const news = await News.findOneAndUpdate({_id: id}, {
            ...req.body
        }, {new: true});

        // If the news is not found, send a 404 response
        if (!news) {
            return res.status(404).json({ error: 'News not found' });
        }

        // If the news is found, send a 200 response with the updated news
        return res.status(200).json(news);
    } catch (error) {
        // If an error occurs, send a 500 response
        return res.status(500).json({ error: error.message });
    }
};



// DELETE controllers
// DELETE an news
const deleteNews = async (req, res) => {
    // Extracting the news ID from the request parameters
    const { id } = req.params;

    try {
        // Validating the ID format
        if (!mongoose.Types.ObjectId.isValid(id)) {
            // If the ID format is invalid, send a 400 response
            return res.status(400).json({ error: 'Invalid news ID format' });
        }

        // Fetching the news by ID from the database
        const news = await News.findByIdAndDelete(id);

        // If the news is not found, send a 404 response
        if (!news) {
            return res.status(404).json({ error: 'News not found' });
        }

        // If the news is found and deleted, send a 200 response with a success message
        return res.status(200).json({ message: 'News deleted successfully' });
    } catch (error) {
        // If an error occurs, send a 500 response
        return res.status(500).json({ error: error.message });
    }
};



// Exporting the controller functions
// This allows other files to import these functions and use them in their routes
module.exports = {
    // GET controllers
    getNews,
    getAllNews,

    // POST controllers
    createNews,

    // PATCH controllers
    updateNews,

    // DELETE controllers
    deleteNews,
};