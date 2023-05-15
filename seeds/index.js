const sequelize = require('../config/connection');
const blogPostSeedData = require('./blogpost');
const commentSeedData = require('./comments');
const userSeedData = require('./user');

const seedDatabase = async () => {
  await sequelize.sync({ force: false });
  await userSeedData();
 
  await blogPostSeedData();
  await commentSeedData();
  
 

  console.log('Seed data has been added to the database!');
  process.exit(0);
};

seedDatabase();




// const sequelize = require('../config/connection');
// const seedUser = require('./user');
// const seedBlogPost = require('./blogpost');


// const seedAll = async () => {
//   await sequelize.sync({ force: true });

//   await seedUser();

//   await seedBlogPost();

//   process.exit(0);
// };

// seedAll();
