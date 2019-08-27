'use strict';
module.exports = (sequelize, DataTypes) => {
  const Url = sequelize.define('Url', {
    shortened: DataTypes.STRING,
    full: DataTypes.STRING,
    createdBy: DataTypes.STRING
  }, {});
  Url.associate = function(models) {
    // associations can be defined here
  };
  return Url;
};