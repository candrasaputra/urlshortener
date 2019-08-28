'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('UrlTags', 'TagsId', 'TagId');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('UrlTags', 'TagId', 'TagId');
  }
};
