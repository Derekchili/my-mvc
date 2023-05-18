const { BlogPost } = require('../models');

const blogPostData =
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

const seedBlogPost = () => BlogPost.bulkCreate(blogPostData);

module.exports = seedBlogPost;