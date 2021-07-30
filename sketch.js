var bg,sleep,brush,gym,eat,bath,move;
var astronaut,space;
function preload(){
  bg=loadImage("iss.png");
  sleep=loadAnimation("sleep.png");
  brush=loadAnimation("brush.png");
  bath=loadAnimation("bath1.png","bath2.png")
  gym=loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png")
  eat=loadAnimation("eat1.png","eat2.png")
  drink=loadAnimation("drink1.png","drink2.png")
  move=loadAnimation("move1.png","move2.png")
}


function setup() {
  createCanvas(800,800);
  

  space=createSprite(400,400)
  space.addImage("space",bg)
  space.scale=0.2;

  astronaut= createSprite(400, 400);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale=0.1
}
function draw() {
  background("space"); 

  if(keyDown("0")){
    astronaut.addAnimation("sleeping",sleep);
    astronaut.changeAnimation("sleeping");
    astronaut.y=400;
    astronaut.x=400;
  }

  if(keyDown("1")){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y=400;
    astronaut.x=400;
  }
  
  if(keyDown("2")){
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
    astronaut.y=400;
    astronaut.x=400;
  
  }

  if(keyDown("3")){
    astronaut.addAnimation("exercise",gym);
    astronaut.changeAnimation("exercise");
    astronaut.y=400;
    astronaut.x=400;
  
  }

  if(keyDown("4")){
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.y=400;
    astronaut.x=400;
  
  }

  if(keyDown("5")){
    astronaut.addAnimation("drinking",drink);
    astronaut.changeAnimation("drinking");
    astronaut.y=400;
    astronaut.x=400;
  }
  if(keyDown("6")){
    astronaut.addAnimation("moving",move);
    astronaut.changeAnimation("moving");
    astronaut.y=400;
    astronaut.x=400;
  }
  
  drawSprites();
  
  
  textSize(20);
  fill("black") ;
  text("Instruction",20,85);
  textSize(15);
  text("0=sleeping",20,100);
  text("1=brushing",20,115);
  text("2=bathing",20,140);
  text("3=exercise",20,165);
  text("4=eating",20,185);
  text("5=drinking",20,205);
  text("6=movinging",20,225);
 text.depth=space.depth+1


}
