const express = require('express');
const router = express.Router();
const {getCategories, getCatCount, getQuestions } = require('../controllers/quiz/quizControllers')

router.get('/', (req, res) => { res.send({ data: "hello" }); });
router.route("/getCategories").get(getCategories);
router.route("/getCatCount").post(getCatCount);
router.route("/getQuestions").post(getQuestions);

module.exports = router;