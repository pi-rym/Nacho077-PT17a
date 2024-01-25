const service = require('../service/getCharacters')

const getCharacterByID = async (req, res) => {
    const {id} = req.params

    try {
        const character = await service.getCharacterByID(id)

        return res.status(200).json(character)
    } catch(error) {
        if(error.message == "Character Not Found") {
            return res.status(404).send("Character Not Found")
        }
        
        res.status(error.statusCode || 500).send(`error interno - ${error.message}`)
    }
}

module.exports = {getCharacterByID}