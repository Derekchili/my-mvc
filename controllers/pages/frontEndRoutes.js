const router = require("express").Router();
const { Post, User } = require("../../models");
// const dayjs = require("dayjs");
var logged;
// send homepage as initial action, render the homepage view

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
router.get("/", (req, res) => {
  if (req.session.logged_in) {
    Post.findAll({
      include: [User],
    }).then((postData) => {
      const hbsData = postData.map((post) => post.get({ plain: true }));
      console.log(hbsData);
      res.render("homepage", {
        allPosts: hbsData,
        logged_in: req.session.logged_in,
      });
      // return res.redirect("/");
    });
  } else {
    someObj = {};
    res.render("login");
  }
});

router.get("/sign-up", async (req, res) => {
  try {
    res.render("sign-up");
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "some error", err: err });
  }
});
router.get("/createPost", async (req, res) => {
  if (req.session.logged_in) {
    try {
      res.render("create-post", { logged_in: req.session.logged_in });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: "an error occured", err: err });
    }
  } else {
    res.redirect("/login");
  }
});
router.get("/posts", async (req, res) => {
  if (req.session.logged_in) {
    try {
      res.render("posts", { logged_in: req.session.logged_in });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: "an error occured", err: err });
    }
  } else {
    res.redirect("/login");
  }
});

router.get("/post/:id", (req, res) => {
  Post.findByPk(req.params.id, {
    include: [User],
  }).then((dbResponse) => {
    const taskData = dbResponse.get({ plain: true });
    console.log("taskData:", taskData);
    res.render("edit-post", taskData);
  });
});
// router.get("/dashboard", async (req, res) => {
//     if (!req.session.logged_in) {
//       return res.redirect("/");
//     }
//     const yourPostData = await Post.findAll({ include: [User], 
//       where: {UserId: req.session.user_id}
//     }
//       )
//     const yourPosts = yourPostData.map(post => post.get({ plain: true}))
  
//      // direct to login page and send session logged in status
//   res.render("dashboard", {
//     logged_in: req.session.logged_in,
//     yourPosts: yourPosts
//   });
//   });

module.exports = router;



