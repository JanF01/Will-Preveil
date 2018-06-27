var players = [];
var colorButton;
var blocks = [];

function startGame(){
  colors[0] = new Color(canvas.width/6,color(0, 165, 145),1);
  colors[1] = new Color(canvas.width/6*2,color(236, 219, 84),2);
  colors[2] = new Color(canvas.width/6*3,color(233, 75, 60),3);
  colors[3] = new Color(canvas.width/6*4,color(191, 214, 65),4);
  colors[4] = new Color(canvas.width/6*5,color(192, 171, 142),5);
  players[0] = new Player();
  players[1] = new Player();
  colorButton = new ColorButton();
  blocks[0] = new Block(canvas.width*0.8,canvas.height/1.4,1);
  blocks[1] = new Block(canvas.width*1.15,canvas.height/1.65,2);
  blocks[2] = new Block(canvas.width*1.4,canvas.height/1.9,3);
}

function showColors(){
  if(players[0].pos.y<canvas.height/2 || players[1].pos.y<canvas.height/2){
   for(let i=0;i<colors.length;i++){
      colors[i].draw();
      colors[i].cheak(players[0]);
     colors[i].cheak(players[1]);
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



 for(let i=0;i<players.length;i++){
  players[i].move();
  players[i].corners();
}



  push();
  translate(-playerPos,0);
  showColors();

  if(players[0].pos.x<canvas.width/10) colorButton.cheak(players[0]);
    if(players[1].pos.x<canvas.width/10) colorButton.cheak(players[1]);

  colorButton.draw();

  for(let i=0;i<blocks.length;i++){
blocks[i].draw();
for(let j=0;j<players.length;j++){
blocks[i].cheak(players[j]);
blocks[i].changePos(players[j]);
}
}

     players[0].draw();
      players[1].draw();

        let gravity = createVector(0,canvas.height/1000);
        if(!players[0].on || players[0].air>0) players[0].applyForce(gravity);
        if(!players[1].on || players[1].air>0) players[1].applyForce(gravity);

        if(players[0].air!=3){
      if(keyIsDown(LEFT_ARROW)){
        players[0].vel.x=-canvas.width/300;
      }
      if(keyIsDown(RIGHT_ARROW)){
        players[0].vel.x=canvas.width/300;
      }
    }
        if(players[1].air!=3){
   if(keyIsDown('65')){
        players[1].vel.x=-canvas.width/300;
      }
      if(keyIsDown('68')){
        players[1].vel.x=canvas.width/300;
      }
        }


  textSize(canvas.height/25)
  stroke(255);
  fill(12,20,37);
  text("CLICK ON A PLATFORM TO MOVE IT",canvas.width*1.2,canvas.height/8);
  pop();

 for(let i=0;i<players.length;i++){
  if(players[i].vel.y==0 && (players[i].air==1 || players[i].air==2 || players[i].air==3)){
     players[i].vel.x=0;
     players[i].air=0;
  }
}

}


function keyPressed(e){

  if(e.keyCode == '38'){
    players[0].jump();
  }
  if(e.keyCode == '87'){
    players[1].jump();
  }
  if(e.keyCode == '40'){
    players[0].fall();
  }
   if(e.keyCode == '83'){
    players[1].fall();
  }

}
function keyReleased(e){

    if(players[0].vel.y==0){
    if(e.keyCode=='37' || e.keyCode== '39'){
      players[0].stopX();
    }
  }
     if(players[1].vel.y==0){
    if(e.keyCode== '65' || e.keyCode == '68'){
      players[1].stopX();
    }
  }

}

function mousePressed(){
  for(let i=0;i<blocks.length;i++){
     blocks[i].bind();
  }
}
