var roof,b1,b2,b3,b4,b5,r1,r2,r3,r4,r5;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	roof=new ground(400,70,800,10);
	b1=new paper(150,200,70);
	b2=new paper(220,200,70);
	b3=new paper(290,200,70);
	b4=new paper(360,200,70);
	b5=new paper(430,200,70);

	r1=new Slingshot(b1.body,roof.body,70*2,0);	





	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  roof.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  r1.display();
  
  drawSprites();
 
}



