const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var paddle, ball;
function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;

    paddle = new Paddle(MouseX,height,200,20)
  
    ball=new Ball(900,450,20, 0);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    ball.display();
    paddle.display();
   

 
}
