$(document).ready(function(){
Fingerprint.show({
      description: "Place Finger on Scanner"
    }, successCallback, errorCallback);
 
    function successCallback(){
      window.location.replace("walletpick.html");
    }
 
    function errorCallback(error){
      alert("Authentication invalid " + error.message);
    }	
});