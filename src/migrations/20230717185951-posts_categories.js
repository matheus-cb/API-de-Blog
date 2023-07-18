'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts_categories', {
      post_id: {
        allowNull: false, // Não permite nulo
        type: Sequelize.INTEGER, // Tipo inteiro
        onUpdate: 'CASCADE', // Se atualizar, atualiza em cascata
        onDelete: 'CASCADE', // Se deletar, deleta em cascata
        references: { // Chave estrangeira
          model: 'blog_posts', // Nome da tabela
          key: 'id', // Chave primária
        },
      },
      category_id: {
        allowNull: false, // Não permite nulo
        type: Sequelize.INTEGER, // Tipo inteiro
        onUpdate: 'CASCADE', // Se atualizar, atualiza em cascata
        onDelete: 'CASCADE', // Se deletar, deleta em cascata
        references: { // Chave estrangeira
          model: 'categories', // Nome da tabela
          key: 'id', // Chave primária
        },
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('posts_categories');
  }
};
