const { Post } = require('../models');

const PostData =
[
  {
    "title": "this is howie dewit",
    "content": "This is a programming",
   
  },
  {
    "title": "mysql2",
    "content": "This is a advanced language",
   
  },
  {
    "title": "macBook",
    "content": "This is a html",
  
  }
];

const seedPost = () => Post.bulkCreate(PostData);

module.exports = seedPost;