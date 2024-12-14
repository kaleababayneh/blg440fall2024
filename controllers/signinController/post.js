const path = require('path');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const JWTsecret = process.env.JWT_SECRET || 'yourFallbackSecretKey';


module.exports = async (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ success: false, error: "Email and password are required" });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ success: false, error: "Invalid email or password" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        
        if (isMatch) {
            const token = jwt.sign({ id: user._id }, JWTsecret, { expiresIn: '1h' });
            return res.status(200).json({ success: true, token });
        } else {
            return res.status(401).json({ success: false, error: "Invalid email or password" });
        }


    } catch (error) {
        console.log("Error in signin controller", error);

        return res.status(400).json({success: false, error: error.message});
    }
};

