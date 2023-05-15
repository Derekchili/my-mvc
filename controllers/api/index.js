const router = require('express').Router();


// Import routes for blog posts, comments, sessions, and users
const blogPostRoutes = require('./blogpost');
const commentRoutes = require('./comments');

const userRoutes = require('./user');

// Use the imported routes
router.use('/blogposts', blogPostRoutes);
router.use('/comments', commentRoutes);

router.use('/users', userRoutes);

module.exports = router;

