const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;

const request = require('request')

function setGetStartedButton(){
  return new Promise((resolve,reject)=>{
    let request_body = {
    "get_started": {"payload": "<postback_payload>"}
  }

  // Send the HTTP request to the Messenger Platform
  request({
    "uri": "https://graph.facebook.com/v8.0/me/messenger_profile",
    "qs": { "access_token": PAGE_ACCESS_TOKEN },
    "method": "POST",
    "json": request_body
  }, (err, res, body) => {
    if (!err) {
      console.log('Get Started Button Sent!')
      resolve(true)
    } else {
      console.error("Unable to send get started button:" + err);
      resolve(err)
    }
  }); 
    
  })
  
}
function setGreetingText(){
  let request_body = {
    "greeting": [
    {
      "locale":"default",
      "text":"Hello!" 
    }, {
      "locale":"en_US",
      "text":"Timeless apparel for the masses."
    }
      ]
  }

  // Send the HTTP request to the Messenger Platform
  request({
    "uri": "https://graph.facebook.com/v8.0/me/messenger_profile",
    "qs": { "access_token": PAGE_ACCESS_TOKEN },
    "method": "POST",
    "json": request_body
  }, (err, res, body) => {
    if (!err) {
      console.log('Greeting Text Sent!')
    } else {
      console.error("Unable to send greeting text:" + err);
    }
  }); 
}
setGetStartedButton().then(()=>setGreetingText());
