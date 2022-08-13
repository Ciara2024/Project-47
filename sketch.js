
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var gamestate = 0
function preload()
{
Background = loadImage("Images/Background.jpg")
Ball = loadImage("Images/Ball.png")
Goal = loadImage("Images/Goal.png")
Platform = loadImage("Images/platform.jpg")
Star = loadImage("Images/Star.jpg")
Arrow = loadImage("Images/Arrow.png")
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Matter.Bodies.circle(windowWidth-100,100,50)
	World.add(world,ball)
	platform1 = new Platforms (1250,125,150,20)
	platform2 = new Platforms (windowWidth-200,windowHeight-100,150,20)
	goal = createSprite(windowWidth-100,windowHeight-20,30,30)
	goal.addImage(Goal)
	goal.scale=0.5
	arrow = Matter.Bodies.rectangle(ball.position.x,ball.position.y,100,10)
	World.add(world,arrow)
	var Angle = arrow.angle
	Angle = Angle*(3.14/180)
	jointLink = new Lnk(ball, arrow);
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(Background);
  image(Ball,ball.position.x,ball.position.y,50,50)
  image(Arrow,arrow.position.x,arrow.position.y,100,10)
  platform1.display()
  platform2.display()
  collide(ball,goal)
  drawSprites();
 
}

function collide(body,sprite){
	var distance= dist(body.position.x, body.position.y, sprite.position.x, sprite.position.y)
	if(distance<=30){
		World.remove(world,ball)
		textSize(20)
		text("Good Job!",500,200)
	}
}

function shoot(){
	if (keyIsDown(RIGHT_ARROW)) {
		arrow.angle += 1;
	  }
  
	  if (keyIsDown(LEFT_ARROW)) {
		arrow.angle -= 1;
	  }
	  rotate(arrow.angle);

}