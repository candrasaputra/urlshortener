'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class UrlTags extends Model { }

  UrlTags.init({
    UrlId: DataTypes.INTEGER,
    TagsId: DataTypes.INTEGER,
    createdBy: DataTypes.STRING
  }, { sequelize });
  UrlTags.associate = function (models) {
    // associations can be defined here
  };
  return UrlTags;
};