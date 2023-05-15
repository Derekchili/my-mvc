const express = require('express');
const router = express.Router();
const { Comment } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const comments = await Comment.findAll({
    });
   
    if (comments.length===0){
      return res.status(404).json({ msg: 'no comments in database'});
    }
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new comment
router.post('/', async (req, res) => {
  try {
    const newComment ={
      title: req.body.title,
      content: req.body.content
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
