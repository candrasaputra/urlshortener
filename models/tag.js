'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class Tag extends Model { }

  Tag.init({
    tagName: DataTypes.STRING,
    createdBy: DataTypes.STRING
  }, { sequelize });
  Tag.associate = function (models) {
    Tag.belongsToMany(models.Url, { through: 'UrlTags', foreignKey: 'TagId' });
  };
  return Tag;
};