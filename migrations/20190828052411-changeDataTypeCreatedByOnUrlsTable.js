'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Urls', 'createdBy')
      .then((result) => {
        return queryInterface.addColumn(
          'Urls',
          'createdBy',
          Sequelize.INTEGER
        );
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Urls',
      'createdBy',
      Sequelize.STRING
    )
      .then((result) => {
        return queryInterface.removeColumn('Urls', 'createdBy')
      })
  }
};
