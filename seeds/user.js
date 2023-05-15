const { User } = require('../models');

const userData =
[
  {
    "name": "John",
    "password": "password",
    "email": "john@john"
  },
  {
    "name": "Emily",
    "password": "password",
    "email": "emily@emily"
  },
  {
    "name": "Stella",
    "password": "password",
    "email": "stella@stella"
  }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;