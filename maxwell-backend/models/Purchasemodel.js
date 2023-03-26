const mongoose = require('mongoose')
const PurchaseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    prd: {
        type:String,
        required: true,
        trim:true
    },
    amt: {
        type:String,
        required: true,
        trim:true
    },
    paid: {
        type:Boolean,
        default:false
    }
}, {
    timestamps: true
})
module.exports = mongoose.model('Purchase',PurchaseSchema )