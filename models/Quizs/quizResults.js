const { Schema, model } = require("mongoose");

const quizResultsSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
        },
     category: {
            type: String,
            required: true,
        },
      numOfQuestions: {
            type: Number,
            required: true,
        },
      numCorrect: {
            type: Number,
            required: true,
        },
        score: {
            type: Number,
            required: true,
        },
    },
    { versionKey: false, timestamps: true }
);

module.exports = model('quizResults', quizResultsSchema);
