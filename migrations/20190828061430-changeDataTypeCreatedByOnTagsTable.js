'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Tags', 'createdBy')
      .then((result) => {
        return queryInterface.addColumn(
          'Tags',
          'createdBy',
          Sequelize.INTEGER
        );
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Tags',
      'createdBy',
      Sequelize.STRING
    )
      .then((result) => {
        return queryInterface.removeColumn('Tags', 'createdBy')
      })
  }
};
