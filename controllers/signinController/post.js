const path = require('path');
const User = require('../../models/User');
const bcrypt = require('bcrypt');

module.exports = async (req, res) => {
    const { email, password } = req.body;
    const encryptedPassword = await bcrypt.hash(password, 10);

    if (!email || !password) {
        return res.status(400).json({success: false, error: "Email and password are required"});
    }
    
    try {
        const user = await User.findOne({ email });

        const isMatch = user.password == encryptedPassword;
        console.log(isMatch);
        if (isMatch) {
            // Passwords match
            return res.status(200).json({success: true});
        }
        else {
            return res.status(401).json({success: false, error: "Invalid email or password"});
        }

       

    } catch (error) {
        console.log("Error in signin controller");
        return res.status(400).json({success: false, error: error.message});
    }
};

