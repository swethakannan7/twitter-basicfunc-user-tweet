const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: { 
        type: String, 
        required: true, 
        unique: true, 
    },
    password: { type: String, required: true },
    followers: {type: Number, default: 0}

});

module.exports = mongoose.model('User', userSchema);