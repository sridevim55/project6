// const jwt = require('jsonwebtoken')
const Supplier = require('../models/Suppliermodel')
const suplCtrl = {
    add: async (req,res) =>{
        try{
        const {name,gst,phone} = req.body
        const supplier = await Supplier.findOne({gst})
            if(supplier) return res.status(400).json({msg: "The company already exists."})
            const newSupplier = new Supplier({
                name, gst, phone
            })

            // Save mongodb
            await newSupplier.save()
            //alert
            res.send("Inserted Successfully !")
        }
        catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    getdata:async(req,res)=>{
        try{
const userdata = await Supplier.find();
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
            const ind = await Supplier.findById({_id:id});
            console.log(ind);
            res.json(ind)
        }
        catch(e){

        }
    },
    update:async(req,res)=>{
        try{
const {id} = req.params;
const updateuser = await Supplier.findByIdAndUpdate(id,req.body,{
    new : true
})
console.log(updateuser)
res.send("Updated Successfully !")
        }
        catch(e){

        }
    },
    delete:async(req,res)=>{
        try{
            const {id} = req.params;
            console.log(id)
            const deleteuser = await Supplier.findByIdAndDelete({_id:id})
            // console.log(deleteuser)
            res.send("Deleted Successfully !")
                    }
                    catch(e){
            
                    }
    },
    getphone:async(req,res)=>{
        try{
            const {id} = (req.params);
            console.log("phone",typeof id)
            
            const usernumber = await Supplier.find({name:id})
            res.json(usernumber)
        }
        catch(e){
             console.log(e)
        }
    }
}
module.exports = suplCtrl