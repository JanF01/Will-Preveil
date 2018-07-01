class Platform {

  constructor(/*g,*/x, y, w, c) {
    this.pos = createVector(x, y);
    this.on = false;

    this.changingPos = false;
    this.c = c;
    //this.look = g;
    this.h =  canvas.height/18;//this.look.height;
    this.w =  w;//this.look.width;

  }

  draw() {
  /*  imageMode(CENTER);
    image(this.look, this.pos.x, this.pos.y);*/
    noStroke();
    fill(this.c);
    rectMode(CENTER);
    rect(this.pos.x,this.pos.y,this.w,this.h,20);

    stroke(255, 200);
    if (this.changingPos) {
      strokeWeight(canvas.height / 500);
      noFill();
      ellipse(this.pos.x, this.pos.y, this.w / 2, this.w / 2);
      line(this.pos.x - this.w / 4, this.pos.y, this.pos.x + this.w / 4, this.pos.y);
      line(this.pos.x, this.pos.y - this.w / 4, this.pos.x, this.pos.y + this.w / 4);
    }

  }

  cheak() {

    let playerWidth = player.size*player.padd;

    if (abs(player.pos.x - this.pos.x) - playerWidth / 2 <= this.w  / 2) {

      if (abs(player.pos.y - this.pos.y) <= this.h / 2 + player.size / 2) {

        if (player.pos.y - this.pos.y < -this.h / 2 && abs(player.pos.x - this.pos.x) < this.w / 2) {
          player.pos.y = this.pos.y - player.size / 2 - this.h / 2;
          player.vel.y = 0;
          player.on = true;
          if (player.air == 1 || player.air == 2) {
            player.air = 0;
            player.vel.x = 0;
          }
        }

        else if (player.pos.x <= this.pos.x - this.w  / 2 - playerWidth / 2 + player.vel.x ) {
          player.pos.x = this.pos.x - this.w  / 2 - playerWidth / 2;
          player.vel.x *= -0.5;
          player.on = false;
        }

        else if (player.pos.x >= this.pos.x + this.w  / 2 + playerWidth / 2 + player.vel.x ) {
          player.vel.x *= -0.5;
          player.pos.x = this.pos.x + this.w  / 2 + playerWidth / 2;
          player.on = false;
        }

        else if (!player.air || player.air==3) {
          player.on = false;
          player.air=3;
        }

        else  player.vel.y*=-1;


      }
    }
    else{
      player.on=false;
    }
  }

  bind() {
    if (dist(mouseX, mouseY, this.pos.x - playerPos, this.pos.y - playerPosY) < this.h){
      this.changingPos = !this.changingPos;
      if(!this.changingPos) tree.splicePlatform(this);
    }
  }
  changePos() {

    if (this.changingPos) {
      this.pos.x = mouseX + playerPos;
      this.pos.y = mouseY + playerPosY;
    }

  }




}
