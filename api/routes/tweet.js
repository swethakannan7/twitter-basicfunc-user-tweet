const express = require("express");
const router = express.Router();

//const checkAuth = require('../middleware/check-auth');
const tweetController = require('../controllers/tweet');


router.get("/", tweetController.get_all_tweets);


//router.get("/:tweetId", tweetController.products_get_product);

router.post("/", tweetController.create_tweet);

router.get("/:tweetId", tweetController.get_tweet);

router.delete("/:tweetId", tweetController.delete_tweet);


// router.patch("/:tweetId", tweetController.like_tweet);

// router.patch("/:tweetId", tweetController.unlike_tweet);

// router.get("/:tweetId", tweetController.retweet_tweet);



// router.delete("/:tweetId", checkAuth, ProductsController.products_delete);

module.exports = router;