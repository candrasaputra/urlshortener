'use strict';

const faker = require('faker');
const { shortLinkGenerator } = require('../helpers');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const arr = []
    for (let i = 0; i < 1000; i++) {
      arr.push({
        "shortened": shortLinkGenerator(4),
        "full": faker.internet.url(),
        "createdBy": Math.floor(Math.random() * 1000) + 1,
        "createdAt": faker.date.past(1, '2019-01-01'),
        "updatedAt": new Date(),
        "title": faker.random.words()
      })
    }
    return queryInterface.bulkInsert('Urls', arr, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Urls', null, {})
  }
};
