'use strict';
module.exports = {
   //SignIn Code
  async find(ctx){
    try{
      const email = ctx.request.body.email;
      let  entity = await (strapi.query('ticket').find({ email: email}));
      if(entity.length > 0){
        return sanitizeEntity(entity, { model: strapi.models.ticket });
      }else{
        ctx.response.badRequest('Please Check email');
      }
    }catch(err){
      ctx.response.badRequest('Please Check email');
    }
  }
  };