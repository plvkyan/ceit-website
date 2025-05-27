require('dotenv').config();


// Importing the required modules
// Importing the express module
const express = require('express');
// Import mongoose
const mongoose = require('mongoose');
// Import CORS
const cors = require('cors');
// Import cookie-parser
const cookieParser = require('cookie-parser');

// Importing the routes
// Importing the auth routes
const authRoutes = require('./routes/authRoutes');
// Importing the news routes
const newsRoutes = require('./routes/newsRoutes');
// Importing the event routes
const eventRoutes = require('./routes/eventRoutes');
// Importing the user routes
const userRoutes = require('./routes/userRoutes');



// Our Express app
const app = express();

const allowedOrigins = ['http://localhost:5173', 'https://your-production-url.com'];

// Middlewares

// Middleware to parse cookies
// This middleware function parses incoming requests with cookies
app.use(cookieParser());

// Middleware to enable CORS
// This middleware function enables Cross-Origin Resource Sharing (CORS)
// It allows requests from different origins to access the server's resources
app.use(cors({origin: allowedOrigins, credentials: true}));

// Middleware to parse JSON bodies
// This middleware function parses incoming requests with JSON payloads
// It takes a request object (req), a response object (res), and a next function
// The req parameter contains information about the HTTP request
// The res parameter contains information about the HTTP response
// The next parameter is a function that, when called, passes control to the next middleware in the stack
// The app.use() method mounts the specified middleware function at the specified path
// In this case, the middleware is mounted at the root path ('/'), meaning it will
// be applied to all incoming requests
app.use(express.json());

// Middleware to log requests
// This middleware function logs the request method and URL to the console
// It takes three parameters: req (request), res (response), and next (function to call the next middleware)
// The req parameter contains information about the HTTP request
// The res parameter contains information about the HTTP response
// The next parameter is a function that, when called, passes control to the next middleware in the stack
// The app.use() method mounts the specified middleware function at the specified path
// In this case, the middleware is mounted at the root path ('/'), meaning it will
app.use((req, res, next) => {
    // Log the request method and URL
    console.log(`${req.method} ${req.url}`);
    // Call the next middleware in the stack
    next();
});



// Routes
// Mounting the user routes at the '/users' path
app.use('/api/users', userRoutes);
// Mounting the news routes at the '/news' path
app.use('/api/news', newsRoutes);
// Mounting the auth routes at the '/auth' path
app.use('/api/auth', authRoutes)
// Mounting the event routes at the '/events' path
// app.use('/api/events', eventRoutes);



// Database connection
// Connect to MongoDB using Mongoose
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // Log a message when the database connection is successful
        console.log('Connected to MongoDB.');
        // Listen for requests on port 4000
        // Process.env.PORT is used to get the port from the environment variables
        const PORT = process.env.PORT || 4000;
        // Start the server and listen for incoming requests
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}.`);
        });
    })
    .catch((err) => {
        // Log an error message if the database connection fails
        console.error('Error connecting to MongoDB:', err);
    });
