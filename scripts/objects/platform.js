class Platform {

  constructor(/*g,*/x, y, w, h,r,g,b) {
    this.pos = createVector(x, y);

    this.startingV = createVector(x,y);
    this.endX = 0;
    this.endY = 0;
    this.movingV = createVector(0,0);
    this.speed = 0;
    this.on=false;
    this.setingMove;

    this.changingPos = 0;
    this.r=r;this.g=g;this.b=b;

    //this.look = g;
    this.h =  h;//this.look.height;
    this.w =  w;//this.look.width;

    this.doubleClick = false;

    this.adminMouseX = 0;
    this.adminMouseY = 0;
    this.colorsPos = [map(r,0,255,0,canvas.height/4),map(g,0,255,0,canvas.height/4),map(b,0,255,0,canvas.height/4)];

    this.lineOne   = this.pos.y-this.h/2-(canvas.height/11)*2;
    this.lineTwo   = this.pos.y-this.h/2-(canvas.height/11)*1.5;
    this.lineThree = this.pos.y-this.h/2-canvas.height/11;
    this.sliderS = canvas.height/39;
    this.deleted = false;
  }

  getColor(){
    this.r = map(this.colorsPos[0],0,canvas.height/3.5,0,255);
    this.g = map(this.colorsPos[1],0,canvas.height/3.5,0,255);
    this.b = map(this.colorsPos[2],0,canvas.height/3.5,0,255);

  }

  draw() {
  /*  imageMode(CENTER);
    image(this.look, this.pos.x, this.pos.y);*/
    noStroke();
    fill(this.r,this.g,this.b);
    rectMode(CENTER);
    if(this.h>0 && this.w>0){
    rect(this.pos.x,this.pos.y,this.w,this.h,20);
    }
    else{
    rect(this.pos.x,this.pos.y,canvas.height/20,canvas.height/20,20);
    }

    if (this.changingPos>0) {
      if(this.changingPos==1){
        stroke(255, 200)
        strokeWeight(canvas.height / 500);
        noFill();
        ellipse(this.pos.x, this.pos.y, this.w / 2, this.w / 2);
        line(this.pos.x - this.w / 4, this.pos.y, this.pos.x + this.w / 4, this.pos.y);
        line(this.pos.x, this.pos.y - this.w / 4, this.pos.x, this.pos.y + this.w / 4);
       }
      else{
        strokeWeight(canvas.height/500);
        stroke(255,0,0);
        imageMode(CENTER);
        fill(0,150);
        ellipse(this.pos.x, this.pos.y, canvas.height/20, canvas.height/20);
         image(arrows[0],this.pos.x, this.pos.y - this.h/2 - canvas.height/23,canvas.height/23,canvas.height/23);
         image(arrows[1],this.pos.x + this.w/2 + canvas.height/23, this.pos.y,canvas.height/23,canvas.height/23);
         image(arrows[2],this.pos.x, this.pos.y + this.h/2 + canvas.height/23,canvas.height/23,canvas.height/23);
         image(arrows[3],this.pos.x - this.w/2 - canvas.height/23, this.pos.y,canvas.height/23,canvas.height/23);
         stroke(0,0,255,160);

         let lineBeginning = this.pos.x - canvas.height/8;
         this.lineOne   = this.pos.y-this.h/2-(canvas.height/12)*2;
         this.lineTwo   = this.pos.y-this.h/2-(canvas.height/12)*1.5;
         this.lineThree = this.pos.y-this.h/2-(canvas.height/12);

         strokeWeight(canvas.height/400);
         line(lineBeginning,this.lineThree,this.pos.x+canvas.height/8, this.lineThree);
         stroke(0,255,0,160);
         strokeWeight(canvas.height/400);
         line(lineBeginning,this.lineTwo,this.pos.x+canvas.height/8,this.lineTwo);
         stroke(255,0,0,160);
         strokeWeight(canvas.height/400);
         line(lineBeginning,this.lineOne,this.pos.x+canvas.height/8,this.lineOne);

         fill(255,255);
         noStroke();
         ellipse(lineBeginning+this.colorsPos[2],this.lineThree,this.sliderS,this.sliderS);
         ellipse(lineBeginning+this.colorsPos[1],this.lineTwo,this.sliderS,this.sliderS);
         ellipse(lineBeginning+this.colorsPos[0],this.lineOne,this.sliderS,this.sliderS);
         fill(0,0,30,255);
         noStroke();
         rect(this.pos.x+canvas.height/11,this.pos.y-this.h/2-canvas.height/25,canvas.height/13,canvas.height/20,50);
         image(botharrows,this.pos.x+canvas.height/11,this.pos.y-this.h/2-canvas.height/25,canvas.height/15,canvas.height/15);
        if(this.setingMove){
          stroke(255,255);
          strokeWeight(canvas.height/500);
          line(this.pos.x,this.pos.y,mouseX+playerPos,mouseY+playerPosY);
          ellipse(mouseX+playerPos,mouseY+playerPosY,canvas.height/40);
        }
        }
    }
      if(dist(this.endX,this.endY,this.pos.x,this.pos.y)>this.speed*2){
          this.pos.add(this.movingV);
      }
      else{
          this.movingV.mult(-1);
          let p = this.endX;
          this.endX=this.startingV.x;
          this.startingV.x=p;
          p=this.endY;
          this.endY=this.startingV.y;
          this.startingV.y=p;
      }

  }

  cheak() {

    let playerWidth = player.size/player.prop;

    if (abs(player.pos.x - this.pos.x) - playerWidth / 2 <= this.w  / 2) {

      if (abs(player.pos.y - this.pos.y) <= this.h / 2 + playerWidth / 2) {

        if (player.pos.y - this.pos.y < -this.h / 3 + this.movingV.y && abs(player.pos.x - this.pos.x) <= this.w / 2 + this.movingV.y) {
          player.pos.y = this.pos.y - player.size / 2 - this.h / 2 ;
          player.vel.y = 0;
          player.on = true;
          this.on=true;
          if (player.air == 1 || player.air == 2) {
            player.air = 0;
            player.vel.x = 0;
          }
        }


        else if (player.pos.x <= this.pos.x - this.w  / 2 - playerWidth / 2 + player.vel.x + this.movingV.x
              && player.pos.y-(this.pos.y-this.h/2) > -player.size/2.5) {
          player.pos.x = this.pos.x - this.w  / 2 - playerWidth / 2 + this.movingV.x;
          player.vel.x *= -0.5;
          player.on = false;
          this.on=false;
        }

        else if (player.pos.x >= this.pos.x + this.w  / 2 + playerWidth / 2 + player.vel.x + this.movingV.x
             && player.pos.y-(this.pos.y-this.h/2) > -player.size/2.5) {
          player.vel.x *= -0.5;
          player.pos.x = this.pos.x + this.w  / 2 + playerWidth / 2 + this.movingV.x;
          player.on = false;
          this.on=false;
        }


        else if (!player.air || player.air==3) {
          player.on = false;
          player.air=3;
          this.on=false;
        }

        else if(player.pos.y>this.pos.y - this.movingV.y)player.vel.y*=-1;

        else player.vel.y*=-0.5;;



      }
    }
    else{
      player.on=false;
      this.on=false;
    }
  }

  bind() {
    if (abs((this.pos.x- playerPos)-mouseX) < this.w/2){
      if(abs((this.pos.y - playerPosY)-mouseY)< this.h/2){

       if(this.changingPos==0){
         if(!menu.holding){
          this.changingPos=1;
          menu.holding=true;
          this.doubleClick=true;
          setTimeout(()=>{this.doubleClick=false},200);
          return true;
         }
    }

    else if(this.changingPos==1){
        if(this.doubleClick){
           this.changingPos=2
        }else{
          this.changingPos=0;
        }
        menu.holding=false;
        return true;
    }
    else {this.changingPos=0;  return true;}

  }
}
}
  changePos() {
    if(this.on && !menu.cMode){
        player.pos.x+=this.movingV.x;
        player.pos.y+=this.movingV.y;
    }
    if (this.changingPos==1) {
      this.pos.x = mouseX + playerPos;
      this.pos.y = mouseY + playerPosY;
      if(this.endX!=0){
      this.startingV.x = this.pos.x;
      this.startingV.y = this.pos.y;
      let end = createVector(this.endX,this.endY);
      this.movingV = end.sub(this.startingV);
      this.changeSpeed();
      }
    }

  }

  reSize(){
    let mDy = this.adminMouseY-mouseY;
    let mDx = this.adminMouseX-mouseX;

    if(this.adminMouseY!=0 && this.adminMouseX!=0
     && (mDy>-canvas.height/23 && mDy<canvas.height/23)
     && (mDx>-canvas.height/23 && mDx<canvas.height/23)){

     if(this.changingPos==2){

       if(mouseX>=(this.pos.x - playerPos) - canvas.height/46 && mouseX<=(this.pos.x- playerPos)+canvas.height/46){

        if(this.adminMouseY!=mouseY){

              if(mouseY>=( this.pos.y - playerPosY )-this.h/2-(3*canvas.height/46) && mouseY<=( this.pos.y - playerPosY )-this.h/2-canvas.height/46){
                this.pos.y-=mDy/2;
                this.h+=mDy;
            }
            else if(mouseY<=( this.pos.y - playerPosY )+this.h/2+(3*canvas.height/46) && mouseY>=( this.pos.y - playerPosY )+this.h/2+canvas.height/46){
              this.pos.y-=mDy/2;
              this.h-=mDy;
            }

         }

       }
       else if(mouseY>=(this.pos.y - playerPosY) - canvas.height/46 && mouseY<=(this.pos.y - playerPosY) + canvas.height/46){

            if(this.adminMouseX!=mouseX){
              if(mouseX>=(this.pos.x - playerPos)-this.w/2-(3*canvas.height/46) && mouseX<=(this.pos.x - playerPos)-this.w/2-canvas.height/46){
                this.pos.x-=mDx/2;
                this.w+=mDx;
            }
            else if(mouseX<=(this.pos.x - playerPos)+this.w/2+(3*canvas.height/46) && mouseX>=(this.pos.x - playerPos)+this.w/2+canvas.height/46){
              this.pos.x-=mDx/2;
              this.w-=mDx;
            }

         }

       }
     }
    }
      this.adminMouseY=mouseY;
      this.adminMouseX=mouseX;
  }

  changeColor(){
    if(this.changingPos==2 && !menu.holding){
          if(abs((this.pos.x - playerPos)-mouseX)<=canvas.height/7.7){
      if(abs((mouseY+playerPosY)-this.lineOne)<=this.sliderS/2){
          this.colorsPos[0]=map(mouseX+playerPos,this.pos.x-canvas.height/8,this.pos.x+canvas.height/8,0,canvas.height/4);
        this.getColor();

       }
       else if(abs((mouseY+playerPosY)-this.lineTwo)<=this.sliderS/2){
        this.colorsPos[1]=map(mouseX+playerPos,this.pos.x-canvas.height/8,this.pos.x+canvas.height/8,0,canvas.height/4);
        this.getColor();

      }
      else if(abs((mouseY+playerPosY)-this.lineThree)<=this.sliderS/2){
        this.colorsPos[2]=map(mouseX+playerPos,this.pos.x-canvas.height/8,this.pos.x+canvas.height/8,0,canvas.height/4);
        this.getColor();

      }
    }
  }
}

  track(){
    if(this.changingPos==2){
      if(!this.setingMove){
        let centerX = (this.pos.x-playerPos)+canvas.height/22;
        let centerY = (this.pos.y-playerPosY)-this.h/2-canvas.height/25;
      if(mouseX<centerX+canvas.height/13 && mouseX>centerX){
        if(mouseY>centerY-canvas.height/40 && mouseY<centerY+canvas.height/40){
          this.setingMove=true;
        }
      }
    }
    else{
       this.startingV.x = this.pos.x;
       this.startingV.y = this.pos.y;
       this.endX = mouseX+playerPos;
       this.endY = mouseY+playerPosY;
       let end = createVector(this.endX,this.endY);
       this.speed=2;
       this.movingV = end.sub(this.startingV);
       this.changeSpeed();
       this.setingMove=false;
    }
  }


  }
  changeSpeed(){
    this.movingV.normalize();
    this.movingV.mult(this.speed);
  }

}
