module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false, // Não permite nulo
      autoIncrement: true, // Auto incremento
      primaryKey: true, // Chave primária
      type: DataTypes.INTEGER, // Tipo inteiro
    }, 
    displayName: {
      allowNull: false, // Não permite nulo
      type: DataTypes.STRING, // Tipo string
    },
    email: {
      allowNull: false, // Não permite nulo
      type: DataTypes.STRING, // Tipo string
      unique: true, // Único
    },
    password: {
      allowNull: false, // Não permite nulo
      type: DataTypes.STRING, // Tipo string
    },
    image: {
      allowNull: false, // Não permite nulo
      type: DataTypes.STRING, // Tipo string
    },
  }, {
    timestamps: false,
    tableName: 'users',
    underscored: true,
  });
  User.associate = (models) => {
    User.hasMany(models.BlogPost, 
      { foreignKey: 'userId', as: 'blogPosts' });
  };
  return User;
};