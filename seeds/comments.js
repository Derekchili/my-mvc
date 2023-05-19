const { Comment } = require('../models');

const commentData = [
  {
    content: 'This is a great post!',
    userId: 1,
    postId: 1,
  },
  {
    content: 'Thanks for sharing this!',
    userId: 2,
    postId: 1,
  },
  {
    content: 'I have a question about this topic.',
    userId: 3,
    postId: 2,
  },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
