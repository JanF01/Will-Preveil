class Player{

   constructor(){
       this.pos = createVector(canvas.width/2,canvas.height/1.5);
<<<<<<< HEAD
       this.size = canvas.height/8;
       this.vel = createVector(0,0.3);
=======
       this.size = canvas.height/10;
       this.vel = createVector(0,0);
>>>>>>> 303ff3b58b73584f6d2a3a3f0217f185f5c127f5
       this.acc = createVector(0,0);
       this.air=1;
       this.on = false;
       this.grafic = skinP;
       this.look = 0;
       this.padd = 1;
       this.direction=0;
       this.speed = canvas.height/150;
   }

   draw(){
     imageMode(CENTER);
       if(this.vel.x==0)this.direction=1;
       else if(this.vel.x<0)this.direction=0;
       else this.direction = 2;

    if(this.look==0 || this.look==1){
     image(this.grafic[this.look][this.direction],this.pos.x,this.pos.y,this.size,this.size*1.03);
    }
     else{
     image(this.grafic[this.look][0],this.pos.x,this.pos.y,this.size,this.size*1.03);
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

<<<<<<< HEAD
=======
          if(players[0].pos.x>players[1].pos.x){
              if(players[0].pos.x>canvas.width/2){
            playerPos=players[0].pos.x-canvas.width/2;
              }else playerPos=0;
          }
          if(players[1].pos.x>players[0].pos.x){
              if(players[1].pos.x>canvas.width/2){
            playerPos=players[1].pos.x-canvas.width/2;
              }else playerPos=0;
          }
>>>>>>> 303ff3b58b73584f6d2a3a3f0217f185f5c127f5
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
    this.applyForce(v5);
  }




}
