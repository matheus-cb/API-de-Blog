const { User } = require('../models');

const validateDisplayName = (req, res, next) => {
  const { displayName } = req.body;
  if (!displayName || displayName.length < 8) {
    return res.status(400).json({
      message: '"displayName" length must be at least 8 characters long',
  });
  }
  next();
};

const validateEmail = (req, res, next) => {
  const { email } = req.body;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;
  if (!password || password.length < 6) {
    return res.status(400).json({
      message: '"password" length must be at least 6 characters long',
    });
  }
  next();
};

const existUser = async (req, res, next) => {
  const { email } = req.body;

  const user = await User.findOne({ where: { email } });

  if (user) {
    return res.status(409).json({ message: 'User already registered' });
  }

  next();
};

module.exports = {
  validateDisplayName,
  validateEmail,
  validatePassword,
  existUser,
};
