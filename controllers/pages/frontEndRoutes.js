const router = require("express").Router();
const { BlogPost, User } = require("../../models");
// const dayjs = require("dayjs");
var logged;
// send homepage as initial action, render the homepage view
router.get("/", async (req, res) => {
  try {
    const BlogPostData = await BlogPost.findAll({ include: [User] });
    const allPosts = BlogPostData.map((post) =>
      post.get({ plain: true, include: [User] })
    );

    // allPosts.forEach(
    //   (item) => (item.createdAt = dayjs(item.createdAt).format("MMM DD YYYY"))
    // );
      console.log("allPosts:", allPosts)
    res.render("homepage", {
      allPosts: allPosts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "some error", err: err });
  }
});
// control what happens when user clicks on login
router.get("/login", (req, res) => {
  // prevent user from accessing login page if they are already logged in
  if (req.session.logged_in) {
    return res.redirect("/");
  }
  // direct to login page and send session logged in status
  res.render("login", {
    logged_in: req.session.logged_in,
  });
});
router.get("/sign-up", async (req, res) => {
  try {
    res.render("sign-up");
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "some error", err: err });
  }
});
router.get("/dashboard", async (req, res) => {
  if (!req.session.logged_in) {
    return res.redirect("/");
  }
  const yourPostData = await Post.findAll({ include: [User], 
    // where: {UserId: req.session.user_id}
  }
    )
  const yourPosts = yourPostData.map(post => post.get({ plain: true}))

  yourPosts.forEach(
    (item) => (item.createdAt = dayjs(item.createdAt).format("MMM DD YYYY"))
  );
   // direct to login page and send session logged in status
res.render("dashboard", {
  logged_in: req.session.logged_in,
  yourPosts: yourPosts
});
});


module.exports = router;

