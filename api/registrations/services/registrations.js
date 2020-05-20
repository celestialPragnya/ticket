module.exports = {
    /**
     * Promise to add record
     *
     * @return {Promise}
     */
  
    async create(data) {
       // console.log("Print data service ", data)
        const entry = await strapi.query('registrations').create(data);
      
      ///console.log("Print entry service ", entry)
  
       return entry;
    },
  };