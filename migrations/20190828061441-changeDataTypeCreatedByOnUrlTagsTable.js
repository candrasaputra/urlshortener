'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('UrlTags', 'createdBy')
      .then((result) => {
        return queryInterface.addColumn(
          'UrlTags',
          'createdBy',
          Sequelize.INTEGER
        );
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'UrlTags',
      'createdBy',
      Sequelize.STRING
    )
      .then((result) => {
        return queryInterface.removeColumn('UrlTags', 'createdBy')
      })
  }
};
