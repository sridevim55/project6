const router = require('express').Router()
const Usercontrol = require('../Controller/Usercontrol')
// const auth = require('../middleware/auth')

router.post('/register', Usercontrol.register)

router.post('/login', Usercontrol.login)

router.get('/logout', Usercontrol.logout)

router.get('/refresh_token', Usercontrol.refreshToken)



module.exports = router