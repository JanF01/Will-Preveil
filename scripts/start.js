var player;
var skins = [];
var platforms = [];
var colorButton;
var groundHeight;
var playerPos=0,playerPosY=0;
var curtains = [];
var menu;

function startGame() {

  createMenu();
  createSkins(skinP.length,skinP,2,0.64);
  createPlayer();
  createButton();

  for(let i=0;i<10;i++){
     createPlatforms(canvas.width*i/7,canvas.height*0.8/i,canvas.height/8,canvas.height/19,100,240,30);

  }

}


let showSkins = () =>{
  if (player.pos.y > canvas.height / 3 || player.pos.y<0) {
      skins.forEach((skin)=>{skin.draw();})
  } else {
      skins.forEach((skin)=>{
        skin.draw();
        if(!menu.cMode)skin.cheak();
      })
  }

}

let drawPlatforms = () =>{
  if(menu.cMode){
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

let refreshPlatforms = () => {
  if(menu.cMode){
  for(let i=platforms.length-1;i>=0;i--){
    if(!platforms[i].deleted){

      platforms[i].track();
      if(platforms[i].bind()) break;

    }
    else{
       platforms.splice(i,1);
       menu.holding=false;
    }
  }
}
}

function play() {
  background(17, 12, 25);
  fill(255);
  textSize(canvas.height / 30);
  text("LEVEL:  " + l, canvas.width / 10, canvas.height / 1.055);

  player.move();
  player.corners();


  push();
  translate(-playerPos,-playerPosY);
  fill(40,140,10);
  rect(playerPos, groundHeight, canvas.width, canvas.height-groundHeight);
  textSize(canvas.height / 28)
  noStroke();
  fill(120,255,220,200);
  text("CLICK ON THE PLATFORM TO MOVE IT", canvas.width, canvas.height / 12);
  text("DOUBLE CLICK OR USE \"C\" TO CHANGE SIZE OR COLOR", canvas.width, canvas.height / 7.6);
  text("YOU CAN USE MENU IN THE TOP RIGHT OR CLICK:", canvas.width, canvas.height / 5.6);
  text("\"G\" TO TURN ON THE CREATIVE MODE", canvas.width , canvas.height / 4);
  text("\"R\" TO REPLICATE THE PLATFORM", canvas.width, canvas.height / 3.35);
  text("\"V\" TO DELETE THE PLATFORM", canvas.width, canvas.height / 2.85);


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

  if ((!player.on || player.air > 0) && !menu.cMode) {
    let gravity = createVector(0, canvas.height / 1000);
    player.applyForce(gravity);
  }


    if (keyIsDown('65') || keyIsDown(LEFT_ARROW)) {
      menu.cMode ?  player.pos.x -= player.speed*1.7 : player.vel.x = -player.speed;
    }
    if (keyIsDown('68') || keyIsDown(RIGHT_ARROW)) {
      menu.cMode ?  player.pos.x += player.speed*1.7 : player.vel.x = player.speed;
    }
    if(keyIsDown('87') || keyIsDown('38')){
      if(menu.cMode) player.pos.y -= player.speed*1.4;
    }
    if(keyIsDown('83') || keyIsDown('40')){
      if(menu.cMode) player.pos.y += player.speed*1.4;
    }

  pop();

  menu.draw();

}
