const express = require('express');
const router = express.Router();
const {setScores, getScores } = require('../controllers/QuizScores/')


router.route("/setScores").post(setScores);
router.route("/getScores").get(getScores);

module.exports = router;