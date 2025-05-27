


// Import necessary modules and models
// Import the bcrypt module for password hashing
const bcrypt = require('bcrypt');
// Import the jsonwebtoken module for token generation
const jwt = require('jsonwebtoken');
// Import the User model
const User = require('../models/userModel');
const { transporter } = require('../config/nodemailer');



const register = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    // Validate the request body
    if (!firstName || !lastName || !email || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });

        // If the user already exists, send a 400 response
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

        // Hash the password
        // The bcrypt.genSalt() function generates a salt for hashing
        // The salt rounds determine the complexity of the hashing process
        // A higher number of rounds increases security but also increases the time it takes to hash the password
        const salt = await bcrypt.genSalt(10);

        // The bcrypt.hash() function takes the password and the salt as arguments
        // The bcrypt.hash() function hashes the password using the generated salt
        // It returns a promise that resolves to the hashed password
        // The hashed password is then stored in the database
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user
        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
        });

        // Save the new user to the database
        await newUser.save();

        // Generate a JWT token
        // The jwt.sign() function takes the payload (user ID) and a secret key as arguments
        // The secret key is used to sign the token
        // The token is then sent to the client
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
            expiresIn: '7d',
        });

        // Set the token in a cookie
        // The res.cookie() function sets a cookie in the response
        // The cookie contains the JWT token
        // The cookie is set to expire in 7 days
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });

        // Send a welcome email
        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: email,
            subject: "Welcome to Pamantasan ng Lungsod ng Valenzuela's CEIT Website!",
            text: `Hello ${firstName},\n\nThank you for registering with us!\n\nBest regards,\nThe Team`,
        }

        await transporter.sendMail(mailOptions);

        return res.status(200).json({ success: true });

    } catch (error) {
        // Handle any errors that occur during the registration process
        return res.status(500).json({ error: error.message });
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;

    // Validate the request body
    if (!email || !password) {
        return res.status(400).json({ success: false, error: 'All fields are required' });
    }

    try {
        // Check if the user exists
        const user = await User.findOne({ email });

        // If the user does not exist, send a 400 response
        if (!user) {
            return res.status(400).json({ success: false, error: 'Invalid credentials' });
        }

        // Compare the password with the hashed password in the database
        const isMatch = await bcrypt.compare(password, user.password);

        // If the passwords do not match, send a 400 response
        if (!isMatch) {
            return res.status(400).json({ success: false, error: 'Invalid credentials' });
        }

        // Generate a JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: '7d',
        });

        // Set the token in a cookie
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });

        // Send a response with the user and token
        return res.status(200).json({ success: true });

    } catch (error) {
        // Handle any errors that occur during the login process
        return res.status(500).json({ error: error.message });
    }
}

const logout = async (req, res) => {
    try {
        // Clear the token cookie
        res.clearCookie('token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
        });

        // Send a response indicating successful logout
        return res.status(200).json({ success: true, message: 'Logged out successfully' });

    } catch (error) {
        // Handle any errors that occur during the logout process
        return res.status(500).json({ success: false, error: error.message });
    }
}

// Function to send a verification OTP to the user's email
const sendVerifyOtp = async (req, res) => {
    try {

        const { userId } = req.body;

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        if (user.isVerified) {
            return res.status(400).json({ success: false, error: 'User already verified' });
        }

        const otp = String(Math.floor(100000 + Math.random() * 900000));

        user.verifyOtp = otp;
        user.verifyOtpExpiration = Date.now() + 30 * 60 * 1000; // OTP valid for 30 minutes

        await user.save();

        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: user.email,
            subject: 'Email Verification OTP',
            text: `Your OTP for email verification is ${otp}. It is valid for 30 minutes.`,
        };

        // Send the OTP email
        await transporter.sendMail(mailOptions);

        // Send a response indicating successful OTP sending
        return res.status(200).json({ success: true, message: 'OTP sent successfully' });

    } catch (error) {
        // Handle any errors that occur during the OTP sending process
        return res.status(500).json({ error: error.message });
    }
}

// Function to verify the OTP
const verifyEmail = async (req, res) => {
    const { userId, otp } = req.body;

    if (!userId || !otp) {
        return res.status(400).json({ success: false, error: 'User ID and OTP are required' });
    }

    try {
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ success: false, error: 'User not found' });
        }

        if (user.isVerified) {
            return res.status(400).json({ success: false, error: 'User already verified' });
        }

        if (user.verifyOtp === '' || user.verifyOtp !== otp) {
            return res.status(400).json({ success: false, error: 'Invalid OTP' });
        }

        if (user.verifyOtpExpiration < Date.now()) {
            return res.status(400).json({ success: false, error: 'OTP expired' });
        }

        // If the OTP is valid, update the user's verification status
        user.isVerified = true;

        // Clear the OTP and expiration fields
        user.verifyOtp = '';
        user.verifyOtpExpiration = 0;

        // Save the updated user
        await user.save();

        // Send a response indicating successful verification
        return res.status(200).json({ success: true, message: 'Email verified successfully' });

    } catch (error) {
        // Handle any errors that occur during the OTP verification process
        return res.status(500).json({ success: false, error: error.message });
    }
}

