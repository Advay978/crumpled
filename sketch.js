                                             
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var r;
var paper, psprite;
var t = 0

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);
	paper=loadImage('paper.png')
    psprite = createSprite(1200,500);psprite.addImage(paper);psprite.visible = false
}


function draw() {
  rectMode(CENTER);
  background(230);


 

  

  groundObject.display();
  dustbinObj.display();
  drawSprites()
}
                                     
