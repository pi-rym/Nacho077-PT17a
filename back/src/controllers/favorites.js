var db = require('../utils/dbFavs')
const { Favorite, UserFavorites, User } = require('../DB_connection')

const addFav = async (req, res) => {
    const {userId} = req.params
    const {name, id, gender, image, status, origin, species} = req.body

    if(!name || !id || !gender || !image || !status || !origin || !species) {
        return res.status(400).json({message: "That isnt a character"})
    }

    try {
        const [favorite] = await Favorite.findOrCreate({
            where: {id: id},
            defaults: {
                name: name,
                gender: gender,
                image: image,
                status: status,
                origin: origin,
                species: species
            }
        })

        // favorite.addUser()
        const [relation, created] = await UserFavorites.findOrCreate({
            where: {
                userId: userId,
                favoriteId: favorite.id
            }
        })

        if(!created) {
            return res.status(400).json({message: "Favorite already exists"})
        }

        // const allFavorites = await UserFavorites.findAll({
        //     where: {
        //         userId: userId
        //     },
        //     include: {
        //         model: Favorite,
        //         attributes: ["name"]
        //     }
        // })

        const allFavorites = await Favorite.findAll({
            include: [{
                model: User,
                where: {
                    id: userId
                },
                attributes: {
                    exclude: ['id']
                },
            }]
        })

        res.status(201).json(allFavorites.map(({name, id, gender, image, status, origin, species}) => (
                {name, id, gender, image, status, origin, species}
                )))
    } catch (e) {
        res.status(500).json({message: e.message})
    }
}

// const addFav = (req, res) => {
//     const {name, id, gender, image, status, origin} = req.body

//     if(!name || !id || !gender || !image || !status || !origin) {
//         return res.status(400).json({message: "That isnt a character"})
//     }

//     const characterFind = db.find(character => character.id == id)
//     if (characterFind) {
//         return res.status(400).json({message: "Character already in favorites"})
//     }

//     db.push({name, id, gender, image, status, origin})

//     res.status(200).json(db)
// }

const deleteFav = async (req, res) => {
    const { id, userId } = req.params

    try {
        await UserFavorites.destroy({
            where: {
                userId: userId,
                favoriteId: id
            }
        })

        const allFavorites = await Favorite.findAll({
            include: [{
                model: User,
                where: {
                    id: userId
                }
            }],
        })

        res.status(200).json(allFavorites.map(({name, id, gender, image, status, origin, species}) => (
                {name, id, gender, image, status, origin, species}
                )))
    } catch (e) {
        res.status(500).json({message: e.message})
    }
}

// const deleteFav = (req, res) => {
//     const { id } = req.params

//     const characterFind = db.find(character => character.id == id)
//     if(!characterFind) {
//         return res.status(400).json({message: "That character doesnt exist in favorites"})
//     }

//     db = db.filter(character => character.id != id)

//     res.status(200).json(db)
// }

module.exports = {addFav, deleteFav}