class Skin{

   constructor(skin,x,i){
      this.pos = createVector(x,canvas.height/4);
      this.s = canvas.height/10;
      this.i = i;
      this.look = skin;
      this.prop = this.look.height/this.look.width;
   }

   draw(){

     imageMode(CENTER);

     image(this.look,this.pos.x,this.pos.y,this.s/this.prop,this.s);
   }

   cheak(){
     if(player.look!=this.i){
     if(dist(this.pos.x,this.pos.y,player.pos.x,player.pos.y)<this.s/2+player.size/2){
       player.look = this.i;
       player.prop = this.prop;
     }
   }
}







}
