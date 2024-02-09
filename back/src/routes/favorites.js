const router = require('express').Router()
const {addFav, deleteFav} = require('../controllers/favorites')

router.post("/:userId", addFav)
router.delete("/:id/:userId", deleteFav)

module.exports = router