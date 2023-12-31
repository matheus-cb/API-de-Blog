const { userService } = require('../services');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const result = await userService.createUser(displayName, email, password, image);

  return res.status(result.status).json(result.data);
};

const getAllUsers = async (req, res) => {
  const result = await userService.getAllUsers();

  return res.status(result.status).json(result.data);
};

const getUserById = async (req, res) => {
  const { id } = req.params;

  const result = await userService.getUserById(id);

  return res.status(result.status).json(result.data);
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
};