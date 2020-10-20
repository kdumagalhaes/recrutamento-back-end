'use strict';

const sequelize = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      user_id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      user_password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  },
};

//metodo up serve para informar o que a migration vai realizar no bd
// metodo up serve para desfazer alguma ação
