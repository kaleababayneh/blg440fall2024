const jwt = require('jsonwebtoken');
const User = require('../models/User');
const dotenv = require('dotenv');
dotenv.config();


module.exports = async (req, res, next) => {

    const token = req.cookies['x-auth-token'];

    if (!token) {
        return res.status(401).send('Access denied. No token provided.');
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_PRIVATE_KEY);

        const user = await User.findById(decoded._id);

        if (!user) {
            return res.status(401).send('Invalid token');
        }

        req.user = user._doc;

        next();

    } catch (ex) {
        res.status(400).send('Invalid token.');
    }
}