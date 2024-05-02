const  Quizusers  = require('../../models/users/users');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const {getUseJoiSchema} = require('../../validation/getUser')

const getUser = async (req, res) => {
        const test = await getUseJoiSchema.validateAsync(req.body);
console.log('test', test)


    try {
        // console.log(test)


        const { userOrEmail, password } = req.body;
        console.log('userOrEmail'.userOrEmail)
        console.log('password'. password)

        const validUser = await  Quizusers.findOne({
  $or: [
    { 'username': userOrEmail },
    { 'email': userOrEmail }
  ]
}
                );
        console.log('validUser', validUser)

        if (!validUser ) {
            return res.json({
            status: "Not Found",
            code: 404,
            data: {
                message: "User not found. Please check your email or user name."
            }
        });
        };
        const validatePW = await bcrypt.compare(password, validUser.password)
            
           console.log('validatePW', validatePW)
        if (!validatePW) {
             return res.json({
            status: "Unauthorized",
            code: 401,
            data: {
                message: "Unauthorized user. Incorrect password."
            }
        });
        };
        const token = jwt.sign({ userOrEmail }, process.env.JWT_SECRET, {
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
        message: "Login Successful, Enjoy the Qiezes"
    });
    } catch (err) {
        console.log('err', err)
       return res.json({
        status: "Error",
        data: err,
        
    });
    }
};

module.exports = getUser;