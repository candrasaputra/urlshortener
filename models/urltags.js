'use strict';
module.exports = (sequelize, DataTypes) => {
  const UrlTags = sequelize.define('UrlTags', {
    UrlId: DataTypes.INTEGER,
    TagsId: DataTypes.INTEGER,
    createdBy: DataTypes.STRING
  }, {});
  UrlTags.associate = function(models) {
    // associations can be defined here
  };
  return UrlTags;
};