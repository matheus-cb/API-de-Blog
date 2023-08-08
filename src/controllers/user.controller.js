const { userService } = require('../services');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const result = await userService.createUser(displayName, email, password, image);

  return res.status(result.status).json(result.data);
};

module.exports = {
  createUser,
};