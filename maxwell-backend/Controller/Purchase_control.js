const Purchasemodel = require('../models/Purchasemodel')
const Pur_ctrl = {
    add:async(req,res) =>{
        try{
            const {name,prd,amt,paid} = req.body
          
                const purchase = new Purchasemodel({
                    name,prd,amt,paid
                })
    
                // Save mongodb
                await purchase.save()
            }
            catch(err){
                return res.status(500).json({msg: err.message})
            }
    },
    getdata:async(req,res) =>{
        try{
            const userdata = await Purchasemodel.find({paid:false});
            console.log("get data",userdata)
            res.json(userdata)
                    }
                    catch(error){
                        console.log(error)
                        return res.status(500).json({msg: err.message})
                    
                    }
    },
    updatepaid:async(req,rea)=>{
        try{
            console.log("paid")
            const {id} = req.params;
            const userdata = await Purchasemodel.findByIdAndUpdate({
              _id:id  
            },
            {
                paid:true
            });
          if(userdata)
          {
            userdata.paid=true;
            userdata.save();
          }
            console.log(userdata)
        }
        catch(e){

        }
}
}
module.exports = Pur_ctrl