const route = require('express').Router();
const { categoryController } = require('../controllers');
const { categoryMiddleware, authMiddleware } = require('../middlewares');

route.post(
  '/', 
  authMiddleware.validateToken, 
  categoryMiddleware.validateInputNameProduct, 
  categoryController.createCategory,
);

route.get(
  '/',
  authMiddleware.validateToken, 
  categoryController.getAllCategories,
);

module.exports = route;