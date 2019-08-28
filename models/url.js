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
    Url.belongsToMany(models.Tag, { through: 'UrlTags', foreignKey: 'UrlId' });
  };
  return Url;
};