'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false, // Não permite nulo
        autoIncrement: true, // Auto incremento
        primaryKey: true, // Chave primária
        type: Sequelize.INTEGER, // Tipo inteiro
      },
      display_name: {
        allowNull: false, // Não permite nulo
        type: Sequelize.STRING, // Tipo string
      },
      email: {
        allowNull: false, // Não permite nulo
        type: Sequelize.STRING, // Tipo string
        unique: true, // Único
      },
      password: {
        allowNull: false, // Não permite nulo
        type: Sequelize.STRING, // Tipo string
      },
      image: {
        allowNull: false, // Não permite nulo
        type: Sequelize.STRING, // Tipo string
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
