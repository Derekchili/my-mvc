const { Comments } = require('../models');

const commentData = [
  {
    commentContent: 'This is a great post!',
    userId: 1,
    postId: 1,
  },
  {
    commentContent: 'Thanks for sharing this!',
    userId: 2,
    postId: 1,
  },
  {
    commentContent: 'I have a question about this topic.',
    userId: 3,
    postId: 2,
  },
];

const seedComment = () => Comments.bulkCreate(commentData);

module.exports = seedComment;
