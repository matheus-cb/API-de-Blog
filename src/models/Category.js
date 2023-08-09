module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      allowNull: false, // Não permite nulo
      autoIncrement: true, // Define que é autoincremento
      primaryKey: true, // Define a chave primária
      type: DataTypes.INTEGER, // Define o tipo de dado
    },
    name: {
      allowNull: false, // Não permite nulo
      type: DataTypes.STRING, // Define o tipo de dado
    },
  }, {
    timestamps: false, // Não cria colunas createdAt e updatedAt
    tableName: 'categories', // Nome da tabela
    underscored: true, // CamelCase para snake_case
  });

  return Category;
};