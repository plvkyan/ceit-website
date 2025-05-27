


// Import necessary modules and models
// Import the express module
const express = require('express');
// Import the Router class from express
const router = express.Router();
// Import the authController controllers
const {
    register,
    login,
    logout,
    sendVerifyOtp,
    verifyEmail,
    verifyResetOtp,
    isAuthenticated,
    resetPassword,
    sendResetOtp,
} = require('../controllers/authController');
// Import the userAuth middleware
const userAuth = require('../middlewares/userAuth');



router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);

// Send verification OTP route
router.post('/send-verify-otp', userAuth, sendVerifyOtp);

// Verify email route
router.post('/verify-email', userAuth, verifyEmail);

// Check if the user is authenticated
router.get('/is-authenticated', userAuth, isAuthenticated);

router.post('/send-reset-otp', sendResetOtp);

router.post('/reset-password', resetPassword);

// Verify reset OTP route
router.post('/verify-reset-otp', verifyResetOtp);


// Export the router module
module.exports = router;