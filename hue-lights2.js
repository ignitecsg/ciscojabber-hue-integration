function OnTelephonyConversationStateChanged(json) {
 var myDiv = document.getElementById("ctilog");
    var conversation = JSON.parse(json);
    
    // Turn the lights on for an incoming call
    if (conversation.callType == "Placed" || conversation.acceptanceState == "Pending" && conversation.state == "Started") {
     myDiv.innerHTML += "Turning Lights On";
   $.ajax({
    url: 'http://10.8.24.13/api/5KGNB7NIIFGJ4Tbu7u-OoyHQ5W5tnQfP66YMqY4V/lights/4/state',
    type: 'PUT',
    data: '{"on":true}',
    success: function(response) {
     myDiv.innerHTML += "Hue Response:" + JSON.stringify(response) + "";
    }
   });
  }
  
  // Turn the lights off when the call ends
  if (conversation.state == "Ended") {
   myDiv.innerHTML += "Turning Lights Off ";
   $.ajax({
    url: 'http://10.8.24.13/api/5KGNB7NIIFGJ4Tbu7u-OoyHQ5W5tnQfP66YMqY4V/lights/4/state',
    type: 'PUT',
    data: '{"on":false}',
    success: function(response) {
     myDiv.innerHTML += "Hue Response: " + JSON.stringify(response) + "";
    }
   });
  }
}