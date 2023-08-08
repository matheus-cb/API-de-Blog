const route = require('express').Router();
const { userController } = require('../controllers');
const { userMiddleware } = require('../middlewares');

route.post(
  '/',
  userMiddleware.validateDisplayName,
  userMiddleware.validateEmail,
  userMiddleware.validatePassword,
  userMiddleware.existUser,
  userController.createUser,
);

module.exports = route;