const { datatype } = require("faker");
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
class Comments extends Model {}

Comments.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
          },
        author_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        comment: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        posted_on: {
            type: DataTypes.INTEGER,
            allowNull: false,
            refernces: {
                model: 'blogs',
                key: 'id',
            }
        
        }
    },
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comments',
  }
);

module.exports = Comments;
