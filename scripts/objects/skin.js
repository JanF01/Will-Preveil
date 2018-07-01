class Skin{

   constructor(skin,x,i,padd){
      this.pos = createVector(x,canvas.height/4);
      this.s = canvas.height/10;
      this.i = i;
      this.look = skin;
   }

   draw(){

     imageMode(CENTER);

     image(this.look,this.pos.x,this.pos.y,this.s,this.s);
   }

   cheak(){
     if(player.look!=this.i){
     if(dist(this.pos.x,this.pos.y,player.pos.x,player.pos.y)<this.s/2+player.size/2){
       player.look = this.i;
       if(skinP[this.i][4]){
       player.padd = skinP[this.i][4];
       }
      }
   }
  }








}
