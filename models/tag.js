'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class Tag extends Model { }

  Tag.init({
    tagName: DataTypes.STRING,
    createdBy: DataTypes.STRING
  }, { sequelize });
  Tag.associate = function (models) {
    // associations can be defined here
  };
  return Tag;
};