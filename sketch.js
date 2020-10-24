var fixedRect, movingRect;
var obj1 , obj2, obj3 , obj4;

function setup() {
  createCanvas(1200,800);
  obj1 = createSprite(200,400,20,20);
  obj2 = createSprite(800,100,20,20);
  obj3 = createSprite(780,300,20,20);
  obj3.velocityX = 3;
  obj3.velocityY = 3;
  obj4 = createSprite(340,560,20,20);
  obj4.velocityX = 3;
  obj4.velocityY = 3;
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background("red");  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;
obj3.x = World.mouseX;
obj3.y = World.mouseY;

  if(touch(movingRect,obj3)){
    movingRect.shapeColor = "red";
    obj3.shapeColor = "red";
  }else{
    movingRect.shapeColor = "green";
    obj3.shapeColor = "green";
    }

    Bouncing(obj3 , obj4);
  
  drawSprites();
}




