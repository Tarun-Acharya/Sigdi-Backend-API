const SendSMS = require('./smsservice');
const DataBase = require('./database');
var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
var schema = buildSchema(`
  scalar JSON
  type Query {
    storeNumber(number: String) : String
    verifyOtp(number:String,code:String) :String
    getCustomerInfo(id: String) : JSON
    getSellerInfo(id: String) : JSON
    getSellersPreview(id:String) : JSON
    
    getSellersInfo(id: String) : JSON
    }
  `);

var verifyOtpFunc = function(args){
    if(!isNaN(args.number)&&!isNaN(args.code)){
        console.log(args.number+" "+args.code);
        return SendSMS.verifySmsService(""+args.number,""+args.code);
    }
    return "not a number";
}
 
var storeNumberFunc = function(args){
    if(!isNaN(args.number)){
        //console.log(args.number);
       //return SendSMS.sendSmsService(ar);
         SendSMS.sendSmsService(""+args.number);
         return "abc"
        }
    return "not a number";
}
var getCustomerInfoFunc = function(args){
  return DataBase.getCustomerDB(args.id);
   
}
var getSellersInfoFunc = function(args){
  return DataBase.getSellersDB(args.id);
   
}
var getSellersPreviewFunc = function(args){
  return DataBase.getSellersPreview(args.id);
}
var getSellerInfoFunc = function(args){
  return DataBase.getSellerInfo(args.id);
}
var orderReceivedFunc = function(args){
  return DataBase.getSellerInfo(args.id);
}
var root = { 
    storeNumber: storeNumberFunc,
    verifyOtp: verifyOtpFunc,
    getCustomerInfo: getCustomerInfoFunc,
    getSellersInfo:getSellersInfoFunc,
    getSellersPreview:getSellersPreviewFunc,
    getSellerInfo: getSellerInfoFunc,

   
    };

 
var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql')); 

