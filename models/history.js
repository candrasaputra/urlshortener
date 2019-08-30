'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  const Sequelize = require("sequelize");

  class History extends Model {
    static countAll() {
      return History.findOne({ attributes: [[Sequelize.fn('count', Sequelize.col('id')), 'total']] })
    }
  }

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