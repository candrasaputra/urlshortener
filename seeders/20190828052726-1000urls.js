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
        "createdAt": new Date(),
        "updatedAt": new Date()
      })
    }
    return queryInterface.bulkInsert('Urls', arr, {})
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
    return queryInterface.bulkDelete('Urls', null, {})
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
