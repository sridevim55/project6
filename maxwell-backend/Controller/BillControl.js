const Billmodel = require('../models/Billmodel')
// const Purchasemodel=require('../models/Purchasemodel')
const Bill_ctrl = {
    add:async(req,res) =>{
        try{
            const { name,content,total,paid} = req.body
          
                const bill = new Billmodel({
                    name,content,total,paid
                })
    
                // Save mongodb
                await bill.save()
                res.json(bill)
            }
            catch(err){
                return res.status(500).json({msg: err.message})
            }
    },
    getdata:async(req,res) => {
        try{
            const userdata = await Billmodel.find({paid:false});
            console.log(userdata)
            res.json(userdata)
                    }
                    catch(error){
                        console.log(error)
                        return res.status(500).json({msg: err.message})
                    
                    }
    },
    updatepaid:async(req,res) => {
        try{
            const {id} = req.params;
            const userdata = await Billmodel.findByIdAndUpdate({
                _id:id
            },{
                paid : true
            })
        }
        catch(e){

        }
    },
    getunique:async(req,res)=>{
        try{
            console.log("ind")
            const {id} = req.params;
            console.log(id)
            const ind = await Billmodel.findById({_id:id});
            console.log(ind);
            res.json(ind)
        }
        catch(e){

        }
    },
}
module.exports = Bill_ctrl