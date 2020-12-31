var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var myWorld,myEngine;
var b1,b2,b3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
    //package=Bodies.rectangle(width/2,200,10,10,{isStatic:true});
	//packageSprite=createSprite(width/2, 80, 10,10);
	//packageSprite.addImage(packageIMG);
	//packageSprite.scale=0.2
	//World.add(myWorld,package);

	//helicopterSprite=createSprite(width/2, 200, 10,10);
	//helicopterSprite.addImage(helicopterIMG)
	//helicopterSprite.scale=0.6

	//groundSprite=createSprite(width/2, height-35, width,10);
	//groundSprite.shapeColor="brown"


	myEngine = Engine.create();
	myWorld = myEngine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	//World.add(myWorld, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(myWorld, ground);

	 helicopter = Bodies.rectangle(width/2,200,50,50,{isStatic:true});
	World.add(myWorld,helicopter);

	packageBody = Bodies.rectangle(width/2,200,50,50,{restitution:1, isStatic:true});
	World.add(myWorld,packageBody);

	 
	 b1 = new Bucket(300,610,20,80);//right
	 b2 = new Bucket(400,640,200,20);//base
	 b3 = new Bucket(500,610,20,80);//left

	
	 
 	/*boxPosition=width/2-100
 	boxY=610;


 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition, boxY, 20,100 , {isStatic:true} );
 	World.add(myWorld, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+40, 200,20 , {isStatic:true} );
 	World.add(myWorld, boxBottomBody);

 	boxRightSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxRightSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200, boxY, 20,100 , {isStatic:true} );
 	World.add(myWorld, boxRightBody);


	//Engine.run(engine);*/
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  Engine.update(myEngine);


  
  
  imageMode(CENTER);
  image(packageIMG,packageBody.position.x,packageBody.position.y,50,50);
  image(helicopterIMG,helicopter.position.x,helicopter.position.y,250,200);
  fill("brown");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20)


  b1.display();
  b2.display();
  b3.display();



  
}

function keyPressed() {
  /*if (keyCode === LEFT_ARROW) {

    helicopterSprite.x=helicopterSprite.x-20;    
    translation={x:-20,y:0}
    Matter.Body.translate(packageBody, translation)

  }
   else if (keyCode === RIGHT_ARROW) {
    helicopterSprite.x=helicopterSprite.x+20;
    translation={x:20,y:0}
    Matter.Body.translate(packageBody, translation)
  }*/
  if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



