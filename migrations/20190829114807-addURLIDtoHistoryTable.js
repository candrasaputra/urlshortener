'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Histories', 'UrlId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "UrlId in Histories Table must not be null"
        }
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Histories', 'UrlId', {})
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
