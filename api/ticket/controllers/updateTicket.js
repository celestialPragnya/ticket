'use strict';
const { sanitizeEntity } = require('strapi-utils');
module.exports = {
    update: async ctx => {
        try{
            const {id}  = ctx.params;
            let  entity = await (strapi.query('ticket').find({ id: id}));
            if(entity.length > 0){
                entity = await strapi.services.ticket.update({ id }, ctx.request.body);
                
            }else{
                ctx.response.badRequest('Please Check email And Password');
            }
            return sanitizeEntity(entity, { model: strapi.models.ticket });
            //return 'Hello World!';
        }catch (err){
            ctx.response.badRequest('Please Check email And Password');
        }
        
    }
};