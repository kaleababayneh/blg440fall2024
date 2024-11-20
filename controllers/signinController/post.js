const path = require('path');
const User = require('../../models/User');

module.exports = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send('Email and password are required');
    }
    
    try {
        const user = await User.findOne({ email });
        
        if (!user) {
            return res.status(401).send('Invalid email or password');
        }

        const isValid = await user.comparePassword(password);
        console.log(isValid);
        if (!isValid) {
            return res.status(401).send('Invalid email or password');
        }

        req.session.userId = user._id;
        res.redirect('/');
    } catch (error) {
        console.error('Signin error:', error);
        res.status(500).send('Internal server error');
    }
};

