const { User } = require('../models');
var faker = require('faker');

const userData = [
    {
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: faker.internet.password()
    },
    {
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: faker.internet.password()
    },
    {
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: faker.internet.password()
    },
    {
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: faker.internet.password()
    },
    {
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: faker.internet.password()
    },
];

const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers