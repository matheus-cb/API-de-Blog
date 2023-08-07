const { loginService } = require('../services');

const login = async (req, res) => {
  const { email, password } = req.body;
  const result = await loginService.login(email, password);
  
  if (result.status && result.data) {
    return res.status(result.status).json(result.data);
  }
  
   return res.status(500).json({ message: 'Internal Server Error' });
};

module.exports = {
  login,
};
