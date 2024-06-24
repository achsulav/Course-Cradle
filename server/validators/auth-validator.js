const {z} = require("zod");
const loginSchema = z.object({

   email: z
   .string({ required_error: "E-mail is required"})
   .trim()
   .min(3,{message : "E-mail must be three character"})
   .max(255,{message : "E-mail must not be more than 255 character" }),
   password : z
   .string({ required_error: "password is required"})
   .trim()
   .min(7,{message : "password must be eight character"})
   .max(1024,{message : "password must not be more than 255 character" }),




});
const signupSchema =  loginSchema.extend({
    username : z
   .string({ required_error: "Name is required"})
   .trim()
   .min(3,{message : "Name must be three character"})
   .max(255,{message : "Name must not be more than 255 character" }),
   
   phone : z
   .string({ required_error: "Phone is required"})
   .trim()
   .min(10,{message : "Phone must be 10 character"})
   .max(20,{message : "Phone must not be more than 20 character" }),
   
});
   module.exports = {signupSchema, loginSchema };



/*

const validate = (schema) => async (req,res,next) => {
   try{
      const parseBody = await schema.parseAsync(req.body);
      req.body = parseBody;
      next();
   }
   catch(err) {
      const message = err.error[0].message;
      console.log(message);
      res.status(400).json({ msg : message });
   
   }
   
};
module.exports = validate;



const express =
*/
