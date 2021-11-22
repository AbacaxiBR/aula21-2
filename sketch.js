var spriteFixo, spriteMovel, obj1, obj2, obj3, obj4;

function setup() {
  createCanvas(800,400);
  spriteFixo = createSprite(600, 400, 50, 80);
  spriteMovel = createSprite(800,400,80,30);
  obj1 =createSprite (100, 100, 50, 50);
  obj2 = createSprite(200, 100, 50, 50);
  obj3 = createSprite(300 , 100, 50, 50)
  obj4 = createSprite (400, 100, 50, 50)
  obj1.shapeColor = "green";
  obj2.shapeColor = "green";
  obj3.shapeColor = "green";
  obj4.shapeColor = "green";
  }

function draw() {

  background(255,255,255); 
  spriteMovel.x = mouseX;
  spriteMovel.y = mouseY;
  
  if (IsTouching(spriteMovel, obj1)){
      spriteMovel.shapeColor = "blue";
      obj1.shapeColor = "blue";

  }
  else{
    spriteMovel.shapeColor = "green";
    obj1.shapeColor = "green";
  }
  drawSprites();
}

  function IsTouching(obj1, obj2) {
    if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2
    && obj1.y - obj2.y < obj2.height/2 + obj1.height/2
    && obj2.y - obj1.y < obj2.height/2 + obj1.height/2) {
    return true;
    }
    else{
      return false;
    }
  }
