
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, groundObject, paperObject;
var world, engine;


function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;
	
	groundObject = new ground(width/2,670,width,20);
	dustbinObj = new dustbin(1200,650);
	paperObject = new Paper(400, 400, 30);

	Engine.run(engine);
  
}


function draw() {

	background(230);
	Engine.update(engine);
	
	groundObject.display();
	dustbinObj.display();
	paperObject.display();

}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(paperObject.body, paperObject.body.position, {x:180, y:-185});
	}
}

