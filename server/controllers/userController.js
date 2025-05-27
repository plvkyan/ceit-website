


// Import necessary modules and models
// Import the User model
const User = require('../models/userModel');



// GET all users
// This function retrieves all users from the database
const getUsers = async (req, res) => {
    try {
        // Fetching all users from the database
        const users = await User.find({}).select('-password -__v').sort({ createdAt: -1 });
        
        // If no users are found, send a 404 response
        if (!users) {
            return res.status(404).json({ success: false, error: 'No users found' });
        }

        // If users are found, send a 200 response with the user data
        return res.status(200).json({ 
            success: true,
            users: users.map(user => ({
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                role: user.role,
                isVerified: user.isVerified,
            })) 
        });

    } catch (error) {
        // If an error occurs, send a 500 response
        return res.status(500).json({ success: false, error: error.message });
    }
}

// GET a single user
// This function retrieves a single user from the database
const getUser = async (req, res) => {
    const { userId } = req.body;

    try {
        // Fetching the user by ID from the database
        const user = await User.findById(userId).select('-password -__v');
        // If the user is not found, send a 404 response
        if (!user) {
            return res.status(404).json({ success: false, error: 'User not found' });
        }

        // If the user is found, send a 200 response with the user data
        return res.status(200).json({ 
            success: true,
            user: {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                role: user.role,
                isVerified: user.isVerified,
            } 
        });

    } catch (error) {
        // If an error occurs, send a 500 response
        return res.status(500).json({ success: false, error: error.message });
    }
}

// GET logged-in user
// This function retrieves the logged-in user's data
const getUserData = async (req, res) => {
    try {
        console.log("Received request to get user data");
        
        const {userId} = req.body;

        console.log("Proceeding to get user data for userId:", userId);

        const user = await User.findById(userId).select('-password -__v');

        console.log(userId);
        console.log(user);

        // If the user is not found, send a 404 response
        if (!user) {
            return res.status(404).json({ success: false, error: 'User not found' });
        }

        console.log(user);

        // If the user is found, send a 200 response with the user data
        return res.status(200).json({ 
            success: true,
            userData: {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                role: user.role,
                isVerified: user.isVerified,
            } 
        });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
}



module.exports = {
    getUser,
    getUserData,
    getUsers,
}