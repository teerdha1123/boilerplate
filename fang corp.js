function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 50);
  movingrect=createSprite(400, 200, 50, 50);

}

function draw() {
  background(0,0,0);  
  movingrect.x=mouseX
  movingrect.y=mouseY
  if (movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2&&
    fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2&&movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2)
    {
movingrect.shapeColor="red"
fixedrect.shapeColor="red"
  }
  else{
    movingrect.shapeColor="green"
    fixedrect.shapeColor="green"
      

  }
  
  drawSprites();
}