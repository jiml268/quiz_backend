const express = require('express');
const router = express.Router();
const {getCategories, getCatCount, getQuestions } = require('../controllers/quiz/quizControllers')

router.get('/', (req, res) => { res.send({ data: "hello" }); });
router.route("/getCategories").get(getCategories);
router.route("/getCatCount").get(getCatCount);
router.route("/getQuestions").get(getQuestions);

module.exports = router;