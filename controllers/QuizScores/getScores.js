const quizResults = require('../../models/Quizs/quizResults');


const getScores = async (req, res) => {
    try {
const getAllScores =  await  quizResults.find().sort({ score: 'desc' }) 
return res.status(200).json({
                status: "Score found",
                code: 200,
                data: getAllScores
            });

         } catch (err) {
        console.error(err)
        return res.json({
            error: err
        })
    }

}

module.exports = getScores;
