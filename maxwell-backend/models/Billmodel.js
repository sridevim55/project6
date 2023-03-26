const mongoose = require('mongoose')
const BillSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    content:{
        type:Object,
        required:true
    },
    
    total : {
        type:String,
        required:true,
    },
    paid : {
        type:Boolean,
        required:true
    }

}, {
    timestamps: true
})
module.exports = mongoose.model('Bill',BillSchema )