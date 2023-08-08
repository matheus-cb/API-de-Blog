const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'secretPassword';

const jwtConfig = { algorithm: 'HS256', expiresIn: '15m' };

const createToken = (payload) => jwt.sign(payload, secret, jwtConfig);

const verifyToken = (token) => jwt.verify(token, secret, jwtConfig);

module.exports = {
  createToken,
  verifyToken,
};