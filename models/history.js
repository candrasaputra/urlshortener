'use strict';
module.exports = (sequelize, DataTypes) => {
  const History = sequelize.define('History', {
    browser: DataTypes.STRING,
    OS: DataTypes.STRING,
    device: DataTypes.STRING
  }, {});
  History.associate = function(models) {
    // associations can be defined here
  };
  return History;
};