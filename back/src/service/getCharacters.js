const axios = require('axios')

const APIKEY = "henrystaff"
const getCharacterByID = async (id) => {
    // const {data} = await axios(...)
    const promise = await axios(`https://rym2.up.railway.app/api/character/${id}?key=${APIKEY}`)

    const {data, data: {name, gender, species, image, origin, status}} = promise

    if (!data.id) {
        throw Error("Character Not Found")
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

    return character
}

module.exports = {getCharacterByID}