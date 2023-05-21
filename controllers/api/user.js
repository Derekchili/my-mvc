const router = require("express").Router();
const { User } = require("../../models");

// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.findAll({

    });
    console.log("users:", users);
    if (users.length===0){
      return res.status(404).json({ msg: 'no users in database'});
    }
    res.json(users);
  } catch (err) {
    console.log("err:", err);
    res.status(500).json({ message: err.message });
  }
});

// Get a specific user
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    console.log("err:", err);
    res.status(500).json({ message: err.message });
  }
});

// Create a new user
router.post("/", async (req, res) => {
  try {
    const newUser = {
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password,
    };
    const dbResponse = await User.create(newUser);

    if (req.body.postId) {
      await dbResponse.addPost(req.body.posId);
    }
    req.session.user_id = dbResponse.dataValues.id;
    req.session.logged_in = true;

    return res.status(200).json(dbResponse);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "error occurred", err: err });
  }
});


router.put("/:id", (req, res) => {
  User.update(
    {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password, 
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedUser) => {
      res.json(updatedUser);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});
// Delete an user
router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    await user.remove();
    res.json({ message: 'User deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    if (!userData) {
      return res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
    }

    const passwordCheck = await userData.checkPassword(req.body.password);

    if (!passwordCheck) {
      return res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
    }

    req.session.logged_in = true;
    req.session.user_id = userData.id;
    return res.render("homepage");
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "some error", err: err });
  }
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});
module.exports = router;

// router.post('/', async (req, res) => {
//   const user = new User({
//     name: req.body.name,
//     email: req.body.email,
//     password: req.body.password
//   });
//   console.log("test");
//   try {
//     const newUser = await user.save();
//     res.status(201).json(newUser);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });