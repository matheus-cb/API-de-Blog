const route = require('express').Router();
const { blogPostController } = require('../controllers');
const { authMiddleware } = require('../middlewares');

route.get(
  '/', 
  authMiddleware.validateToken, 
  blogPostController.getAllPosts,
);

module.exports = route;