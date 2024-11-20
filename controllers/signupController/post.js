const path = require('path');
const User = require('../../models/User');
const bcrypt = require('bcrypt');

module.exports = async (req, res) => {

  
    const { username, email, password } = req.body;

   

    try {
        
        const user = new User({
            username,
            email,
            password: encryptPassword(password)
        });
        
        await user.save();

        const token = user.generateAuthToken();

        // Set the cookie  with the token

        res.cookie("x-auth-token", token, {
            httpOnly: true
        });

        // Redirect to the desired page

        res.redirect('/index.html');
    } catch (err) {
        console.log(err);
        res.status(400).send(err.message);
    }

    return user;
}


function encryptPassword(password) {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
}

