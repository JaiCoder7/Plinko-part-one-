const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var div1,div2,dive3,div4,div5;
var divisionHeight = 300;
var particles = [];
var plinkos = [];
var divisons = [];
for (var j = 40; j <= width; j=j+50){
  plinkos.push(new Plinko(j,75));
  }
  for(var j = 15; j <=width-10; j=j+50){
  plinkos.push(new Plinko(j,175));
  }
 
function setup() {
  
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,800,480,20);
  div1 = new Division(10, 800,10,450);
  div2 = new Division(100, 800,10,450);
  div3 = new Division(190, 800,10,450);
  //div4 = new Division(180, 800,10,450);
  div5 = new Division(290, 800,10,450);
  div6 = new Division(380, 800,10,450);
  div7 = new Division(470, 800,10,450);
  
   
  
}

function draw() {
  background(0);  

 ground.display();
div1.display();
div2.display();
div3.display();
//div4.display();
div5.display();
div6.display();
div7.display();

  
//plinko10.display();
  drawSprites();
}


