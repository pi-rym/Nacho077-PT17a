const db = require('../utils/dbUsers')
const { User } = require('../DB_connection')

const register = async (req, res) => {
    const {email, password} = req.body

    if (!email || !password) {
        res.status(400).json({message: "Incomplete data"})
    }

    try {
        const [user, created] = await User.findOrCreate({
            where: {
                email: email
            }, // {email:email}
            defaults: {
                password: password
            }
        })

        if (!created) {
            return res.status(400).json({message: "User already exists"})
        }

        res.status(201).json({access: true, userId: user.id})
    } catch (e) {
        res.status(500).json({message: e.mesage})
    }
}

const login = async (req, res) => {
    const { email, password } = req.query

    if (!email || !password) {
        res.status(400).json({message: "Incomplete data"})
    }

    try {
        const userFind = await User.findOne({
            where: {
                email: email
            }
        })

        if (!userFind) {
            return res.status(404).json({message: "User not found"}) // throw new UserNotFoundError()
        }
        
        const auth = userFind.password == password

        if (!auth) {
            return res.status(403).json({message: "Incorrect password"})
        }

        res.status(200).json({access: auth})
    } catch(e) {
        res.status(500).json({message: e.mesage})
    }
}

// const login = (req, res) => {
//     const { user, password } = req.query

//     const userFind = db.find((userDB) => userDB.user == user && userDB.password == password)

//     res.status(200).json({access: !!userFind})
// }

module.exports = {
    login,
    register
}
