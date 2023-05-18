const router = require("express").Router();
const { BlogPost, User } = require("../../models");
const dayjs = require("dayjs");

// send homepage as initial action
router.get("/:id", async (req, res) => {
  try {
    const blogPostId = req.params.id
    const blogPostData = await BlogPost.findOne({ where: {id: blogPostId}, include: [User] });
    const blogPost = blogPostData.get({ plain: true})

    
    post.createdAt = dayjs(post.createdAt).format("MMM DD YYYY")
       
        
        console.log("blogPost:", blogPost)
    res.render("blogPost", {
      post: post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "some error", err: err });
  }
});


module.exports = router