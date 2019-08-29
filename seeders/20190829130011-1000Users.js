'use strict';
const faker = require('faker')
const hashPassword = require('../helpers/hashPassword')

module.exports = {
  up: (queryInterface, Sequelize) => {
    const arr = []
    arr[0] = {
      username: "administrator",
      password: hashPassword("12345678"),
      email: "administrator@admin.com",
      createdAt: faker.date.past(1, '2017-01-01'),
      updatedAt: new Date()
    }
    for (let i = 0; i < 10; i++) {
      arr.push({
        username: faker.internet.userName(),
        password: "$2a$10$r5bMH8xeHOVDYfHofuKt/eSWUs93u1N/SAM/PNlp69/5b3sIMFqgm",
        email: faker.internet.email(),
        createdAt: faker.date.past(1, '2018-01-01'),
        updatedAt: new Date()
      })
    }
    return queryInterface.bulkInsert('Users', arr, {})
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
 
      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
 
      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
