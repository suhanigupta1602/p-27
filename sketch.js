const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint

var bob, bob2, bob3, bob4, bob5;
var roof;
var rope, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(700, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
	bob= new Bob(350,500, 50);
	bob2= new Bob(400,500, 50);
	bob3= new Bob(450,500, 50);
	bob4= new Bob(500,500, 50);
	bob5= new Bob(550,500, 50);
	roof= new Roof(350, 300, 450, 30);
	rope= new Rope(bob.body,{x:200, y:300});
	rope2= new Rope(bob2.body,{x:250, y:300});
	rope3= new Rope(bob3.body,{x:300, y:300});
	rope4= new Rope(bob4.body,{x:350, y:300});
	rope5= new Rope(bob5.body,{x:400, y:300});

	Engine.run(engine);
  
}


function draw() {
  background("pink");

  bob.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(bob.body, bob.body.position,{x:-50, y:-25})
	}
}


