var player;
var colorButton;

function startGame(){
  colors[0] = new Color(canvas.width/6,color(0, 165, 145),1);
  colors[1] = new Color(canvas.width/6*2,color(236, 219, 84),2);
  colors[2] = new Color(canvas.width/6*3,color(233, 75, 60),3);
  colors[3] = new Color(canvas.width/6*4,color(191, 214, 65),4);
  colors[4] = new Color(canvas.width/6*5,color(192, 171, 142),5);
  player = new Player();
  colorButton = new ColorButton();
}


function showColors(){
  if(player.pos.y>canvas.height/3)
  for(let i=0;i<colors.length;i++){
    colors[i].draw();
  }
  else{
   for(let i=0;i<colors.length;i++){
      colors[i].draw();
      colors[i].cheak();
    }
  }

}

function play(){
  noStroke();
  fill(16,17,25);
  rect(0,0,canvas.width,canvas.height);
  fill(255);
  rect(0,groundHeight,canvas.width,canvas.height/500);
  textSize(canvas.height/30);
  text("LEVEL:  "+l,canvas.width/10,canvas.height/1.055);


  showColors();

        if(player.pos.x<canvas.width/10) colorButton.cheak();
        colorButton.draw();


      player.draw();
    let gravity = createVector(0,canvas.height/1000);
    player.applyForce(gravity);

    if(keyIsDown('65') || keyIsDown(LEFT_ARROW)){
      player.vel.x=-canvas.width/300;
    }
    if(keyIsDown('68') || keyIsDown(RIGHT_ARROW)){
      player.vel.x=canvas.width/300;
    }

    if(player.pos.x<canvas.width/10) colorButton.cheak();
    colorButton.draw();

  player.move();
  player.corners();
  if(player.vel.y==0 && (player.air==1 || player.air==2)){
     player.vel.x=0;
     player.air=0;
  }
}


function keyPressed(e){

  if(e.keyCode == '87' || e.keyCode == '38' || e.keyCode=='32'){
    player.jump();
  }
  if(e.keyCode == '83' || e.keyCode == '40'){
    player.fall();
  }

}
function keyReleased(e){

    if(player.vel.y==0){
    if(e.keyCode== '65' || e.keyCode=='37' || e.keyCode == '68' || e.keyCode== '39'){
      player.stopX();
    }
  }

}
