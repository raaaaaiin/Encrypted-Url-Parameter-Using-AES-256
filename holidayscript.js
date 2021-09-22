var newWindow;
var w, h = 0;
var width = window.innerWidth;
var height = window.innerHeight;
var encrypted
//Dont mind the encryption and decytpion maam i just made this 
//because im not comfortable seeing variable getting passed in ascii form at url 
//i use hash encryption Sakuranbo as a key and dontpwnme4 as salt
function callEvent(eventFile, eventName){
 encrypted =  CryptoJS.AES.encrypt("?varimg="+eventFile+"&title="+eventName,"dontpwnme4", "Sakuranbo");
 //i managed to create a template for all event and using DOM i did edit the attributes of title and source of background image. i did passed the data from html to html using custom html parameter check the getParam() function i open the template with variables indicated on its url and eventTemp will decrypt and read the data and convert it to original variable so it will be able to read the current event clicked
 newWindow = open("eventTemp.html?"+encrypted, eventFile, "width=640, height=480");
 w = width / 2;
 h = height / 2;
 newWindow.moveBy(w-300, h-200);
 newWindow.focus();
}
