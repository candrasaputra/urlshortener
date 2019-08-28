'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class Url extends Model { }

  Url.init({
    shortened: DataTypes.STRING,
    full: DataTypes.STRING,
    createdBy: DataTypes.STRING
  }, { sequelize });
  Url.associate = function (models) {
    // associations can be defined here
  };
  return Url;
};