
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(900, 800);


	engine = Engine.create();
	world = engine.world;

	var ball_options = {
	isStatic: false,
	restitution: 0.3,
	friction: 0,
	density: 1.2
	};

	//Create the Bodies Here.
	ball = Bodies.circle(200, 10, 15, ball_options);
   World.add(world, ball);

   groundObj = new Ground(450, 790, width, 10);
   leftSide = new Ground(700, 750, 10, 70);
   rightSide = new Ground(850, 750, 10, 70);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  groundObj.display();
  leftSide.display();
  rightSide.display();

  ellipse(ball.position.x,ball.position.y,30);

 

  Engine.update(engine);

 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
 Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.03});
	}	
}



