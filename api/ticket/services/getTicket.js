'use strict';
module.exports = {
    /**
     * Promise to add record
     *
     * @return {Promise}
     */
    async find(params) {
      const findData = strapi.query('ticket').find(params);
      console.log("find data in services ", findData)
    },
  };