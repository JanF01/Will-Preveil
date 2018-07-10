
var canvas;

let timesFont;


var l=0;

var skinP = new Array(3);
var arrows = new Array(4);
var cSkin;
var block;
var botharrows;

function preload(){
  for(let i=0;i<skinP.length;i++){
    skinP[i] = new Array(3);
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


  arrows[0]     = loadImage('pics/arrowtop.png');
  arrows[1]     = loadImage('pics/arrowright.png');
  arrows[2]     = loadImage('pics/arrowbottom.png');
  arrows[3]     = loadImage('pics/arrowleft.png');

  cSkin = loadImage('pics/cmode.png');
  block = loadImage('pics/block.png');

  botharrows = loadImage('pics/botharrows.png');


  timesFont     = loadFont('fonts/goodx.ttf');
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

 play();
}
