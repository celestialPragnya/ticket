'use strict';
module.exports = {
    /**
     * Promise to add record
     *
     * @return {Promise}
     */
    async find(params) {
      const findData = strapi.query('registrations').find(params);
      console.log("find data in services ", findData)
    },
  };