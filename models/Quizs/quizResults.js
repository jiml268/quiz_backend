const { Schema, model } = require("mongoose");

const quizResultsSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
        },
     Category: {
            type: String,
            required: true,
        },
      numOfQuestions: {
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

const QuizResults = model(quizResultsSchema);