const { BlogPost, Category, User } = require('../models');

const getAllPosts = async () => {
  const posts = await BlogPost.findAll({
    include: [
      {
        model: Category,
        as: 'categories',
      },
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
    ],
  });
  
  return {
    status: 200,
    data: posts,
  };
};

module.exports = {
  getAllPosts,
};