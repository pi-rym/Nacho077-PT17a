var db = require('../utils/dbFavs')

const addFav = (req, res) => {
    const {name, id, gender, image, status, origin} = req.body

    if(!name || !id || !gender || !image || !status || !origin) {
        return res.status(400).json({message: "That isnt a character"})
    }

    const characterFind = db.find(character => character.id == id)
    if (characterFind) {
        return res.status(400).json({message: "Character already in favorites"})
    }

    db.push({name, id, gender, image, status, origin})

    res.status(200).json(db)
}

const deleteFav = (req, res) => {
    const { id } = req.params

    const characterFind = db.find(character => character.id == id)
    if(!characterFind) {
        return res.status(400).json({message: "That character doesnt exist in favorites"})
    }

    db = db.filter(character => character.id != id)

    res.status(200).json(db)
}

module.exports = {addFav, deleteFav}