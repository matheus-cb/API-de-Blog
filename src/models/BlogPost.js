module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      allowNull: false, // Não permite nulo
      autoIncrement: true, // Define que é autoincremento
      primaryKey: true, // Define a chave primária
      type: DataTypes.INTEGER, // Define o tipo de dado
    },
    title: {
      allowNull: false, // Não permite nulo
      type: DataTypes.STRING, // Define o tipo de dado
    },
    content: {
      allowNull: false, // Não permite nulo
      type: DataTypes.STRING, // Define o tipo de dado
    },
    userId: {
      allowNull: false, // Não permite nulo
      type: DataTypes.INTEGER, // Define o tipo de dado
      foreignKey: true, // Define que é chave estrangeira
    },
    published: {
      allowNull: false, // Não permite nulo
      type: DataTypes.DATE, // Define o tipo de dado
    },
    updated: {
      allowNull: false, // Não permite nulo
      type: DataTypes.DATE, // Define o tipo de dado
    },
  }, {
    timestamps: false, // Não cria colunas createdAt e updatedAt
    tableName: 'BlogPosts', // Nome da tabela
    underscored: true, // CamelCase para snake_case
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User,
      { foreignKey: 'userId', as: 'user' });
  }

  return BlogPost;
};