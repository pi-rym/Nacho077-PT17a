const router = require('express').Router()
const { getCharacterByID } = require('../controllers/getCharacters')

router.get("/:id", getCharacterByID)

module.exports = router

