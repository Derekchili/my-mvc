const express = require('express');
const router = express.Router();
const { BlogPost, User } = require('../../models');

// Route to get all blog posts, retrieving all blogPosts in JSON format
router.get('/', async (req, res) => {
  
  try {
    const blogPost = await BlogPost.findAll({
      include: [User],
    });
    if (blogPost.length === 0){
      return res.status(404).json({ msg: "no post in database "})
    }
    res.json(blogPost);
  } catch (err) {
    console.log("err:", err);
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", (req, res) => {
  BlogPost.findByPk(req.params.id)
    .then((blogPost) => {
      if (!blogPost) {
      return res
      .status(404)
      .json({ msg: "no post with that id in database!" });
      }
      res.json(blogPost);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "error occurred", err });
    });
});

// Route to create a new blog post
router.post('/', async (req, res) => {
  try{
    if(!req.session.user_id){
      return res.json('Please login first')
    }
  const newBlogPost = newBlogPost({
    title: req.body.title,
    contents: req.body.contents,
    creator: req.user.id 
  });
  const dbResponse = await Post.create(newBlogPost);
  if (dbResponse){
    return res.json(dbResponse)
  }else {
    return res.status(500).json({ msg: 'some error'});
  }

  } catch (err) {
    console.log("err:", err);
    res.status(500).json({ msg: 'some error', err: err });
  }
});


router.put("/:id", (req, res) => {
  blogPost.update(
    {
      name: req.body.name,
      due_date: req.body.due_date,
      description: req.body.description,
      status: req.body.status,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((editBlogPost) => {
      if (!editBlogPost[0]) {
      return res
        .status(404)
        .json({ msg: "no post with this id in database!" });
      }
      res.json(editBlogPost);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "error occurred", err });
    });
});


// Route to delete a blog post
router.delete('/:id',(req, res) => {
  blogPost.destroy({
    where: {
      id: req.params.id
    },
  })
  .then((delBlogPost) => {
    if (!delBlogPost) {
      return res
        .status(404)
        .json({ msg: "no post with this id in database!" });
    }
    res.json(delBlogPost);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json({ msg: "error occurred", err });
  });
});


module.exports = router;