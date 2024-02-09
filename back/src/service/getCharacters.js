const axios = require('axios')
const myProcess = process.env

const getCharacterByID = async (id) => {
    // const {data} = await axios(...)
    // console.log(myProcess)
    // console.log(`${myProcess.API_URL}/character/${id}?key=${myProcess.API_KEY}`)
    const promise = await axios(`${myProcess.API_URL}/character/${id}?key=${myProcess.API_KEY}`)

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