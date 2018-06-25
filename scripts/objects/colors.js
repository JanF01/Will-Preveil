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

   cheak(p){
     if(dist(this.pos.x,this.pos.y,p.pos.x,p.pos.y)<this.s/2+p.size/2){
       p.look = this.i;
       p.vel.x=0;
       p.acc.x=0;
     }
   }








}
