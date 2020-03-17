// Create variables for the welcome message
var greeting = "[not initialized]";
var name = "[not initialized]";
var message = "[not initialized]";
// Concatenate the three variables above to create the welcome message
var welcome = greeting + name + message;

// Create variables to hold details about the sign
var sign = "[not initialized]";
var tiles;
var subTotal;
var shipping;
var grandTotal;

//function to initialize variables
function initiateVars() {
  greeting = "Howdy ";
  name = "Ben, ";
  message = "enjoy your order: ";
  sign = "Davis House";
  welcome = greeting + name + message;
  tiles = sign.length;
  subTotal = tiles * 5;
  shipping = 7;
  grandTotal = subTotal + shipping;
}

function setTextContentById(getId, setText) {
  // Get the element that has an id of greeting
  var el = document.getElementById(getId);
  // Replace the content of that element with the personalized welcome message
  el.textContent = setText;
}

//function to set default variables
function defaultVars() {
  greeting = "[not initialized]";
  name = "[not initialized]";
  message = "[not initialized]";
  sign = "[not initialized]";
  welcome = greeting + name + message;
  tiles = sign.length;
  subTotal = tiles * 5;
  shipping = 7;
  grandTotal = subTotal + shipping;
}
//iffy with function calls
(function(){
  initiateVars();
  setTextContentById("greeting", welcome);
  setTextContentById("userSign", sign);
  setTextContentById("tiles", tiles);
  setTextByContentId("subTotal", "$" + subTotal);
  setTextContentById("shipping", "$" + shipping);
  setTextContentById("grandTotal", grandTotal);
})();

document.getElementByClass("action").addEventListener("click", function(event){
  defaultVars();
  event.preventDefault()});