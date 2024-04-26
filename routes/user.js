const express = require('express');
const router = express.Router();
const {getUser, createUser } = require('../controllers/user/')


router.route("/getUser").post(getUser);
router.route("/createUser").post(createUser);

module.exports = router;