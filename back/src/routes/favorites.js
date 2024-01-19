const router = require('express').Router()
const {addFav, deleteFav} = require('../controllers/favorites')

router.post("/", addFav)
router.delete("/:id", deleteFav)

module.exports = router