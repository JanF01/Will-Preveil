var player,player2;
var colorButton;

function startGame(){
  colors[0] = new Color(canvas.width/6,color(0, 165, 145),1);
  colors[1] = new Color(canvas.width/6*2,color(236, 219, 84),2);
  colors[2] = new Color(canvas.width/6*3,color(233, 75, 60),3);
  colors[3] = new Color(canvas.width/6*4,color(191, 214, 65),4);
  colors[4] = new Color(canvas.width/6*5,color(192, 171, 142),5);
  player = new Player();
  player2 = new Player();
  colorButton = new ColorButton();
}


function showColors(){
  if(player1.pos.y<canvas.height/2 || player2.pos.y<canvas.height/2){
   for(let i=0;i<colors.length;i++){
      colors[i].draw();
      colors[i].cheak(player);
     colors[i].cheak(player2);
    }
  }
  else{
      for(let i=0;i<colors.length;i++){
    colors[i].draw();
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


  player.move();
  player.corners();
  player2.move();
  player2.corners();
  push();
  translate(-playerPos,0);
  showColors();

  if(player.pos.x<canvas.width/10) colorButton.cheak(player);
    if(player2.pos.x<canvas.width/10) colorButton.cheak(player2);
  colorButton.draw();

     player1.draw();
      player2.draw();
    
        let gravity = createVector(0,canvas.height/1000);
        player1.applyForce(gravity);
     player2.applyForce(gravity);
      if(keyIsDown(LEFT_ARROW)){
        player.vel.x=-canvas.width/300;
      }
      if(keyIsDown(RIGHT_ARROW)){
        player.vel.x=canvas.width/300;
      }
   if(keyIsDown('65')){
        player2.vel.x=-canvas.width/300;
      }
      if(keyIsDown('68')){
        player2.vel.x=canvas.width/300;
      }
  pop();

  if(player.vel.y==0 && (player.air==1 || player.air==2)){
     player.vel.x=0;
     player.air=0;
  }
    if(player2.vel.y==0 && (player2.air==1 || player2.air==2)){
     player2.vel.x=0;
     player2.air=0;
  }
}


function keyPressed(e){

  if(e.keyCode == '38'){
    player.jump();
  }
  if(e.keyCode == '87'){
    player2.jump();
  }
  if(e.keyCode == '40'){
    player.fall();
  }
   if(e.keyCode == '83'){
    player2.fall();
  }

}
function keyReleased(e){

    if(player.vel.y==0){
    if(e.keyCode=='37' || e.keyCode== '39'){
      player.stopX();
    }
  }
     if(player2.vel.y==0){
    if(e.keyCode== '65' || e.keyCode == '68'){
      player2.stopX();
    }
  }

}
