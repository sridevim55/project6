const router = require('express').Router()
const SupplierControl = require('../Controller/SupplierControl')
// const auth = require('../middleware/auth')

router.post('/add', SupplierControl.add)
//get phone number 
router.get("/getphone/:id",SupplierControl.getphone)
router.get("/getdata",SupplierControl.getdata)
router.get("/getdata/:id",SupplierControl.getunique)
router.patch("/updateuser/:id",SupplierControl.update)
router.delete("/deleteuser/:id",SupplierControl.delete)
module.exports = router