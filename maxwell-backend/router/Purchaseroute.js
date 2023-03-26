const router = require('express').Router()
const Purchase_control = require('../Controller/Purchase_control')
router.post('/add', Purchase_control.add)
router.get('/getdata',Purchase_control.getdata)
router.get('/updatepaid/:id',Purchase_control.updatepaid)
module.exports = router