var player;
var skins = [];
var platforms = [];
var colorButton;
var groundHeight;
var playerPos=0,playerPosY=0;

function startGame() {

  createSkins(skinP.length,skinP);
  createPlayer();
  createButton();


  for(let i=0;i<10;i++){
  createPlatform( canvas.width * (1.1+i/5), canvas.height / (1.9+i/3),canvas.height/4.5,canvas.height/18,120,10,190);
   }

  for(let i=0;i<10;i++){
  createPlatform( canvas.width * (3+i/4.5),- canvas.height*(i/7),canvas.height/4.5,canvas.height/18,100,10,200);
  }


}


function showSkins() {
  if (player.pos.y > canvas.height / 3 || player.pos.y<0) {
      skins.forEach((skin)=>{skin.draw();})
  } else {
      skins.forEach((skin)=>{
        skin.draw();
        if(!player.cMode)skin.cheak();
      })
  }

}

function drawPlatforms(){
  if(player.cMode){
    platforms.forEach((plt)=>{
      plt.changePos();
      plt.draw();
  });
  }
  else{
    platforms.forEach((plt)=>{
        plt.changePos();
        plt.draw();
        plt.cheak();
    });
  }
}

function play() {
  background(17, 17, 25);
  fill(255);
  textSize(canvas.height / 30);
  text("LEVEL:  " + l, canvas.width / 10, canvas.height / 1.055);


        player.move();
        player.corners();


  push();
  translate(-playerPos,-playerPosY);

  rect(playerPos, groundHeight, canvas.width, canvas.height / 500);
  textSize(canvas.height / 25)
  noStroke();
  fill(255,200);
  text("CLICK ON A PLATFORM TO MOVE IT", canvas.width * 1.2, canvas.height / 12);
  text("DOUBLE CLICK TO CHANGE SIZE OR COLOR", canvas.width * 1.2, canvas.height / 6.8);
  text("CLICK \"G\" TO TURN ON THE CREATIVE MODE", canvas.width * 1.2, canvas.height / 4.5);

  drawPlatforms();
  showSkins();

  player.draw();
  if (player.pos.x < canvas.width / 20) {
    colorButton.cheak();
  }
    colorButton.draw();

  if (player.vel.y == 0 && (player.air == 1 || player.air == 2 || player.air == 3)) {
    player.vel.x = 0;
    player.air = 0;
  }

  if ((!player.on || player.air > 0) && !player.cMode) {
    let gravity = createVector(0, canvas.height / 1000);
    player.applyForce(gravity);
  }


    if (keyIsDown('65') || keyIsDown(LEFT_ARROW)) {
      player.cMode ?  player.pos.x -= player.speed*1.7 : player.vel.x = -player.speed;
    }
    if (keyIsDown('68') || keyIsDown(RIGHT_ARROW)) {
      player.cMode ?  player.pos.x += player.speed*1.7 : player.vel.x = player.speed;
    }
    if(keyIsDown('87') || keyIsDown('38')){
      if(player.cMode) player.pos.y -= player.speed*1.4;
    }
    if(keyIsDown('83') || keyIsDown('40')){
      if(player.cMode) player.pos.y += player.speed*1.4;
    }




  pop();

  menu();
}

unction keyPressed(e) {

    if(!player.cMode){

    if (e.keyCode == '87' || e.keyCode == '38' || e.keyCode == '32') {
      player.jump();
    }
    if (!player.on) {
      if (e.keyCode == '83' || e.keyCode == '40') {
        player.fall();
      }
    }

  }
    if(e.keyCode=='71'){
       menuCreativeMode();
    }

  }

  function keyReleased(e) {

    if (player.vel.y == 0) {
      if (e.keyCode == '65' || e.keyCode == '37' || e.keyCode == '68' || e.keyCode == '39') {
        player.stopX();
      }
    }

  }

  function mousePressed() {
   for(let i=platforms.length-1;i>=0;i--){
       if(platforms[i].bind()) break;
    }

    if(mouseX<canvas.width*0.95+canvas.height/16 && mouseX>canvas.width*0.95){
       if(mouseY>canvas.height/8.15 && mouseY<canvas.height/8.15+canvas.height/17){
          menuCreativeMode();
       }
       else if(mouseY>canvas.height*0.03 && mouseY<canvas.height*0.03+canvas.height/17){
          menuCreatePlatform();
       }
    }
    else if(mouseX<canvas.width*0.9+canvas.height/16 && mouseX>canvas.width*0.9){
      if(mouseY>canvas.height*0.03 && mouseY<canvas.height*0.03+canvas.height/17){
        menuReplicatePlatform();
      }
    }

  }

  function mouseDragged(){
    platforms.forEach((plt)=>{
      plt.reSize();
      plt.changeColor();
       });
  }
