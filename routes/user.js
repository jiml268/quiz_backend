const express = require('express');
const router = express.Router();
const {getUser, createUser } = require('../controllers/user/')


router.route("/getUser").post(getUser);
router.route("/createUser").post(createUser);
//router.route("/logoutUser").post(logoutUser);

module.exports = router;