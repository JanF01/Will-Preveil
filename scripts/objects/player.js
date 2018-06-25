class Player{

   constructor(x){
       this.pos = createVector(x,canvas.height/1.5);
       this.size = canvas.height/10;
       this.vel = createVector(0,0);
       this.acc = createVector(0,0);
       this.c = color(255);
       this.air=0;
       this.grafic = [[loadImage('pics/player1left.png'),loadImage('pics/player1right.png')],loadImage('pics/player2.png'),loadImage('pics/player3.png'),loadImage('pics/player4.png'),loadImage('pics/player5.png'),loadImage('pics/player6.png')];
       this.look = 0;
   }
   spawn(){
     this.pos = createVector(canvas.width/2,canvas.height/1.5);
     this.size = canvas.width/25;
     this.vel = createVector(0,0);
     this.acc = createVector(0,0);
     this.c = color(255);
   }
   draw(){
     noStroke();
     fill(this.c);
     imageMode(CENTER);

     if(this.vel.x<=0)this.direction=0;
     else this.direction =1;

  if(this.look==0){
   image(this.grafic[this.look][this.direction],this.pos.x,this.pos.y,this.size,this.size*1.03);
  }
   else{
   image(this.grafic[this.look],this.pos.x,this.pos.y,this.size,this.size*1.03);
    }
   }
   move(){
     this.vel.add(this.acc);
     this.pos.add(this.vel);

     this.acc.mult(0);


          if(player.pos.x>player2.pos.x){
              if(player.pos.x>canvas.width/2){
            playerPos=player.pos.x-canvas.width/2;
              }else playerPos=0;
          }
          if(player2.pos.x>player.pos.x){
              if(player2.pos.x>canvas.width/2){
            playerPos=player2.pos.x-canvas.width/2;
              }else playerPos=0;
          }
   }

   applyForce(v){
     this.acc.add(v);
   }
   groundHit(){
     this.pos.y=groundHeight-this.size/2;
     this.vel.y*=0;
   }
   stopX(){
     this.vel.x*=0;
   }

   corners(){
     if(this.pos.y>groundHeight-this.size/2){
        this.groundHit();
     }
     if(this.pos.y<this.size/2){
       this.pos.y=this.size/2;
       this.vel.y*=-1
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
  };

  }
}

  fall(){
    let v5 = createVector(0,canvas.height/50);
    player.applyForce(v5);
  }




}
