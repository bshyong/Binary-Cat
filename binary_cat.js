// variable declarations
var x;
var y;
var xDirection = 1;
var yDirection = 1;
var layer1;
var layer2;
var layer3;
var context1;
var context2;
var context3;
var floor;
var burger0; // burger sprite with value 0
var burger1; // burger sprite with value 1
var score;
var mouth = new Array(); // array that catches burger objects for evaluation and scoring
var grill = new Array(); // array that keeps track of all current burger objects on the screen
var minDist; // keeps track of x-coordinate of previously spawned burger

// sprite initializations
var background = new Image();
background.src = "bg.jpg";
var longcat = new Image();
longcat.src = "longcat.gif";
burger0 = new Image();
burger0.src = "0.png";
burger1 = new Image();
burger1.src = "1.png";

// needed for IE support
var isIE = document.all?true:false;
if (!isIE) document.captureEvents(Event.MOUSEMOVE);

// initializes the function
window.onload = init;
// calls getMousePosition everytime the mouse moves
// x and y store the coordinates of the mouse pointer
document.onmousemove = getMousePosition;

function init()
{
	layer1 = document.getElementById('layer1');
	context1 = layer1.getContext('2d');
	context1.clearRect(0, 0, layer1.width, layer1.height);
	context1.drawImage(background, 0, 0);

	layer2 = document.getElementById('layer2');
	context2 = layer2.getContext('2d');
	context2.clearRect(0, 0, layer2.width, layer2.height);
	floor = layer2.height-100;
	setInterval(cheezburgers, 1500);

	layer3 = document.getElementById('layer3');
	context3 = layer3.getContext('2d');
	context3.clearRect(0, 0, layer3.width, layer3.height);
        context3.drawImage(longcat, 0, floor);
	setInterval(longcat_move, 10);
}

// function run(){
// 	setInterval(loop, 100);var isIE = document.all?true:false;
if (!isIE) document.captureEvents(Event.MOUSEMOVE);

// }


// function changebg(){
	
// }


function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function longcat_move(){
	
if (x>0 && x<background.width-25)	{
context3.clearRect(0, 0, layer3.width, layer3.height);
// context2.drawImage(longcat,x-25,y-90);
context3.drawImage(longcat,x-5, floor);
longcat.x = x-5;
longcat.y = floor;
}

}

function grillBurger(x,y){
var burger_count = 0;
context2.drawImage(eval("burger" + getRandomInt(0,1)), x,y); //draws a burger with either 1 or 0

burger_count++;
}

function cheezburgers(){ //generates coordinates for burgers and calls grillBurger to spawn them
var rand = getRandomInt(0,layer3.width); //generates random x-coordinate
while (Math.abs((rand-minDist))<40) //makes sure spawned burgers aren't too close to each other
{
var rand = getRandomInt(0,layer3.width); // generates a new coordinate for burger if too close to previous burger
}
grillBurger(rand, 0);
minDist = rand; // var previous keeps track of x-coordinate of last spawned burger
}

function eat(){
	
}

function check(){
	
}

function getMousePosition(e) {
  var _x;
  var _y;
  if (!isIE) {
    _x = e.pageX;
    _y = e.pageY;
  }
  if (isIE) {
    _x = event.clientX + document.body.scrollLeft;
    _y = event.clientY + document.body.scrollTop;
  }
  x = _x;
  y = _y;
  return true;
}