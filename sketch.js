var bullet,speed,weight;
var wall,thickness;
var speed;
var weight;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 50, 50, 50);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=(80,80,80);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83)
}

function draw() {
  background(255,255,255);  
  drawSprites();
  bullet.velocityX=speed;
 hasCollided();
  
}

function hasCollided(bullet,wall)
{
  bulletRightEdge=bullet.x +bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  return false;

}
if(hasCollided(bullet,wall))
{
  bullet.velocityX=0;
  var deformation=0.5 *weight * speed* speed/(thickness * thickness *thickness);

  if(deformation>10)
  {
    wall.shapeColor=color(255,0,0);

  }


   if(deformation<10)
   {
     wall.shapeColor=color(0,255,0);
   }
}
