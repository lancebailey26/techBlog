const { Comments } = require('../models');
var faker = require('faker');

const commentData = [
    {
       author_id: Math.floor(Math.random() * 5) + 1,
       title: faker.random.words(),
       comment: faker.lorem.text(),
       posted_on: Math.floor(Math.random() * 5) + 1,
    },
    {
        author_id: Math.floor(Math.random() * 5) + 1,
        title: faker.random.words(),
        comment: faker.lorem.text(),
        posted_on: Math.floor(Math.random() * 5) + 1,
     },
     {
        author_id: Math.floor(Math.random() * 5) + 1,
        title: faker.random.words(),
        comment: faker.lorem.text(),
        posted_on: Math.floor(Math.random() * 5) + 1,
     },
     {
        author_id: Math.floor(Math.random() * 5) + 1,
        title: faker.random.words(),
        comment: faker.lorem.text(),
        posted_on: Math.floor(Math.random() * 5) + 1,
     },
     {
        author_id: Math.floor(Math.random() * 5) + 1,
        title: faker.random.words(),
        comment: faker.lorem.text(),
        posted_on: Math.floor(Math.random() * 5) + 1,
     },
];

const seedComments = () => Comments.bulkCreate(commentData);
module.exports = seedComments