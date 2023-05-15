const { BlogPost } = require('../models');

const blogPostData =
[
  {
    "postTitle": "this is howie dewit",
    "postContent": "This is a programming",
    "userId": 1,
    "username": "zoe"
  },
  {
    "postTitle": "mysql2",
    "postContent": "This is a advanced language",
    "userId": 2,
    "username": "julie"
  },
  {
    "postTitle": "macBook",
    "postContent": "This is a html",
    "userId": 3,
    "username": "mehoff"
  }
];

const seedBlogPost = () => BlogPost.bulkCreate(blogPostData);

module.exports = seedBlogPost;