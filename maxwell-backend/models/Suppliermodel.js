const mongoose = require('mongoose')

const SupplierSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    gst: {
        type:String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    
    
   
}, {
    timestamps: true
})

module.exports = mongoose.model('Supplier', SupplierSchema)