
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5, roof;
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	createCanvas(1350, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roof=new Holder(675,40,600,40);

	bob1 = new bob(525,400,75);
	bob2 = new bob(600,400,75);
	bob3 = new bob(675,400,75);
	bob4 = new bob(750,400,75);
	bob5 = new bob(825,400,75);
	

	rope1=new Chain(bob1.body,roof.body,-150, 0);
	rope2=new Chain(bob2.body,roof.body,-75, 0);
	rope3=new Chain(bob3.body,roof.body,0, 0);
	rope4=new Chain(bob4.body,roof.body,75, 0);
	rope5=new Chain(bob5.body,roof.body,150, 0);

}


function draw() {
  rectMode(CENTER);
	
  Engine.update(engine);
  background(230);

  fill(0);
  textSize(18);
  text("Lakshay",50,70);
  textSize(14); 
  text("dont forget to put command for applying force on pressing up arroW key",50,100);
  textSize(25); 
  text("also, put some of your creativity for examle put image instead of bobs or anything",50,150);
  


  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()	
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 
  roof.display();
  
  
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

   
  	}
}








