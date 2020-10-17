var bullet, wall;
var speed, weight, thickness;


function setup() {
  createCanvas(1300,500);

  thickness = random(22,100);
  speed = random(223,321);
  weight = random(30,52);

  bullet = createSprite(50,200,50,10);
  bullet.shapeColor="white";
 
  wall = createSprite(1200,200,thickness,height/2);


  

}

function draw() {
  background("black");  

  bullet.velocityX=speed;
  bullet.collide(wall);

  textSize(20);
  text("Wall Thickness : " + thickness, 30, 50);

 
  if (hasCollided(bullet, wall)){

    bullet.velocityX=0;
    var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);

    if (damage<10) {

      wall.shapeColor=color(0,225,0);

      textSize(20);
      text("Wall is Made of Diamond", 30, 80);

      textSize(30);
      text("The wall did not break... It is powerful to be used for battle.", 50, height/2);

    }
    if (damage>10) {

      wall.shapeColor=color(225,0,0);

      textSize(20);
      text("Wall is Made of Bricks", 30, 80);

      textSize(30);
      text("The wall broke... It is not powerful enough to be used for battle.", 50, height/2);

    } 



  }
  drawSprites();
}

function hasCollided( lbullet, lwall){

bulletRightEdge = lbullet.x + lbullet.width;
wallLeftEdge = lwall.x;

if (bulletRightEdge >= wallLeftEdge){

return true;

}

return false;


}