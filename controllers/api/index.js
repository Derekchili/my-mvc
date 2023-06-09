const router = require('express').Router();


// Import routes for blog posts, comments, sessions, and users
const PostRoutes = require('./post');
// const commentRoutes = require('./comments');

const userRoutes = require('./user');

// Use the imported routes
router.use('/posts', PostRoutes);
// router.use('/Comments', commentRoutes);

router.use('/user', userRoutes);

module.exports = router;

