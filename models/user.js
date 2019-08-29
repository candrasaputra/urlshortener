'use strict';

const { hashPassword } = require('../helpers');

module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.Sequelize.Model

    class User extends Model { }

    User.init({
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    args: true,
                    msg: "Username cannot be null"
                },
                notEmpty: {
                    args: true,
                    msg: "Username cannot be empty"
                }
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    args: true,
                    msg: "Password cannot be null"
                },
                len: {
                    args: [8, 32],
                    msg: "Password length has to be between 8 and 32 characters"
                }
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    args: true,
                    msg: "Email cannot be null"
                },
                isEmail: {
                    args: true,
                    msg: "Invalid email format"
                },
                notEmpty: {
                    args: true,
                    msg: "Email cannot be empty"
                }
            }
        }
    }, {
            sequelize,
            hooks: {
                beforeCreate: (User) => User.password = hashPassword(User.password)
            }
        });
    User.associate = function (models) {
        // associations can be defined here
    };
    return User;
};