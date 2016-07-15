exports.checkMessage = function(req,res){
	var passcode = require("passcode");
	var TWILIO_ACCOUNT_SID = "####"; //use your twilio sid here
	var TWILIO_AUTH_TOKEN = "####"; //use your twilio auth token here
	var number = "####"; //your twilio number
	var client = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
	
//	####you can use random number also as otp###
//  var token = Math.floor(100000 + Math.random() * 900000);
//  console.log('token: '+token);
    
//	#### using passcode.js to generate encrypted token ####
	var token = passcode.hotp({
	  secret: "xyzzy",
	  counter: 123
	});
	console.log('token: '+token);
	client.sendSms({
	  to: "####", // add the number you want to send the message with country code 
	  from: number,
	  body: "Twilio and passcode demo for login authentication:!"+token
	}, function(error, message){
	    if(!error){
	      console.log('Success!');
	      console.log(message.sid);
	      console.log('Message sent on: ', message.dateCreated);
	      res.render('index',{message:"Message send successfully"});
	    } else {
	      console.log(error);
	      console.log('Oops, there was an error!');
	      res.render('index',{message:"Sorry, there is an error:"+error});
	    }
	});
}
