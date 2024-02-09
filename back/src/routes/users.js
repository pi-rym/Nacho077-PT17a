const router = require('express').Router()
const {login, register} = require('../controllers/users')

router.get("/login", login)
router.post("/register", register)

// catch (error) {
//     if (instanceof error === UserNotFound) {
//       res.status(404).json({ error: error.message });
//     } else if (error.message === "Incorrect password") {
//       res.status(403).json({ error: error.message });
//     } else {
//       res.status(500).json({ error: error.message });
//     }
//   }

module.exports = router