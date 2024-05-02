const Joi = require('joi')
  
 
    const getUseJoiSchema = Joi.object().keys({ 
      
        userOrEmail: Joi.string() 
                  .min(3) 
                  .max(30) 
        .required(), 
      
        password: Joi.string() 
               .min(6) 
               .max(20) 
               .required(),  
                 
        
    }).options({ abortEarly: false }); 
 

module.exports = {
  getUseJoiSchema,
}
