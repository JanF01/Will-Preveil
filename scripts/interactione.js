function keyPressed(e) {

    if(!menu.cMode){

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
       menu.creativeMode();
    }

  if(menu.cMode){
    if(e.keyCode=='82'){
      menu.replicatePlatform();
    }
    if(e.keyCode=='86'){
      menu.deletePlatform();
    }
    if(e.keyCode=='67'){
      for(let i=0;i<platforms.length;i++){
       if(platforms[i].changingPos==1){
        platforms[i].changingPos=2;
        menu.holding=false;
       }
     }
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

    refreshPlatforms();


    if(mouseX<canvas.width*0.95+canvas.height/16 && mouseX>canvas.width*0.95){
      if(mouseY>canvas.height/8.15 && mouseY<canvas.height/8.15+canvas.height/17){
         menu.creativeMode();
      }
    }

    if(menu.cMode){
        if(mouseX<canvas.width*0.95+canvas.height/16 && mouseX>canvas.width*0.95){
       if(mouseY>canvas.height*0.03 && mouseY<canvas.height*0.03+canvas.height/17){
          menu.createPlatform();
       }
    }
    else if(mouseX<canvas.width*0.9+canvas.height/16 && mouseX>canvas.width*0.9){
      if(mouseY>canvas.height*0.03 && mouseY<canvas.height*0.03+canvas.height/17){
        menu.replicatePlatform();
      }
    }
    else if(mouseX<canvas.width*0.85+canvas.height/16 && mouseX>canvas.width*0.85){
      if(mouseY>canvas.height*0.03 && mouseY<canvas.height*0.03+canvas.height/17){
        menu.deletePlatform();
      }
    }
  }
  }

  function mouseDragged(){

    platforms.forEach((plt)=>{
      plt.reSize();
      plt.changeColor();
       });

  }
