const moongoose = require('mongoose');

const UserSchema = new moongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});


UserSchema.SignUpUser = async function(username, email, password) {
    const user = new User({
        username,
        email,
        password
    });

    await user.save();
    return user;
}


const User = moongoose.model('User', UserSchema);

module.exports = User;