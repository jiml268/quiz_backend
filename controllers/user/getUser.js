const  Quizusers  = require('../../models/users/users');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

const getUser = async (req, res) => {
    try {
        const { userOrPassword, password } = req.body;
        const validUser = await  Quizusers.findOne({
  $or: [
    { 'username': userOrPassword },
    { 'email': userOrPassword }
  ]
}
                );
                // const validUser = await  Quizusers.findOne({ 'username': userOrPassword } );
        console.log('validUser', validUser)

        if (validUser.length === 0) {
            return res.status(404).json({
            status: "Not Found",
            code: 204,
            data: {
                message: "User not found. Please check your email or user name."
            }
        });
        };
        // const validatePW = await validUser.checkPassword(password);
        console.log('password', password)
                console.log('validUser.password', validUser.password)

        const validatePW = await bcrypt.compare(password, validUser.password)
            
           console.log('validatePW', validatePW)
        if (!validatePW) {
             return res.status(401).json({
            status: "Unauthorized",
            code: 401,
            data: {
                message: "Unauthorized user. Incorrect password."
            }
        });
        };
        const token = jwt.sign({ userOrPassword }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });
        validUser.token = token;
       await validUser.save();
        req.userData = {
            token,
            username: validUser.username,
            
        }
       return res.status(200).json({
        status: "Success",
        code: 200,
        data: req.userData,
        message: "Login Successful, have fun slimMom!"
    });
    } catch (err) {
        console.error(err)
        throw new Error("Error logging in" + err.message)
    }
};

module.exports = getUser;