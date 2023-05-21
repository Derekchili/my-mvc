const router = require("express").Router()

const frontEndRoutes = require('./frontEndRoutes')
router.use(frontEndRoutes)

// const posts = require('./post')
// router.use('/posts', posts)

  module.exports = router