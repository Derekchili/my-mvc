const express = require('express');
const router = express.Router();
const { BlogPost, User, Comments } = require('../../models');

// Route to get all blog posts, retrieving all blogPosts in JSON format
router.get('/', async (req, res) => {
  
  try {
    const blogPost = await BlogPost.findAll({
      include: [User, Comments],
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

router.get("/:id", async (req, res) => {

  try {
    const blogPostID = await BlogPost.findByPk(req.params.id, {
      include: [{ model: Comments }],
    });

    if (!blogPostID) {
      res.status(404).json({ message: "No post found with that id!" });
      return;
    }

    res.status(200).json(blogPostID);
  } catch (err) {
    res.status(500).json(err);
  }
});
   

// Route to create a new blog post
router.post('/', async (req, res) => {
  try{
    if(!req.session.user_id){
      return res.json('Please login first')
    }
  const newBlogPost = ({
    title: req.body.title,
    content: req.body.content,
    // creator: req.user.id 
  });
  const dbResponse = await Post.create(newBlogPost);
  await dbResponse.addUser(req.session.userId);
  const formatData = await dbResponse.get({plain: true});
  res.status(200).json(formatData);

  } catch (err) {
    console.log("err:", err);
    res.status(500).json({ msg: 'some error', err: err });
  }
});


router.put("/:id", (req, res) => {
  BlogPost.update(
    {
      title: req.body.title,
      due_date: req.body.due_date,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updateBlogPost) => {
      
      res.json(updateBlogPost);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "error occurred", err });
    });
});


// Route to delete a blog post
router.delete('/:id',(req, res) => {
  BlogPost.destroy({
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