const jwt = require('jsonwebtoken');
const { User } = require('../models');

const secret = process.env.JWT_SECRET || 'secretPassword';

const login = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });

  if (!user) {
    return {
      status: 400, data: { message: 'Invalid fields' },
    };
  }

  const jwtConfig = { 
    algorithm: 'HS256',
  };
  const token = jwt.sign({ data: { email } }, secret, jwtConfig);

  return {
    status: 200,
    data: { token },
  };
};

module.exports = {
  login,
};
