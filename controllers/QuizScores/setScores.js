const quizResults = require('../../models/Quizs/quizResults');


const setScores = async (req, res) => {
    try {
        const { username, category, numOfQuestions, numCorrect, score } = req.body
        const postNewScore = new quizResults({
            username,
            category,
      numOfQuestions,
      numCorrect,
      score,
        });
        await postNewScore.save();
 return res.status(201).json({
                status: "Score Created",
                code: 201,
                
            });

         } catch (err) {
        console.error(err)
        return res.json({
            error: err
        })
    }

}

module.exports = setScores;
