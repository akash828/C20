var movingRect,fixedRect;

function setup() {
  createCanvas(800,400);
 movingRect=createSprite(400, 200, 50, 50);
 movingRect.shapeColor="blue"
fixedRect=createSprite(200,200,50,50);
fixedRect.shapeColor="blue"

//movingRect.x-fixedRect.x===fixedRect.width/2+movingRect.width/2
// __250__-200===25+25

}

function draw() {
  background("red");  
movingRect.x=World.mouseX;
movingRect.y=World.mouseY;

if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&&
 fixedRect.x -movingRect.x<fixedRect.width/2+movingRect.width/2 &&
 movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2&&
 fixedRect.y -movingRect.y<fixedRect.height/2+movingRect.height/2){
  movingRect.shapeColor="yellow";
  fixedRect.shapeColor="yellow";
}  
else{
  movingRect.shapeColor="blue";
  fixedRect.shapeColor="blue";
}
drawSprites();
}     