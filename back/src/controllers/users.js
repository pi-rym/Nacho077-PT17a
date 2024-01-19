const db = require('../utils/dbUsers')

const login = (req, res) => {
    const { user, password } = req.query

    const userFind = db.find((userDB) => userDB.user == user && userDB.password == password)

    res.status(200).json({access: !!userFind})
}

module.exports = {login}
