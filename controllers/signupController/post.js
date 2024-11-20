const path = require('path');
const User = require('../../models/User');
const bcrypt = require('bcrypt');

// Adjust this to your User model's actual location

module.exports = async (req, res, next) => {
    const { username, email, password } = req.body;


    try {
        const user = new User({
            username,
            email,
            password: encryptPassword(password),
        });

        await user.save();

        const token = user.generateAuthToken();

        // Set the cookie with the token
        //res.cookie('authToken', token, { httpOnly: true });

        // Redirect to the desired page
        return res.status(200).json({success: true});
    } catch (err) {
        return res.status(400).json({success: false, error: err.message});
    }
};
    


function encryptPassword(password) {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
}

