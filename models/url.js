'use strict';
const { shortLinkGenerator } = require('../helpers')
const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class Url extends Model {
    shortTitle() {
      return this.title.length > 30 ? this.title.substr(0, 30) + "..." : this.title;
    }

    shortFull() {
      return this.full.length > 100 ? this.full.substr(0, 100) + "..." : this.full;
    }

    static countAll() {
      return Url.findOne({ attributes: [[Sequelize.fn('count', Sequelize.col('id')), 'total']] })
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
      validate: {
        notNull: {
          args: true,
          msg: "createdBy cannot be null"
        }
      }
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "title cannot be null"
        },
        notEmpty: {
          args: true,
          msg: "title cannot be empty"
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
    Url.hasMany(models.History);
  };
  return Url;
};