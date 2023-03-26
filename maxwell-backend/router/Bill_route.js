const router = require('express').Router()
const Bill_Control = require('../Controller/BillControl')
router.post('/add', Bill_Control.add)
router.get('/getdata',Bill_Control.getdata)
router.get('/getdata/:id',Bill_Control.getunique)
router.patch('/updatepaid/:id',Bill_Control.updatepaid)
module.exports = router