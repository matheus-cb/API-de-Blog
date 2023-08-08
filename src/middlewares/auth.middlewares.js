const { verifyToken } = require('../auth/authfunctions');

const validateToken = async (req, res, next) => {
  try {
    const { authorization: token } = req.headers;

    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
  }

    const payload = verifyToken(token.includes('Bearer') ? token.split(' ')[1] : token);
    
    req.payload = payload;
    
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  validateToken,
};