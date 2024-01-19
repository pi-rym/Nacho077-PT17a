const router = require('express').Router()
const userRouter  = require('./users')
const charactersRouter = require('./characters')
const favoritesRouter = require('./favorites')

router.use("/users", userRouter)
router.use("/character", charactersRouter)
router.use("/favorites", favoritesRouter)

module.exports = router