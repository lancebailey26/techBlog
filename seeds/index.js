const seedUsers = require('./userseeds');
const seedBlogs = require('./blogseeds')
const seedComments = require('./commentseeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');
  await seedBlogs();
  console.log('\n----- BLOGS SEEDED -----\n');
  await seedComments();
  console.log('\n----- COMMENTS SEEDED -----\n');
  console.log('\n----- SUCCESSFULLY SEEDED blogs_db! -----\n');
  process.exit(0);
};
seedAll();