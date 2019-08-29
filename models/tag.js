'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class Tag extends Model { }

  Tag.init({
    tagName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "tagName must not be null"
        },
        notEmpty: {
          args: true,
          msg: "tags must not be empty"
        }
      }
    },
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notnull: {
          args: true,
          msg: "createdBy must not be null"
        }
      }
    }
  }, { sequelize });
  Tag.associate = function (models) {
    Tag.belongsToMany(models.Url, { through: 'UrlTags', foreignKey: 'TagId' });
  };
  return Tag;
};