'use strict';
module.exports = {
    /**
     * Promise to add record
     *
     * @return {Promise}
     */
  
    async create(data) {
        const entry = await strapi.query('registrations').create(data);
        return entry;
    },
  };