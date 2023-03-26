const mongoose = require('mongoose')

const Supplier_bSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    gst: {
        type: Number,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true
    },
    acc: {
        type: String,
        required: true
    },
    ifsc: {
        type: String,
        required: true
    },
    bankname: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Supplier_buying', Supplier_bSchema)