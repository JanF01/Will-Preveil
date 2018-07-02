
var canvas;
var timesFont;


var l=0;
var canvasOpacity=255;
var groundHeight;
var playerPos = 0;

var skinP = new Array(3);

function preload(){
  for(let i=0;i<skinP.length;i++){
  skinP[i] = new Array(4);
}

skinP[0][0]   = loadImage('pics/p1l.png');
skinP[0][1]   = loadImage('pics/p1o.png');
skinP[0][2]   = loadImage('pics/p1r.png');
skinP[1][0]   = loadImage('pics/p2l.png');
skinP[1][1]   = loadImage('pics/p2o.png');
skinP[1][2]   = loadImage('pics/p2r.png');
skinP[2][0]   = loadImage('pics/p3l.png');
skinP[2][1]   = loadImage('pics/p3o.png');
skinP[2][2]   = loadImage('pics/p3r.png');
  timesFont = loadFont('fonts/goodx.ttf');
}

function setup(){
  canvas = createCanvas(windowWidth,windowHeight);

  background(8, 8.6, 14);
  frameRate(60);
  textFont(timesFont);


  groundHeight = canvas.height/1.125;

  startGame();

}

function draw(){
  background(14,15,20,canvasOpacity);

      play();

}
