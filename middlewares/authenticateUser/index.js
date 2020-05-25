module.exports = strapi => {
    return {
      initialize: function() {
        //   console.log(cb)
        strapi.app.use(async (ctx, next) => {
          
          console.log(ctx.request)
          
          await next();
        });      
  
        // cb();
      }
    };
  };