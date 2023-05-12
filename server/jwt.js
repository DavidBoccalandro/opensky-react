const jwt = require('jsonwebtoken');

const generateJwt = (user) => {
  return jwt.sign({ id: user.id, username: user.username }, 'Texto Random Temporal', {
    expiresIn: '5m',
  });
};

const validateJwt = (token) => {
  return jwt.verify(token, 'Texto Random Temporal');
};

module.exports = {
  generateJwt,
  validateJwt,
};
