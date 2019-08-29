'use strict';
const { shortLinkGenerator } = require('../helpers')

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class Url extends Model {
    get countHistory() {
      sequelize.models.History.findOne({
        where: {
          UrlId: 1
        }
      });
      return 10
    }
  }

  Url.init({
    shortened: {
      type: DataTypes.STRING,
    },
    full: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Full Url cannot be null"
        },
        notEmpty: {
          args: true,
          msg: "Full cannot be empty"
        }
      }
    },
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
      valdiate: {
        notNull: {
          args: true,
          msg: "createdBy cannot be null"
        }
      }
    }
  }, {
      sequelize, hooks: {
        beforeCreate: (Url) => Url.shortened = shortLinkGenerator(4)
      }
    });
  Url.associate = function (models) {
    Url.belongsToMany(models.Tag, { through: 'UrlTags', foreignKey: 'UrlId' });
  };
  return Url;
};