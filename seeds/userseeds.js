const { Users } = require('../models');
var faker = require('faker');

const userData = [
    {
        username: faker.name.findName(),
        email: faker.internet.email(),
        pass: faker.internet.password()
    },
    {
        username: faker.name.findName(),
        email: faker.internet.email(),
        pass: faker.internet.password()
    },
    {
        username: faker.name.findName(),
        email: faker.internet.email(),
        pass: faker.internet.password()
    },
    {
        username: faker.name.findName(),
        email: faker.internet.email(),
        pass: faker.internet.password()
    },
    {
        username: faker.name.findName(),
        email: faker.internet.email(),
        pass: faker.internet.password()
    },
];

const seedUsers = () => Users.bulkCreate(userData);
module.exports = seedUsers