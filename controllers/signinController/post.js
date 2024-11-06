const path = require('path');
const User = require('../../models/User');

module.exports = (req, res) => {
    
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send('Email and password are required');
    }
    User.findOne({ email: email }, (err, user) => {
        if (err) {
            return res.status(500).send('Error on the server.');
        }
        if (!user) {
            return res.status(404).send('No user found.');
        }

        user.comparePassword(password, (err, isMatch) => {
            if (err) {
                return res.status(500).send('Error on the server.');
            }
            if (!isMatch) {
                return res.status(401).send('Password is incorrect.');
            }

            // Generate token or start session here
            res.status(200).send('Login successful');
        });
    });
}