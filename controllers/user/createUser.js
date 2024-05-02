const  Quizusers  = require('../../models/users/users');
const jwt = require("jsonwebtoken");
const { createUseJoiSchema } = require('../../validation/createUser')
const bcrypt = require('bcrypt');


const createUser = async (req, res) => {
    const salt = 10
try {
const test = await createUseJoiSchema.validateAsync(req.body);
 } catch (err) {
       return res.status(422).json({
                status: "Error in sent information",
                code: 422,
                data: {
                    Error: err
                }
            });
    }



    try {
console.log('createUser req.body', req.body)
        const { username, email, password } = req.body
        const hashedPassword = await bcrypt.hash(password, salt)        
console.log('hashedPassword', hashedPassword)
        const emailExist = await Quizusers.countDocuments({ 'email': email })
        const userExist = await Quizusers.countDocuments({ 'username': username })
        if (emailExist + userExist > 0) {
            const message = emailExist + userExist === 2 ? "Email & User name already exist" : emailExist === 1 ? "Email already exist" : "User already exist"
            return res.status(200).json({
                status: "Allready has account",
                code: 200,
                data: {
                    message: message
                }
            });
        }
const token = jwt.sign({ username }, process.env.JWT_SECRET, {
            expiresIn: '1h',
});
        const newUser = {
            email: email,
            username: username,
            password: hashedPassword,
            token: token
        } 
        const writeNewUser = await Quizusers.create(newUser)
        console.log(writeNewUser)
       return res.status(201).json({
                status: "Account Created",
           code: 201,
                data: { email: email,username: username}
                
            });


         } catch (err) {
        console.error(err)
        return res.json({
            error: err
        })
    }

}

module.exports = createUser;