const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comments extends Model {}

  Comments.init(
 
    {
    // id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   primaryKey: true,
    //   autoIncrement: true,
    // },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      // unique: true,
    },
    // userId: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'user',
    //     key: 'id',
    //   },
    // }, 
    // postId: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'post',
    //     key: 'id',
    //   },
    // }, 
  },
  {
    sequelize,
    // timestamps: false,
    // freezeTableName: true,
    // underscored: false,
    // modelName: 'comment',
  }
);

module.exports = Comments;