'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('categories', {
      id: {
        allowNull: false, // Não permite nulo
        autoIncrement: true, // Auto incremento
        primaryKey: true, // Chave primária
        type: Sequelize.INTEGER, // Tipo inteiro
      },
      name: {
        allowNull: false, // Não permite nulo
        type: Sequelize.STRING, // Tipo string
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('categories');
  }
};
