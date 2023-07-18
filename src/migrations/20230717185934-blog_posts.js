'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('blog_posts', {
      id: {
        allowNull: false, // Não permite nulo
        autoIncrement: true, // Auto incremento
        primaryKey: true, // Chave primária
        type: Sequelize.INTEGER, // Tipo inteiro
      },
      title: {
        allowNull: false, // Não permite nulo
        type: Sequelize.STRING, // Tipo string
      },
      content: {
        allowNull: false, // Não permite nulo
        type: Sequelize.STRING, // Tipo string
      },
      user_id: {
        allowNull: false, // Não permite nulo
        type: Sequelize.INTEGER, // Tipo inteiro
        onUpdate: 'CASCADE', // Se atualizar, atualiza em cascata
        onDelete: 'CASCADE', // Se deletar, deleta em cascata
        references: { // Chave estrangeira
          model: 'users', // Nome da tabela
          key: 'id', // Chave primária
        },
      },
      published: {
        allowNull: false, // Não permite nulo   
        type: Sequelize.DATE, // Tipo data
      },
      updated: {
        allowNull: false, // Não permite nulo
        type: Sequelize.DATE, // Tipo data
      },
    });    
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('blog_posts');
  }
};
