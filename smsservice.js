var isInitiated=false;

function sendSmsService(number){
    initiateSMS();
    console.log("sms initiated to "+number);
    sendSMS(number);
    
    

}
function verifySmsService(number,code){
    if(isInitiated){
        console.log("verify initiated to code"+code);
        return verifySMS(number,code);
    }
    else{
        console.log("SMS not initiated");
        return "SMS not initated";
    }
}
function sendSMS(number){
    console.log("number recieved "+number);
    url = "http://localhost:3000/login?phonenumber="+number+"&channel=sms";
    const request = require('request');
    request(url, { json: true }, (err, res, body) => {
    if (err) { 
        console.log(err);
        
        }
    console.log(body);
     
    
    });
    

}
function verifySMS(number,code){
    
    console.log("otp recieved "+code);
    url = "http://localhost:3000/verify?phonenumber="+number+"&code="+code+"";
    const request = require('request');
    request(url, { json: true }, (err, res, body) => {
    if (err) { return console.log(err);}
    console.log(body);
    
    
    });
   
}

function initiateSMS(){
    const serviceID = "VA8359a0fd57a65413af07b893515ae12e"
    const accountSID = "AC6819eb3f4e4b4206c1742b26c897b591"
    const authToken = "f7048811e5ad0799e5d16d3eb556c17f"
    const express = require('express')
    const app = express()
    const port = 3000
    
    const client = require('twilio')(accountSID, authToken)
    
    client.verify.services(process.env.SERVICE_ID)
                 .verifications
                 .create({to: '+919502940522', channel: 'sms'})
                 .then(verification => console.log(verification.status));
    
    // /login
    //     - phone number
    //     - channel (sms/call)
    
    // /verify
    //     - phone number
    //     - code
    
    app.get('/', (req, res)=>{
        res.status(200).send({
            message: "You are on Homepage",
            info: {
                login: "Send verification code through /login . It contains two params i.e. phonenumber and channel(sms/call)",
                verify: "Verify the recieved code through /verify . It contains two params i.e. phonenumber and code"
            }
        })
    })
    
    
    // Login Endpoint
    app.get('/login', (req,res) => {
         if (req.query.phonenumber) {
            client
            .verify
            .services(serviceID)
            .verifications
            .create({
                to: `+${req.query.phonenumber}`,
                channel: req.query.channel==='call' ? 'call' : 'sms' 
            })
            .then(data => {
                res.status(200).send({
                    message: "Verification is sent!!",
                    phonenumber: req.query.phonenumber,
                    data
                })
            }) 
         } else {
            res.status(400).send({
                message: "Wrong phone number :(",
                phonenumber: req.query.phonenumber,
                data
            })
         }
    })
    
    // Verify Endpoint
    app.get('/verify', (req, res) => {
        if (req.query.phonenumber && (req.query.code).length === 6) {
            client
                .verify
                .services(serviceID)
                .verificationChecks
                .create({
                    to: `+${req.query.phonenumber}`,
                    code: req.query.code
                })
                .then(data => {
                    if (data.status === "approved") {
                        res.status(200).send({
                            message: "User is Verified!!",
                            data
                        })
                    }
                })
        } else {
            res.status(400).send({
                message: "Wrong phone number or code :(",
                phonenumber: req.query.phonenumber,
                data
            })
        }
    })
    
    // listen to the server at 3000 port
    app.listen(port, () => {
        console.log(`Server is running at ${port}`)
    })
    isInitiated = true;
}
 module.exports = {sendSmsService,verifySmsService};