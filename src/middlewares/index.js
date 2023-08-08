const loginMiddleware = require('./login.middlewares');
const userMiddleware = require('./user.middlewares');
const authMiddleware = require('./auth.middlewares');

module.exports = {
  loginMiddleware,
  userMiddleware,
  authMiddleware,
};