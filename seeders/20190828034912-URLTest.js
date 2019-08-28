'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Urls', [
      {
        "shortened": "gogle",
        "full": "https://www.google.com",
        "createdBy": "tigor",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "shortened": "yaho",
        "full": "https://www.yahoo.com",
        "createdBy": "candra",
        "createdAt": new Date(),
        "updatedAt": new Date()
      }
    ], {})
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
