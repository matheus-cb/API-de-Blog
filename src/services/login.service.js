const { User } = require('../models');
const { createToken } = require('../auth/authfunctions');

const login = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });

  if (!user) {
    return {
      status: 400, data: { message: 'Invalid fields' },
    };
  }

  const token = createToken({ id: user.id, email: user.email });

  return {
    status: 200,
    data: { token },
  };
};

module.exports = {
  login,
};
