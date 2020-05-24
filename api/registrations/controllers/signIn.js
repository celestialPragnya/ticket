'use strict';
module.exports = {
   //SignIn Code
  async find(ctx){
    try{
      const email = ctx.request.body.email;
      const password = ctx.request.body.password;
      //console.log("value",ctx)
      let  entity = await (strapi.query('registrations').find({ email: email , password : password}));
      if(entity.length > 0){
        ctx.response.badRequest('Login Successful');
      }else{
        ctx.response.badRequest('Please Check email And Password');
      }
    }catch{
      ctx.response.badRequest('Please Check email And Password');
    }
  }
  };