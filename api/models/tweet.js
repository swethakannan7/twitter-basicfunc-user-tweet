const mongoose = require('mongoose');

const tweetSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    tweet: { type: String },
    likes: { type: Number, default: 0 },
    retweets: { type: Number, default: 0 }

});

module.exports = mongoose.model('Tweet', tweetSchema);