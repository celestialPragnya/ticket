'use strict';
const { sanitizeEntity } = require('strapi-utils');
module.exports = {
    update: async ctx => {
            
        try{
            const {id}  = ctx.params;
            let  entity = await (strapi.query('registrations').find({ id: id}));
            if(entity.length > 0){
                entity = await strapi.services.registrations.update({ id }, ctx.request.body);
            }else{
                ctx.response.badRequest('Please Check email And Password');
            }
            return sanitizeEntity(entity, { model: strapi.models.registrations });
        }
        catch{
            ctx.response.badRequest('Please Check email And Password');
        }
            
        
    }
};