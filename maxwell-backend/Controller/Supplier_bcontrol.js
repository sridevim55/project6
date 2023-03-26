// const jwt = require('jsonwebtoken')
const Supplier_bmodel = require('../models/Supplier_bmodel')
const supl_bCtrl = {
    add: async (req,res) =>{
        try{
        const {name,gst,phone,acc,ifsc,bankname} = req.body
        const supplier_b = await Supplier_bmodel.findOne({gst})
            if(supplier_b) return res.status(400).json({msg: "The company already exists."})
            const newSupplier_b = new Supplier_bmodel({
                name, gst, phone,acc,ifsc,bankname
            })

            // Save mongodb
            await newSupplier_b.save()
            //alert
            res.send("Inserted Successfully 😊")
        }
        catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    getdata:async(req,res)=>{
        try{
const userdata = await Supplier_bmodel.find();
console.log(userdata)
res.json(userdata)
        }
        catch(error){
            console.log(error)
            return res.status(500).json({msg: err.message})
        
        }
    },
    getunique:async(req,res)=>{
        try{
            console.log("ind")
            const {id} = req.params;
            console.log(id)
            const ind = await Supplier_bmodel.findById({_id:id});
            console.log(ind);
            res.json(ind)
        }
        catch(e){

        }
    },
    update:async(req,res)=>{
        try{
const {id} = req.params;
const updateuser = await Supplier_bmodel.findByIdAndUpdate(id,req.body,{
    new : true
})
console.log("update",updateuser)
res.send("Update Successfully !")
        }
        catch(e){

        }
    },
    delete:async(req,res)=>{
        try{
            const {id} = req.params;
            const deleteuser = await Supplier_bmodel.findByIdAndDelete({_id:id})
            console.log(deleteuser)
                    }
                    catch(e){
            
                    }
    }
}

module.exports = supl_bCtrl