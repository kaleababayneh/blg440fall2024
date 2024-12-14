const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../models/User'); // Adjust this path to your User model

const JWTsecret = process.env.JWT_SECRET || 'yourFallbackSecretKey';

module.exports = async (req, res, next) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ success: false, error: "All fields are required" });
    }

    try {
        // Check if the email is already registered
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, error: "Email is already in use" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const user = new User({
            username,
            email,
            password: hashedPassword
        });

        await user.save();

        // Generate JWT token
        console.log("User:", user);
        const token = jwt.sign({ id: user._id, email: user.email }, JWTsecret, { expiresIn: '1h' });
        // If you use sessionStorage, replace with sessionStorage
        console.log("Token:", token);
        // Respond with success and token
        return res.status(201).json({ success: true, token });
    } catch (err) {
        console.error("Error during signup:", err);
        return res.status(500).json({ success: false, error: "Server error" });
    }
};
