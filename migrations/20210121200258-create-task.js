'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      dateInitial: {
        type: Sequelize.DATE
      },
      dateFinal: {
        type: Sequelize.DATE
      },
      statusId:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{ model: 'Statuses', key: 'id'}
      },
      groupId:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{ model: 'Gruops', key: 'id'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Tasks');
  }
};