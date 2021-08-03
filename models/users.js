const { datatype } = require("faker");
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
class Users extends Model {}

Users.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
          },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pass: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'users',
  }
);

module.exports = Users;