// Function to verify the reset password OTP
// This function checks if the entered OTP for resetting the password is valid
// It verifies the OTP against the stored OTP in the user's record
// and checks if the OTP has not expired
// If the OTP is valid, it allows the user to reset their password
const verifyResetOtp = async (req, res) => {
    const { email, otp } = req.body;

    if (!email || !otp) {
        return res.status(400).json({ success: false, error: 'Email and OTP are required.' });
    }

    try {
        // Check if the user exists
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ success: false, error: 'User not found.' });
        }

        if (user.resetOtp === '' || user.resetOtp !== otp) {
            return res.status(400).json({ success: false, error: 'Invalid 6-digit code.' });
        }

        if (user.resetOtpExpiration < Date.now()) {
            return res.status(400).json({ success: false, error: '6-digit code expired.' });
        }

        // If the OTP is valid, send a response indicating success
        return res.status(200).json({ success: true, message: 'OTP verified successfully.' });
    } catch (error) {
        // Handle any errors that occur during the OTP verification process
        return res.status(500).json({ success: false, error: error.message });
    }
}

// Function to check if the user is authenticated
const isAuthenticated = async (req, res) => {
    try {
        return res.status(200).json({ success: true });
    } catch (error) {
        // Handle any errors that occur during the authentication check
        return res.status(500).json({ success: false, error: error.message });
    }
}

// Function to send a password reset OTP to the user's email
const sendResetOtp = async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ success: false, error: 'Email is required' });
    }

    try {
        // Check if the user exists
        const user = await User.findOne({ email });

        // If the user does not exist, send a 404 response
        if (!user) {
            return res.status(404).json({ success: false, error: 'User not found' });
        }

        // Generate a random OTP
        const otp = String(Math.floor(100000 + Math.random() * 900000));

        // Set the OTP and expiration time
        user.resetOtp = otp;
        user.resetOtpExpiration = Date.now() + 30 * 60 * 1000; // OTP valid for 30 minutes

        // Save the user with the new OTP
        await user.save();

        // Send the OTP email
        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: user.email,
            subject: 'Password Reset OTP',
            text: `Your OTP for password reset is ${otp}. It is valid for 30 minutes.`,
        };

        // Send the OTP email using the transporter
        await transporter.sendMail(mailOptions);

        // Send a response indicating successful OTP sending
        return res.status(200).json({ success: true, message: 'OTP sent successfully' });
        
    } catch (error) {
        // Handle any errors that occur during the OTP sending process
        return res.status(500).json({ success: false, error: error.message });
    }
}

// Function for resetting a user's password
const resetPassword = async (req, res) => {
    const { email, otp, newPassword } = req.body; 

    if (!email || !otp || !newPassword) {
        return res.status(400).json({ success: false, error: 'All fields are required' });
    }

    try {
        // Check if the user exists
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ success: false, error: 'User not found' });
        }

        if (user.resetOtp === '' || user.resetOtp !== otp) {
            return res.status(400).json({ success: false, error: 'Invalid OTP' });
        }

        if (user.resetOtpExpiration < Date.now()) {
            return res.status(400).json({ success: false, error: 'OTP expired' });
        }

        // Hash the password
        // The bcrypt.genSalt() function generates a salt for hashing
        // The salt rounds determine the complexity of the hashing process
        // A higher number of rounds increases security but also increases the time it takes to hash the password
        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(newPassword, salt);

        // Update the user's password
        user.password = hashedPassword;

        // Clear the OTP and expiration fields
        user.resetOtp = '';
        user.resetOtpExpiration = 0;

        // Save the updated user
        await user.save();

        // Send a response indicating successful password reset
        return res.status(200).json({ success: true, message: 'Password reset successfully' });

    } catch (error) {
        // Handle any errors that occur during the password reset process
        return res.status(500).json({ success: false, error: error.message });
    }
}



// Export the authController functions
module.exports = {
    register,
    login,
    logout,
    sendVerifyOtp,
    verifyEmail,
    verifyResetOtp,
    isAuthenticated,
    resetPassword,
    sendResetOtp,
};