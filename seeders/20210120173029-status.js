'use strict';
const  Status = require('../models/dto/status.dto');

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Statuses', [
      new Status('To Do', new Date()), new Status('Doing',new Date()), new Status('Done',new Date())], {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
