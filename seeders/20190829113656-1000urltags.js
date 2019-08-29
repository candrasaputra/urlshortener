'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const arr = []
    for (let i = 0; i < 1000; i++) {
      arr.push({
        UrlId: Math.floor(Math.random() * 1000) + 1,
        TagId: Math.floor(Math.random() * 1000) + 1,
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }
    return queryInterface.bulkInsert('UrlTags', arr, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UrlTags', null, {})
  }
};
