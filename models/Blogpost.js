const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class BlogPost extends Model {}

  BlogPost.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    postTitle: {
      type: DataTypes.STRING(30),
      allowNull: false,
      // unique: true,
    },
    postContent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dateCreated: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      // unique: true,
      validate: {
        isUserName: true,
      },
  },
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: false,
    modelName: 'post',
  }

);


module.exports = BlogPost;