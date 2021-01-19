//Namespacing
const Engine = Matter.Engine ;
const World = Matter.World; 
const Bodies = Matter.Bodies; 
const Render = Matter.Render; 

var myEngine, myWorld, ground , ball ;

function setup() {
  createCanvas(400,400);
  
  //Create engine and world
  myEngine = Engine.create (); 
  myWorld = myEngine.world ;
/*
  var render = Render.create({
	  element: document.body,
	  engine: myEngine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
  });
  */

  //Add gravity
  var options = { 
    isStatic : true
  }

  //Create the ground
  ground = Bodies.rectangle (200,350,400,75, options) ; // create body
  World.add (myWorld, ground ); // add body to myworld

  //Add bounciness
  var ballOptions = {
      restitution : 1
  }

  //Create the ball
  ball = Bodies.circle (200,100,20,ballOptions);
  World.add(myWorld , ball);

  console.log(ball);
  console.log (ground);
  
  //Render.run (render);

}

function draw() {
  //Display the objects
  background("blue");  
  Engine.update (myEngine);
  rectMode (CENTER);
  rect (ground.position.x, ground.position.y,400,75) ;
  //drawSprites();
  ellipseMode(RADIUS);
  ellipse (ball.position.x,ball.position.y,20,20);

  console.log(ground.position.x);
  console.log(ground.position.y);
}