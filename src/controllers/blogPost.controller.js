const { blogPostService } = require('../services');

const getAllPosts = async (_req, res) => {
  const result = await blogPostService.getAllPosts();
  res.status(result.status).json(result.data);
};

module.exports = {
  getAllPosts,
};