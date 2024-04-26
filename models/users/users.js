const { Schema, model } = require("mongoose");

const usersSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
        },
    
        password: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
         token: {
            type: String,
            required: false,
        },
    },
    { versionKey: false, timestamps: true }
);

module.exports = model('quizusers', usersSchema);
