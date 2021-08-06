const { Blogs } = require('../models');
var faker = require('faker');

const blogData = [
    {
       blogger_id: Math.floor(Math.random() * 5) + 1,
       title: faker.vehicle.manufacturer(),
       body: faker.lorem.text(),
       datetime: faker.datatype.datetime()
    },
    {
        blogger_id: Math.floor(Math.random() * 5) + 1,
        title: faker.vehicle.manufacturer(),
        body: faker.lorem.text(),
        datetime: faker.datatype.datetime()
     },
     {
        blogger_id: Math.floor(Math.random() * 5) + 1,
        title: faker.vehicle.manufacturer(),
        body: faker.lorem.text(),
        datetime: faker.datatype.datetime()
     },
     {
        blogger_id: Math.floor(Math.random() * 5) + 1,
        title: faker.vehicle.manufacturer(),
        body: faker.lorem.text(),
        datetime: faker.datatype.datetime()
     },
     {
        blogger_id: Math.floor(Math.random() * 5) + 1,
        title: faker.vehicle.manufacturer(),
        body: faker.lorem.text(),
        datetime: faker.datatype.datetime()
     },
];

const seedBlogs = () => Blogs.bulkCreate(blogData);
module.exports = seedBlogs