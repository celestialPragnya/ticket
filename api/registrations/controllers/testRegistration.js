module.exports = {
    // GET /hello
    index: async ctx => {
        console.log("print params ", ctx.request.body)
      ctx.send('Hello World!');
    },
  };