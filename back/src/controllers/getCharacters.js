const axios = require("axios")

const APIKEY = "henrystaff"
const getCharacterByID = (req, res) => {
    const {id} = req.params

    const promise = axios(`https://rym2.up.railway.app/api/character/${id}?key=${APIKEY}`)
    promise.then(({data: {id, name, gender, species, image, origin, status}}) => {
        if (!id) {
            res.status(404).send("Character Not Found")
        }

        const character = {
            id,
            name,
            gender,
            species,
            origin, 
            image,
            status 
        }
        res.status(200).json(character)
    })
    promise.catch(err => {
        res.status(500).send(`error interno - ${err.message}`)
    })
}

module.exports = {getCharacterByID}