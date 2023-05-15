const router = require("express").Router()

const frontEndRoutes = require('./frontEndRoutes')
router.use(frontEndRoutes)

// const blogposts = require('./blogpost')
// router.use('/blogposts', blogposts)

  module.exports = router