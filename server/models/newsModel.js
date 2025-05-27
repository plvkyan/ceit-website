


// Import the mongoose module
const mongoose = require('mongoose');

// Schema constructor from mongoose
const Schema = mongoose.Schema;



// Define the News schema
// This schema defines the structure of the News model
// It specifies the fields and their types, as well as any validation rules
// The schema is used to create a Mongoose model, which provides an interface to interact with the MongoDB database
const newsSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true });



// Export the News model
// This allows other files to import this model and use it to interact with the MongoDB database
module.exports = mongoose.model('News', newsSchema);