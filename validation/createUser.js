
const Joi = require('joi')
  
 
    const createUseJoiSchema = Joi.object().keys({ 
      
        username: Joi.string() 
                  .min(3) 
                  .max(30) 
                  .required(), 
                    
        email: Joi.string() 
               .email() 
               .min(5) 
               .max(50) 
            .required(),  
        
        password: Joi.string() 
               .min(6) 
               .max(20) 
               .required(),  
                 
        
    }).options({ abortEarly: false }); 
 

module.exports = {
  createUseJoiSchema,
}


