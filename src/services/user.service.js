const { User } = require('../models');
const { createToken } = require('../auth/authfunctions');

const createUser = async (displayName, email, password, image) => {
  const user = await User.create({ displayName, email, password, image });

  const { password: _, ...userWithoutPassword } = user.dataValues;

  const payload = { userWithoutPassword };

  const token = createToken(payload);

  return {
    status: 201,
    data: { token },
  };
};

const getAllUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  
  return {
    status: 200,
    data: users,
  };
};

module.exports = {
  createUser,
  getAllUsers,
};