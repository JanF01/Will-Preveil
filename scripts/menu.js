class Menu{
   constructor(){
      this.scaling = [0,0,0,0];
      this.holding=false;
      this.cMode = false;

   }

   draw(){
    fill(0,0,90);
    stroke(255,210);
    strokeWeight(canvas.height/500);

    rect(canvas.width*0.95-this.scaling[0]/2,canvas.height/8.15-this.scaling[0]/2,canvas.height/16+this.scaling[0],canvas.height/17+this.scaling[0]);
    image(cSkin,canvas.width*0.952-this.scaling[0]/2,canvas.height/7.8-this.scaling[0]/2,canvas.height/19+this.scaling[0],canvas.height/20+this.scaling[0]);

    rect(canvas.width*0.95-this.scaling[1]/2,canvas.height*0.03-this.scaling[1]/2,canvas.height/16+this.scaling[1],canvas.height/17+this.scaling[1]);
    image(block,canvas.width*0.952-this.scaling[1]/2,canvas.height*0.05-this.scaling[1]/2,canvas.height/19+this.scaling[1],canvas.height/50+this.scaling[1]);

     rect(canvas.width*0.90-this.scaling[2]/2,canvas.height*0.03-this.scaling[2]/2,canvas.height/16+this.scaling[2],canvas.height/17+this.scaling[2]);


    rect(canvas.width*0.85-this.scaling[3]/2,canvas.height*0.03-this.scaling[3]/2,canvas.height/16+this.scaling[3],canvas.height/17+this.scaling[3]);

    textSize(canvas.height/20);
    noStroke();
    fill(255);
    text("R",canvas.width*0.904,canvas.height*0.077);
    text("V",canvas.width*0.8537,canvas.height*0.077);

    if(this.scaling[1]>0) this.scaling[1]--;
    if(this.scaling[2]>0) this.scaling[2]--;
    if(this.scaling[3]>0) this.scaling[3]--;
   }

   creativeMode(){
    this.cMode = !this.cMode;
    player.vel.mult(0);
    player.acc.mult(0);
    this.cMode ? this.scaling[0] = canvas.height/60 : this.scaling[0] = 0;
   }
   createPlatform(){
    createPlatform(mouseX+playerPos-canvas.height/7,mouseY+playerPosY+canvas.height/10,canvas.height/7,canvas.height/12,150,150,150);
    this.scaling[1] = floor(canvas.height/60);
   }
   replicatePlatform(){
    platforms.forEach((plt)=>{
        if(plt.changingPos!=0){
      createPlatform(plt.pos.x,plt.pos.y,plt.w,plt.h,plt.r,plt.g,plt.b);
        }
      });
      this.scaling[2] = floor(canvas.height/60);
   }
   deletePlatform(){
    platforms.forEach((plt)=>{
        if(plt.changingPos!=0){
             plt.deleted = true;
        }
      });

      refreshPlatforms();

      this.scaling[3] = floor(canvas.height/60);
   }




}
