const { loginService } = require('../services');

const login = async (req, res) => {
  const { email, password } = req.body;
  const result = await loginService.login(email, password);
  
  return res.status(result.status).json(result.data);
};

module.exports = {
  login,
};
