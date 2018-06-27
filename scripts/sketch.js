
var canvas;
var timesFont;


var l=0;
var colors = [];
var canvasOpacity=255;
var groundHeight;
var playerPos = 0;
var bloc;

function preload(){
  timesFont = loadFont('fonts/goodx.ttf');
  bloc = loadImage('pics/block.png');
}

function setup(){
  canvas = createCanvas(windowWidth,windowHeight);

  background(8, 8.6, 14);
  frameRate(90);
  textFont(timesFont);


  groundHeight = canvas.height/1.125;

  startGame();

}

function draw(){
  background(14,15,20,canvasOpacity);

      play();

}
