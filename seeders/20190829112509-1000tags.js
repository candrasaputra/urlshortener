'use strict';

const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const arr = []
    for (let i = 0; i < 1000; i++) {
      arr.push({
        tagName: faker.random.word(),
        createdAt: new Date(),
        updatedAt: new Date(),
        createdBy: Math.floor(Math.random() * 1000) + 1
      })
    }
    return queryInterface.bulkInsert('Tags', arr, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tags', null, {})
  }
};
