class ColorButton{

   constructor(){
      this.pos = createVector(0,canvas.height/2);
      this.state = 0;
      this.in = false;
      this.h = canvas.height/7;
      this.change = 1;
      this.arrows = loadImage('pics/arrows.png');
      this.text = ["C","H","A","N","G","E"," ","C","O","L","O","R"];
   }
   draw(){

     textSize(canvas.height/37)
     stroke(255);
      strokeWeight(2);
     fill(33,48,89);
     let h = canvas.height/7;
     textAlign(CENTER);
     for(let i=0;i<this.text.length;i++){
        text(this.text[i],canvas.height/50,h);
        h+=canvas.height/32;
     }


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
      players[0].pos.y = groundHeight-players[0].size/2;
      players[1].pos.y = groundHeight-players[1].size/2;
   }




 }
   cheak(p){
     let playersi = p.size;
     let playerx = p.pos.x;
     let playery = p.pos.y;

      if(canvas.width/60+playersi/2>playerx){
         if(this.pos.y-playersi/2<=playery && this.pos.y+this.h+playersi/2>=playery){
           p.pos.x = canvas.width/60+playersi/2;

           p.vel.x*=-1;

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
