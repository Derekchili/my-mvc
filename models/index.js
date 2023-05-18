const User = require('./User');

const BlogPost = require('./BlogPost');
const Comment = require('./Comments');

// Define relationships between models
// User.hasMany(BlogPost);
BlogPost.belongsTo(User,{
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

BlogPost.hasMany(Comment,{
  foreignKey: 'postId',
  onDelete: 'CASCADE'
});
Comment.belongsTo(User,{
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});




module.exports = {
    User,
    BlogPost,
    Comment,
  };
  