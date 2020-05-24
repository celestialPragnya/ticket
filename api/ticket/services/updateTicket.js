'use strict';
module.exports = {
    /**
     * Promise to add record
     *
     * @return {Promise}
     */
    async update(params, data) {
         const entry = await strapi.query('ticket').update(params, data);
         return entry;
      },
  };