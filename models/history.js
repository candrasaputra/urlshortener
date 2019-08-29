'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class History extends Model { }

  History.init({
    browser: DataTypes.STRING,
    OS: DataTypes.STRING,
    device: DataTypes.STRING,
    UrlId: DataTypes.INTEGER
  }, {
      sequelize
    });
  History.associate = function (models) {
    // associations can be defined here
  };
  return History;
};