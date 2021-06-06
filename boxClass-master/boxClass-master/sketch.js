const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, ground, pig1, log1, bird1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(225,100,50,100);
    ground = new Ground(200,380,400,10)
    pig1 = new Pig(200,200)
    log1 = new Log(200,180,100,PI/2)
    bird1 = new Bird(100,100)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    rectMode(CENTER);
    ground.display();
    pig1.display();
    log1.display();
bird1.display();
}