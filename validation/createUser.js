const Joi = require('joi')
  
 
    const createUseJoiSchema = Joi.object().keys({ 
      
        username: Joi.string() 
                  .min(4) 
                  .max(20) 
                  .required(), 
                    
        email: Joi.string() 
               .email() 
               .min(5) 
               .max(50) 
            .required(),  
        
        password: Joi.string() 
               .min(8) 
               .max(20) 
               .required(),  
                 
        
    }).options({ abortEarly: false }); 
 

module.exports = {
  createUseJoiSchema,
}


