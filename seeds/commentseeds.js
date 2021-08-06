const { Comments } = require('../models');
var faker = require('faker');

const commentData = [
   {
      author_id: Math.floor(Math.random() * 5) + 1,
      comment: faker.lorem.text(),
      posted_on: Math.floor(Math.random() * 5) + 1,
      datetime: faker.datatype.datetime()
   },
   {
      author_id: Math.floor(Math.random() * 5) + 1,
      comment: faker.lorem.text(),
      posted_on: Math.floor(Math.random() * 5) + 1,
      datetime: faker.datatype.datetime()
   },
   {
      author_id: Math.floor(Math.random() * 5) + 1,
      comment: faker.lorem.text(),
      posted_on: Math.floor(Math.random() * 5) + 1,
      datetime: faker.datatype.datetime()
   },
   {
      author_id: Math.floor(Math.random() * 5) + 1,
      comment: faker.lorem.text(),
      posted_on: Math.floor(Math.random() * 5) + 1,
      datetime: faker.datatype.datetime()
   },
   {
      author_id: Math.floor(Math.random() * 5) + 1,
      comment: faker.lorem.text(),
      posted_on: Math.floor(Math.random() * 5) + 1,
      datetime: faker.datatype.datetime()
   },
];

const seedComments = () => Comments.bulkCreate(commentData);
module.exports = seedComments