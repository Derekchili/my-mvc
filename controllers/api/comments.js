const express = require('express');
const router = express.Router();
const { Post, User, Comments } = require('../../models');

router.get("/", async (req, res) => {
  // find all Users
  try {
    const users = await User.findAll({
      include: [Comments, Post],
    });
    if (users.length < 1) {
      return res
        .status(404)
        .json({ message: "There are no users in your database" });
    } else {
      res.json(users);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", (req, res) => {
  Comment.findByPk(req.params.id)
    .then((comments) => {
      if (!comments) {
      return res
      .status(404)
      .json({ msg: "no post with that id in database!" });
      }
      res.json(comments);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "error occurred", err });
    });
});
// Create a new comment
router.post('/', async (req, res) => {
  try {
    const newComment ={
      commentContent: req.body.content,
      userId: req.body.userId
    }
    

    const dbResponse = await Comment.create(newComment);

    res.status(201).json(dbResponse);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error while creating comment' });
  }
});

// Update an existing comment by ID
router.put('/:id', async (req, res) => {
  try {
    const [updatedComment] = await Comment.update(req.body, {
      where: { id: req.params.id },
    });
    if (updatedComment === 0) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    res.status(200).json({ message: 'Comment updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error while updating comment' });
  }
});

// Delete an existing comment by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedComment = await Comment.destroy({
      where: { id: req.params.id },
    });
    if (deletedComment === 0) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    res.status(200).json({ message: 'Comment deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error while deleting comment' });
  }
});

module.exports = router;
// router.get('/', async (req, res) => {
//   console.log("Comments:", Comments);
//   try {
//     const comments = await Comment.findAll({
//       include: [User, Post],
//     });
   
//     if (comments.length===0){
//       return res.status(404).json({ msg: 'no comments in database'});
//     }
//     res.json(comments);
//   } catch (err) {
//     console.log("err:", err);
//     res.status(500).json({ message: err.message });
//   }
// });