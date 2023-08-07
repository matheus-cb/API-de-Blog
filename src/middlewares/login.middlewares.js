const { User } = require('../models');

const validateLoginFields = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Some required fields are missing" });
  }

  next();
};

const userExists = async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({ where: { email } });

  if (!user) {
    return res.status(400).json({ message: "Invalid fields" });
  }

  req.user = user; // Armazenando o usuário na requisição para uso posterior, se necessário.
  next();
};


module.exports = {
  validateLoginFields,
  userExists,  
};