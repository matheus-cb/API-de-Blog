const { categoryService } = require('../services');

const createCategory = async (req, res) => {
  const { name } = req.body;

  const result = await categoryService.createCategory(name);

  res.status(result.status).json(result.data);
};

const getAllCategories = async (_req, res) => {
  const result = await categoryService.getAllCategories();

  res.status(result.status).json(result.data);
};

module.exports = {
  createCategory,
  getAllCategories,
};