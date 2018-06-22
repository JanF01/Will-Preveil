class Color{

   constructor(x,c,i){
      this.pos = createVector(x,canvas.height/4);
      this.s = canvas.height/12.5;
      this.c = c;
      this.i = i;
   }

   draw(){
     noStroke();
     fill(this.c);
     ellipse(this.pos.x,this.pos.y,this.s,this.s);
   }

   cheak(){
     if(dist(this.pos.x,this.pos.y,player.pos.x,player.pos.y)<this.s/2+player.size/2){
       player.look = this.i;
       player.vel.x=0;
       player.acc.x=0;
     }
   }








}
