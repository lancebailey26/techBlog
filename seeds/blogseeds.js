const { Blogs } = require('../models');
var faker = require('faker');

const blogData = [
    {
       blogger_id: Math.floor(Math.random() * 5) + 1,
       title: faker.random.words(),
       body: faker.lorem.text()
    },
    {
        blogger_id: Math.floor(Math.random() * 5) + 1,
        title: faker.random.words(),
        body: faker.lorem.text()
     },
     {
        blogger_id: Math.floor(Math.random() * 5) + 1,
        title: faker.random.words(),
        body: faker.lorem.text()
     },
     {
        blogger_id: Math.floor(Math.random() * 5) + 1,
        title: faker.random.words(),
        body: faker.lorem.text()
     },
     {
        blogger_id: Math.floor(Math.random() * 5) + 1,
        title: faker.random.words(),
        body: faker.lorem.text()
     },
];

const seedBlogs = () => Blogs.bulkCreate(blogData);
module.exports = seedBlogs