


// Import the mongoose module
const mongoose = require('mongoose');

// Schema constructor from mongoose
const Schema = mongoose.Schema;



const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user',
    },
    verifyOtp: {
        type: String,
        default: '',
    },
    verifyOtpExpiration: {
        type: Number,
        default: 0,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    resetOtp: {
        type: String,
        default: '',
    },
    resetOtpExpiration: {
        type: Number,
        default: 0,
    },
}, { timestamps: true });



// Export the User model
module.exports = mongoose.model('User', userSchema);