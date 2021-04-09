var wall
var car
var deformation
  var speed,weight
  
  function setup() {
  createCanvas(1600,400);
  
  car=createSprite(50, 200, 20, 20);
 wall= createSprite(1500, 200, 20, 30);
  ;
speed=random(55,90)
weight=random(400,1500)

}

function draw() {
  background(0,0,0);  
  drawSprites();
//if(keyDown(UP_ARROW)){
  car.velocityX=speed;//}

  if(car.isTouching(wall)){
    car.velocityX=0
    deformation=(0.5*weight*speed*speed/22500)}
if(deformation>=180){
car.shapeColor=color(255,0,0)}

if(deformation<=80){
  car.shapeColor=color(0,255,0)}

  if(deformation>=80&&deformation<=180){
    car.shapeColor=color(255,255,0)}

}