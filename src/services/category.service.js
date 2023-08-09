const { Category } = require('../models');

const createCategory = async (name) => {
  const category = await Category.create({ name });

  console.log(category);
  return {
    status: 201,
    data: category,
  };
};

const getAllCategories = async () => {
  const categories = await Category.findAll();

  return {
    status: 200,
    data: categories,
  };
};

module.exports = {
  createCategory,
  getAllCategories,
};