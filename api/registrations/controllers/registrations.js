'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */
const { sanitizeEntity } = require('strapi-utils');
module.exports = {

    // create: async ctx=>{
    //     console.log("print params ", ctx.request.body);
    //     console.log("print email ", ctx.request.body.email);
    //     if(ctx.request.body.email.endsWith('@celestial.com')){
    //         console.log("email valid");
    //     }else{
    //         console.log("email Invalid");
    //     }
        
    // }
 //   registrations.create
 async create(ctx) {
    let entity;
    console.log("print params controller ", ctx.request.body);
    const email = ctx.request.body.email;
    console.log("email is", email);
    if(email.endsWith('@celestial.com') || email.endsWith('@antrix.com') ){
         entity = await strapi.services.registrations.create(ctx.request.body);
    }else{
        ctx.response.badRequest('Please enter celestial Email');
    }
    return sanitizeEntity(entity, { model: strapi.models.registrations });
  }
};
