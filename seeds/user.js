const { User } = require('../models');

const userData =
[
  {
    "userName": "John",
    "password": "password",
    "email": "john@john.com"
  },
  {
    "userName": "Emily",
    "password": "password",
    "email": "emily@emily.com"
  },
  {
    "userName": "Stella",
    "password": "password",
    "email": "stella@stella.com"
  }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;