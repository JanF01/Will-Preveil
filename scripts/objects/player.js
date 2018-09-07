class Player{

   constructor(){
       this.pos = createVector(canvas.width/2,canvas.height/1.5);
       this.size = canvas.height/13;
       this.vel = createVector(0,0.3);
       this.acc = createVector(0,0);
       this.air=1;
       this.on = false;
       this.grafic = skinP;
       this.look = 0;
       this.direction=0;
       this.prop = 1;
       this.speed = canvas.height/125;
   }

   draw(){
     imageMode(CENTER);
       if(this.vel.x==0)this.direction=1;
       else if(this.vel.x<0)this.direction=0;
       else this.direction = 2;


       if(menu.cMode){
        image(cSkin,this.pos.x,this.pos.y,this.size*1.4,this.size*1.4);
       }
    else if(this.look==0 || this.look==1 || this.look==2){
     image(this.grafic[this.look][this.direction],this.pos.x,this.pos.y,this.size/this.prop,this.size);
    }
     else{
     image(this.grafic[this.look][0],this.pos.x,this.pos.y,this.size/this.prop,this.size);
      }
   }
   move(){
     this.vel.add(this.acc);
     this.pos.add(this.vel);

     this.acc.mult(0);

     if(player.pos.x>canvas.width/2){
       playerPos=player.pos.x-canvas.width/2;
     } else playerPos=0;

     if(player.pos.y<canvas.height/3){
         playerPosY=player.pos.y-canvas.height/3+player.vel.y;
     } else playerPosY=0;

   }

   applyForce(v){
     this.acc.add(v);
   }

   stopX(){
     this.vel.x*=0;
   }

   corners(){
     if(this.pos.y>groundHeight-this.size/2){
       this.pos.y=groundHeight-this.size/2;
       this.vel.y*=0;
     }
     if(this.pos.x<this.size/2){
       this.pos.x=this.size/2;
       this.stopX();
     }
   }


  jump(){
    if(this.air==0 || this.air==1){
      if(this.air==0){
    let v4 = createVector(0,-canvas.height/55);
    this.applyForce(v4);
    this.air = 1;
  }
  else {
    let v4 = createVector(0,-canvas.height/55*map(this.vel.y,0,-canvas.height/100,1,0.25));
    this.applyForce(v4);
    this.air = 2;
  }

  }
}

  fall(){
    let v5 = createVector(0,canvas.height/50);
    player.applyForce(v5);
  }




}
