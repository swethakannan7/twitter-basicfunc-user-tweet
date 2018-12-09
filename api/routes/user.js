const express = require("express");
const router = express.Router();

const UserController = require('../controllers/user');
const checkAuth = require('../middleware/check-auth');


router.post("/signup", UserController.user_signup);

router.post("/login", UserController.user_login);

router.get("/", UserController.get_all_users);

router.get("/:userId", UserController.get_user_details);

router.patch("/:userId/", UserController.follow_user);

router.patch("/:userId/", UserController.unfollow_user);

module.exports = router;
