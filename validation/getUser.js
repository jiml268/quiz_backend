const Joi = require('joi') 
  
 
    const getUseJoiSchema = Joi.object({ 
      
        userOrPassword: Joi.string() 
                  .min(5)  
                  .required(),  
        
        password: Joi.string() 
               .min(6) 
               .max(20) 
               .required(),  
                 
        
    }).options({ abortEarly: false }); 
 

module.exports = {
  getUseJoiSchema,
}