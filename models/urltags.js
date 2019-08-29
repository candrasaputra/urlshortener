'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class UrlTags extends Model { }

  UrlTags.init({
    UrlId: DataTypes.INTEGER,
    TagId: DataTypes.INTEGER
  }, { sequelize });
  UrlTags.associate = function (models) {
    UrlTags.belongsTo(models.Url)
  };
  return UrlTags;
};