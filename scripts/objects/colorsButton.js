class ColorButton{

   constructor(){
      this.pos = createVector(0,canvas.height/2);
      this.state = 0;
      this.in = false;
      this.h = canvas.height/7;
      this.change = 1;
      this.arrows = loadImage('pics/arrows.png');
   }
   draw(){




     fill(255);
     noStroke();
     if(!this.in)
     rect(this.pos.x+canvas.width/73,this.pos.y+this.h/2-canvas.height/40,canvas.width/90,canvas.height/20,40);
     else
     rect(this.pos.x+canvas.width/70,this.pos.y+this.h/2-canvas.height/40,canvas.width/160,canvas.height/20,40);




   stroke(13,16,32);
   strokeWeight(canvas.width/1100);
   if(this.state && groundHeight>canvas.height/1.6){
      groundHeight-=canvas.height*0.001;
      fill(71,255,42);
   }
   else if(!this.state && groundHeight<canvas.height/1.125){
      groundHeight+=canvas.height*0.001;
      fill(71,255,42);
   }
   else{
      fill(255,42,71);
      this.in=false;
      this.working = false;
   }
     rect(this.pos.x,this.pos.y,canvas.width/60,this.h,40);
     imageMode(CENTER);
     image(this.arrows,canvas.width/120,this.pos.y+this.h/2,canvas.width/47,this.h/2.5);


   if(this.state && groundHeight>canvas.height/1.6){
      groundHeight-=canvas.height*0.001;
   }
   else if(!this.state && groundHeight<canvas.height/1.125){
      groundHeight+=canvas.height*0.001;
      player.pos.y = groundHeight-player.size/2;
   }




 }
   cheak(){
     let players = player.size;
     let playerx = player.pos.x;
     let playery = player.pos.y;

      if(canvas.width/60+players/2>playerx){
         if(this.pos.y-players/2<=playery && this.pos.y+this.h+players/2>=playery){
           player.pos.x = canvas.width/60+players/2;

           player.vel.x*=-1;

           if(playery>this.pos.y+this.h/8 && playery<this.pos.y+this.h/1.1325){
             if(!this.working){
            if(!this.state)this.state=1;
            else this.state=0;
            this.in=true;
            this.working=true;
           }

         }

         }
      }
   }


}
