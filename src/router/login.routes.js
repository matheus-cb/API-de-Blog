const route = require('express').Router();
const { loginController } = require('../controllers');
const loginMiddleware = require('../middlewares/login.middlewares');

route.post(
  '/',
  loginMiddleware.validateLoginFields, 
  loginMiddleware.userExists, 
  loginController.login,
);

module.exports = route;