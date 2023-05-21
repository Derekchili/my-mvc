const User = require("./User");
const Comment = require("./Comments");
const Post = require("./Post");

Post.belongsToMany(User, {
  through: "PostUsers",
});
User.belongsToMany(Post, {
  through: "PostUsers",
});

Comment.belongsTo(Post, {
  onDelete: "CASCADE",
});
Post.hasMany(Comment);

Comment.belongsTo(User);

User.hasMany(Comment);

module.exports = {
    User,
    Post,
    Comment,
  };
  