const router = require('express').Router()
const {login} = require('../controllers/users')

router.get("/login", login)

module.exports = router