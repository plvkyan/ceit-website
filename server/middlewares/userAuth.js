


// Import necessary modules and models
// Import jsonwebtoken module
// This module is used to create and verify JSON Web Tokens (JWT)
const jwt = require('jsonwebtoken');



// Middleware function to authenticate user
const userAuth = (req, res, next) => {
    // Get the token from the request cookies
    // The token is expected to be in the cookies of the request
    // The req.cookies object contains all the cookies sent by the client
    const { token } = req.cookies;

    console.log('Token:', token); // Log the token for debugging purposes

    // If no token is provided, send a 401 response
    if (!token) {
        return res.status(401).json({ success: false, error: 'Not authorized, please log in again' });
    }

    console.log('Token exists, proceeding to verify...'); // Log that the token exists

    try {
        // Verify the token using the secret key
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

        if (tokenDecode.id) {
            // If the token is valid, attach the user ID to the request object
            // The decoded token contains the user ID
            // The user ID is then attached to the request object for further use
            // This allows the next middleware or route handler to access the user ID
            if (!req.body) req.body = {};
            req.body.userId = tokenDecode.id;
        } else {
            // If the token is invalid, send a 401 response
            return res.status(401).json({ success: false, error: 'Not authorized, please log in again' });
        }

        console.log('Token verified successfully, user ID:', tokenDecode.id); // Log successful verification

        // Next middleware function
        next();
    } catch (error) {
        // If an error occurs, send a 500 response
        // This could be due to a database error or an invalid token format
        // Sending a response with a 500 status code and an error message
        return res.status(500).json({ success: false, error: error.message });
    }
};



// Export the userAuth middleware
module.exports = userAuth; 