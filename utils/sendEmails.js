const nodeMailer = require("nodemailer");

const { SMTPClient } = require('emailjs'); // Import the SMTPClient from emailjs for email functionality.




SMPT_HOST="smtp.mailersend.net"
SMPT_PORT="587"
SMPT_MAIL="MS_fIUAO3@trial-3yxj6ljromq4do2r.mlsender.net"
SMPT_APP_PASS="pg0r2LRCgwcB7W4b"


const sendEmail = async (options) => {
    try {
      const client = new SMTPClient({
        user: SMPT_MAIL,
        password: SMPT_APP_PASS,
        host: SMPT_HOST,
        port: SMPT_PORT,
        timeout: 10000,
        tls: true,
        debug: true,
        authentication: ['LOGIN'],
      });
  
      const messageToSend = {
        from: SMPT_MAIL,
        to: options.to,
        subject: options.subject,
        text: options.message,
      };
  
      await client.sendAsync(messageToSend);
      console.log("Email sent successfully using emailjs.");
    } catch (error) {
      console.error("Error sending email with emailjs:", error);
      throw new Error("Failed to send email.");
    }
  };
  
  module.exports = sendEmail;

// const sendEmail = async (options) => {
//     const transporter = nodeMailer.createTransport({
//         host: SMPT_HOST,
//         port: SMPT_PORT,
//         secure: false, // Use SSL
//         auth: {
//             user: SMPT_MAIL,
//             pass: SMPT_APP_PASS,
//         },
//         authMethod: 'LOGIN', // Specify the authentication method
//     });

//     console.log("Sending email:", transporter);

//     const mailOptions = {
//         from: SMPT_MAIL,
//         to: options.to,
//         subject: options.subject,
//         html: options.message,
//     };

//     console.log("Mail options:", mailOptions);

//     await transporter.sendMail(mailOptions);
// };


// import dotenv from 'dotenv'; // Load environment variables from the .env file.
// import express from 'express'; // Import the Express framework for server functionality.
// import cors from 'cors'; // Include CORS middleware to handle cross-origin requests.
// import { SMTPClient } from 'emailjs'; // Import the SMTPClient from emailjs for email functionality.


// dotenv.config();


// const app = express();
// const PORT = PORT || 3000; // Set the server port from environment variables or default to 3000.
// const corsOptions = {
//    origin: '*',  // Allows requests from all domains. Specify actual domain in production for security.
//    optionsSuccessStatus: 200 // For compatibility, set OPTIONS request success status to 200 OK.
// };


// // Use JSON parsing and CORS middleware with the specified options.
// app.use(express.json());
// app.use(cors(corsOptions));


// // Initialize emailjs SMTP client with configuration.
// const client = new SMTPClient({
//    user: process.env.SMTP_USER,
//    password: process.env.SMTP_PASS,
//    host: process.env.SMTP_HOST,
//    ssl: true
// });


// // Endpoint to send emails.
// app.post('/send-email', (req, res) => {
//    const { name, subject, email, message } = req.body; // Extract data from request body.


//    // Check for the presence of all required fields.
//    if (!name || !subject || !email || !message) {
//        return res.status(400).json({ status: 'error', message: 'Missing required fields' });
//    }


//    // Define the email message.
//    const messageToSend = {
//        from: process.env.SENDER_EMAIL,
//        to: `${name} <${email}>`,
//        "reply-to": process.env.REPLY_TO,
//        subject: subject,
//        text: message
//    };


//    // Send the email using a callback to handle the response.
//    client.send(messageToSend, (err) => {
//        if (err) {
//            console.error('Error sending email:', err);
//            return res.status(500).json({ status: 'error', message: 'Failed to send email, please try again.' });
//        } else {
//            return res.status(200).json({ status: 'success', message: 'Email sent successfully' });
//        }
//    });
// });
// module.exports = sendEmail;