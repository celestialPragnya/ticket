'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */
const { sanitizeEntity } = require('strapi-utils');
module.exports = {

 //   Registration
 async create(ctx) {
    try{
      let entity;
      console.log("print params controller ", ctx.request.body);
      const email = ctx.request.body.email;
      //console.log("email is", email);
      if(email.endsWith('@celestial.com') || email.endsWith('@antrix.com') ){
          entity = await strapi.services.registrations.create(ctx.request.body);
      }else{
          ctx.response.badRequest('Please enter celestial Email');
      }
      return sanitizeEntity(entity, { model: strapi.models.registrations });
    }catch(err){
      ctx.response.badRequest('Please enter celestial Email');
    }
    
  },

};
