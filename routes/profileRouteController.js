const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');

// Protected route example
router.get('/', authMiddleware, async (req, res) => {
    try {
        // Access user info from `req.user` set by the middleware
        return res.status(200).json({ success: true, user: req.user });
    } catch (err) {
        return res.status(500).json({ success: false, error: "Server error" });
    }
});

module.exports = router;
