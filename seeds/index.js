
const PostSeedData = require('./post');
const commentSeedData = require('./comments');
const userSeedData = require('./user');
const sequelize = require('../config');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await userSeedData();
 
  await PostSeedData();
  await commentSeedData();
  
 

  console.log('Seed data has been added to the database!');
  process.exit(0);
};

seedDatabase();


