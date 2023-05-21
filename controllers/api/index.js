const router = require('express').Router();


// Import routes for blog posts, comments, sessions, and users
const PostRoutes = require('./post');
const commentRoutes = require('./comments');

const userRoutes = require('./user');

// Use the imported routes
router.use('/Posts', PostRoutes);
router.use('/Comments', commentRoutes);

router.use('/User', userRoutes);

module.exports = router;

