const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ground;
var pendulam;
var chain;

function setup(){
    var canvas = createCanvas(
        window.innerWidth,
        window.innerHeight
    );
    engine = Engine.create();
    world = engine.world;

    pendulam = new Box(width / 2, height - (height / 2.5), 50, 50);


    ground = new Ground(width / 2, height / 2 - (height / 2), width / 16, 20);
    chain = new Chain(ground.body, pendulam.body);
}

function draw(){
    background(255);
    Engine.update(engine);
    text("press the mouse anywhere on the screen to move the pendulam accordingly", width / 2, height / 2, width  /2 + 100 , height / 2 + 100);
    line(pendulam.body.position.x, pendulam.body.position.y, ground.body.position.x, ground.body.position.y);
    ground.display();
    pendulam.display();
    ellipse(pendulam.body.position.x, pendulam.body.position.y, (width / 4) / 2);
   
}

function mouseClicked(){
    pendulam.body.position.x = mouseX;
}