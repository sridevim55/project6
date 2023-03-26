const router = require('express').Router()
const Supplier_bControl = require('../Controller/Supplier_bcontrol')
// const auth = require('../middleware/auth')

router.post('/add', Supplier_bControl.add)


//get userdata
router.get("/getdata",Supplier_bControl.getdata)
router.get("/getdata/:id",Supplier_bControl.getunique)
router.patch("/updateuser/:id",Supplier_bControl.update)
router.delete("/deleteuser/:id",Supplier_bControl.delete)
module.exports = router