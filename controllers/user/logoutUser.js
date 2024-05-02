const  Quizusers  = require('../../models/users/users');

const logoutUser = async (req, res) => {
    try {
        const { userOrPassword } = req.body;
        const validUser = await  Quizusers.findOneAndUpdate({
  $or: [
    { 'username': userOrPassword },
    { 'email': userOrPassword }
  ]
}, {token: ""},{
  new: true
});
               
        console.log('validUser', validUser)

        if (validUser.length > 0) {
            return res.status(200).json({
            status: "Logged out",
            code: 200,
            data: {
                message: "Account has been logged Out."
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
       return res.json({
        status: "Error",
        data: err,
        
    });
    }
};

module.exports = logoutUser;