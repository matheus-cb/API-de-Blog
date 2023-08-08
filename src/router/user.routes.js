const route = require('express').Router();
const { userController } = require('../controllers');
const { userMiddleware, authMiddleware } = require('../middlewares');

route.post(
  '/',
  userMiddleware.validateDisplayName,
  userMiddleware.validateEmail,
  userMiddleware.validatePassword,
  userMiddleware.existUser,
  userController.createUser,
);

route.get('/', authMiddleware.validateToken, userController.getAllUsers);

module.exports = route;