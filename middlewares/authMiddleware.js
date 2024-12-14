const jwt = require('jsonwebtoken');
const User = require('../models/User');
const dotenv = require('dotenv');
dotenv.config();

module.exports = (req, res, next) => {
    const token = req.header('Authorization'); // Token sent in the "Authorization" header

    if (!token) {
        return res.status(401).json({ success: false, error: "Access denied. No token provided." });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach user info to the request object
        next(); // Continue to the next middleware or route handler
    } catch (err) {
        return res.status(400).json({ success: false, error: "Invalid token." });
    }
};
