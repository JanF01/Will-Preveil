var scaling = [0,0,0];

function menu(){
    fill(0,0,90);
    stroke(255,210);
    strokeWeight(canvas.height/500);

    rect(canvas.width*0.95-scaling[0]/2,canvas.height/8.15-scaling[0]/2,canvas.height/16+scaling[0],canvas.height/17+scaling[0]);
    image(cSkin,canvas.width*0.952-scaling[0]/2,canvas.height/7.8-scaling[0]/2,canvas.height/19+scaling[0],canvas.height/20+scaling[0]);

    rect(canvas.width*0.95-scaling[1]/2,canvas.height*0.03-scaling[1]/2,canvas.height/16+scaling[1],canvas.height/17+scaling[1]);
    image(block,canvas.width*0.952-scaling[1]/2,canvas.height*0.05-scaling[1]/2,canvas.height/19+scaling[1],canvas.height/50+scaling[1]);

     rect(canvas.width*0.90-scaling[2]/2,canvas.height*0.03-scaling[2]/2,canvas.height/16+scaling[2],canvas.height/17+scaling[2]);
    textSize(canvas.height/20);
    noStroke();
    fill(255);
    text("R",canvas.width*0.904,canvas.height*0.077);

    if(scaling[1]>0) scaling[1]--;
    if(scaling[2]>0) scaling[2]--;
}


let menuCreativeMode = () =>{
    player.cMode = !player.cMode;
    player.vel.mult(0);
    player.acc.mult(0);
    player.cMode ? scaling[0] = canvas.height/60 : scaling[0] = 0;
}
let menuCreatePlatform = () =>{
    createPlatform(mouseX+playerPos-canvas.height/7,mouseY+playerPosY+canvas.height/10,canvas.height/7,canvas.height/12,150,150,150);
    scaling[1] = floor(canvas.height/60);
}

let menuReplicatePlatform = () =>{
    platforms.forEach((plt)=>{
      if(plt.changingPos==2){
    createPlatform(plt.pos.x+plt.w,plt.pos.y,plt.w,plt.h,plt.r,plt.g,plt.b);
      }
    });
    scaling[2] = floor(canvas.height/60);
}
