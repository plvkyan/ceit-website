


// Import necessary modules and models
// Import nodemailer module
// This module is used to send emails
// It provides a simple way to send emails using SMTP
const nodemailer = require('nodemailer');



const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
        user: process.env.SMTP_USER, // generated ethereal user
        pass: process.env.SMTP_PASS, // generated ethereal password
    },
});



// Export the sendEmail function
module.exports = {
    transporter,
};