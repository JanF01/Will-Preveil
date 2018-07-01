var player;
var skins = [];
var platforms = [];
var colorButton;
var groundHeight;
var playerPos=0,playerPosY=0;

function startGame() {
  beginGame = true;
  
  createSkins(skinP.length,skinP,2,0.64);
  createPlayer();
  createButton();


  for(let i=0;i<10;i++){
  createPlatform( canvas.width * (1.1+i/5), canvas.height / (1.9+i/3),canvas.width/10,color(250,190,10));
   }

  for(let i=0;i<10;i++){
  createPlatform( canvas.width * (3+i/4.5),- canvas.height*(i/7),canvas.width/10,color(200,100,10));
  }


}


function showSkins() {
  if (player.pos.y > canvas.height / 3 || player.pos.y<0) {
      skins.forEach((skin)=>{skin.draw();})
  } else {
      skins.forEach((skin)=>{
        skin.draw();
        skin.cheak();
      })
  }

}

function drawPlatforms(){
    platforms.forEach((plt)=>{
        plt.changePos();
        plt.draw();
        plt.cheak();


    });
}

function play() {
  $('#pass').css('display', 'none');
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
  stroke(255);
  fill(12, 20, 37);
  text("CLICK ON A PLATFORM TO MOVE IT", canvas.width * 1.2, canvas.height / 8);


  showSkins();
  drawPlatforms();

  player.draw();
  if (player.pos.x < canvas.width / 20) {
    colorButton.cheak();
  }
    colorButton.draw();

  if (player.vel.y == 0 && (player.air == 1 || player.air == 2 || player.air == 3)) {
    player.vel.x = 0;
    player.air = 0;
  }

  if (!player.on || player.air > 0) {
    let gravity = createVector(0, canvas.height / 1000);
    player.applyForce(gravity);
  }


    if (keyIsDown('65') || keyIsDown(LEFT_ARROW)) {
      player.vel.x = -player.speed;
    }
    if (keyIsDown('68') || keyIsDown(RIGHT_ARROW)) {
      player.vel.x = player.speed;
    }



  pop();


}


function keyPressed(e) {

  if (e.keyCode == '87' || e.keyCode == '38' || e.keyCode == '32') {
    player.jump();
  }
  if (!player.on) {
    if (e.keyCode == '83' || e.keyCode == '40') {
      player.fall();
    }
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
  for (let i=0;i<platforms.length;i++) platforms[i].bind();
}
