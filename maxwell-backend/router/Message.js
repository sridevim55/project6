const router = require('express').Router()

const express = require('express'); 
const cors = require('cors');
const twilio = require('twilio'); 

//requirements
const accountSid = 'ACedf69eb9a492fbb2b0c5798e3ec6ca72';
const authToken = 'e2d4ee346611508b1eea24996d423d0c'; 
const client = new twilio(accountSid, authToken);

// const app = express(); //alias
router.use(cors()); //Blocks browser from restricting any data
//Welcome Page for the Server 
router.get('/', (req, res) => {
    res.send('Welcome to the Express Server')
})

//Twilio 
router.get('/sendtext/:id', (req, res) => {
    //Welcome Message
    try{
        const {id} = req.params
    // res.send('Hello to the Twilio Server')

    //GET Variables
    // const { recipient, textmessage } = req.query;


    //Send Text
    const s = "+91"+id
    console.log(s)
    client.messages.create({
        body: "Your Payment is still pending.Check to the bill and transfer the amount",
        to: s,  // Text this number
        from: '+18305328763' // From a valid Twilio number
    }).then((message) => console.log(message.body));
    return res.status(200).json("Message sent successfully !")
}
catch(e){
    console.log("error message",e)
}
})
module.exports = router