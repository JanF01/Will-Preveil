let createButton   = () => colorButton = new ColorButton();

let createSkins    = (n,arr) => {
  for(let i=0;i<n;i++){
      skins[i] = new Skin(arr[i][0],canvas.width/(n+1)*(i+1),i);
  }
}

let createPlayer   = () => player = new Player();

let createPlatform = (x,y, w,h,r,g,b) => {
  plat = new Platform(x,y, w,h,r,g,b);
  platforms.push(plat);
}
