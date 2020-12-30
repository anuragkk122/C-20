var car,wall;
var speed,height;
var weight;

speed = random(55,90)
weight = random(400,1400)

car = createSprite(50.200,50,50);
wall = createSprite(1500,200,60,height/2)

deformation = 0.5*weight*speed*speed 


function setup() {
  createCanvas(1600,400);
  speed = random(55,90)
  weight= random(400,1500)


car.velocityX = speed;
car.shapeColor = color(225);

wall.createSprite(1500,200,60,height/2)
wall.shapeColor=color(80,80,80)




}

function draw() {
  background(255,255,255);  
  drawSprites();
  
if(wall,x-car,x < (car.width+wall.width)/2)
{
  car.velocityX= 0;
  var deformation = 0.5*weight*speed*speed/22509;
  if(deformation>180)
  {
    car.shapeColor = color(225,0,0);
  }
  if (deformation<180 && deformation >100)
   {
     car.shapeColor= blue(230,230,0);
   }
   if (deformation<100)
   {
     car.shapeColor = color(0,225,0);
   }

}

}