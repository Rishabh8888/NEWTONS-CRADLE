const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render ;

var BobObj1 , BobObj2 , BobObj3 , BobObj4 , BobObj5 ;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(375,100,500,30) ;
    
	BobObj1 = new Bob(200,400,75) ;
	BobObj2 = new Bob(275,400,75) ;
	BobObj3 = new Bob(350,400,75) ;
	BobObj4 = new Bob(425,400,75) ;
	BobObj5 = new Bob(500,400,75) ;

	rope1 = new Rope(BobObj1.body,roof.body,-BobDiameter*2,0)
	rope2 = new Rope(BobObj2.body,roof.body,-BobDiameter*2,0)
	rope3 = new Rope(BobObj3.body,roof.body,-BobDiameter*2,0)
	rope4 = new Rope(BobObj4.body,roof.body,-BobDiameter*2,0)
	rope5 = new Rope(BobObj5.body,roof.body,-BobDiameter*2,0)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  
  roof.display() ;
  
  rope1.display();
  rope1.display();
  rope1.display();
  rope1.display();
  rope1.display();

  BobObj1.display() ;
  BobObj2.display() ;
  BobObj3.display() ;
  BobObj4.display() ;
  BobObj5.display() ;

  drawSprites();
 
}



