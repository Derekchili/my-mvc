const User = require('./User');

const Comments = require('./Comments');
const BlogPost = require('./BlogPost');

// Define relationships between models
// User.hasMany(BlogPost);
BlogPost.belongsTo(User,{
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

BlogPost.hasMany(Comments,{
  foreignKey: 'postId',
  onDelete: 'CASCADE'
});
Comments.belongsTo(User,{
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});




module.exports = {
    User,
    BlogPost,
    Comments,
  };
  