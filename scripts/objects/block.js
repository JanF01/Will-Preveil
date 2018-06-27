class Block{

    constructor(x,y,id){
       this.pos = createVector(x,y);
       this.changingPos = false;
       this.id = id;
    }

    draw(){
      imageMode(CENTER);
      image(bloc,this.pos.x,this.pos.y);
      stroke(255,200);
      if(this.changingPos){
      strokeWeight(canvas.height/500);
      noFill();
      ellipse(this.pos.x,this.pos.y,bloc.height*1.5,bloc.height*1.5);
      line(this.pos.x-bloc.height*0.75,this.pos.y                 ,this.pos.x+bloc.height*0.75,this.pos.y                 );
      line(this.pos.x                 ,this.pos.y-bloc.height*0.75,this.pos.x                 ,this.pos.y+bloc.height*0.75);
    }

    }

    cheak(p){


      if(abs(p.pos.x-this.pos.x)-p.size/2<=bloc.width/2){
        let posX = p.pos.x;
        let posY = p.pos.y;
        let velX = p.vel.x;
        let pSize = p.size;
        let bWidth = bloc.width;
        let bHeight = bloc.height;
        let air = p.air;

           if(abs(posY-this.pos.y)<=bHeight/2+pSize/2){
             if(posY-this.pos.y<-bHeight/2 && abs(posX-this.pos.x)<bWidth/2){
               p.pos.y=this.pos.y-pSize/2-bHeight/2;
               p.vel.y=0;
               p.on=true;
               p.which=this.id;
               if(air==1 ||  air==2){
               p.air=0;
               p.vel.x=0;
             }
             }
             else if(posX<=this.pos.x-bWidth/2-pSize/2+velX){
               p.pos.x = this.pos.x-bWidth/2-pSize/2;
                    p.vel.x*=-1;
                    p.on=false;
                    p.which=0;
             }
             else if(posX>=this.pos.x+bWidth/2+pSize/2+velX){
                 p.vel.x*=-1;
               p.pos.x = this.pos.x+bWidth/2+pSize/2;
                 p.on=false;
                   p.which=0;
             }
             else if(!air || p.air==3){
               p.on=false;
                 p.which=0;
               p.air=3;
             }
             else{
              p.vel.mult(-1);
                 p.on=false;
                   p.which=0;
             }
           }
      }
      else{
       p.on=false;
         p.which=0;
      }
    }

    bind(){
      if(dist(mouseX,mouseY,this.pos.x-playerPos,this.pos.y)<bloc.height)
                    this.changingPos = !this.changingPos;
    }
    changePos(p){

   if(this.changingPos){
       this.pos.x = mouseX+playerPos;
       if(p.on && p.which==this.id){
       p.pos.y -= this.pos.y-mouseY;
        }
       this.pos.y = mouseY;
   }
    }

}
