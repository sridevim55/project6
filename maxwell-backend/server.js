const mongoose = require('mongoose')
const express =  require ('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())
// Routes
app.use('/user', require('./router/Userrouter')) 
app.use('/supplier',require('./router/Supplierrouter'))
app.use('/supplier_b',require('./router/Supplier_broute'))
app.use('/purchase',require('./router/Purchaseroute'))
app.use('/payment',require('./router/Payment'))
app.use('/bill',require('./router/Bill_route'))
app.use('/message',require('./router/Message'))
// Connect to mongodb
const URI = "mongodb+srv://Gowri:gowri1234@cluster0.mopwwma.mongodb.net/maxwell?retryWrites=true&w=majority"
mongoose.connect(URI, {
    useNewUrlParser: true,  

    useUnifiedTopology: true 
}, err =>{
    if(err) throw err;
    console.log('Connected to MongoDB')
})
app.listen(4000,()=>console.log("server started"))