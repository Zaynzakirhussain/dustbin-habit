const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box, pig1,backgroundimage,paperi,paper1;

function setup(){
    var canvas = createCanvas(1360,400);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(750,height,1700,20)

    box = new Bin(1330,350,70,70);
    //box2 = new Box(920,320,70,70);
    //pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    //box3 = new Box(700,240,70,70);
    //box4 = new Box(920,240,70,70);
    //pig3 = new Pig(810, 220);

    log2 =  new Log(810,180,300, PI/2);

    //box5 = new Box(810,160,70,70);
    log3 = new Log(760,120,150, PI/10);
    //log5 = new Log(870,120,150, -PI/10);

    paper1 = new paper(100,300);
    console.log(paper1);
}

function draw(){
    background(255);
    Engine.update(engine);

    paper1.display();
    
    if(paper1.x > 1200 && paper1.y > 300){
      paper1.position.x = 100;
      paper1.position.y = 300;
    }

    box.display();
   // box2.display();
    ground.display();

    log1.display();
    log2.display();
    log3.display();

    text("I KNOW THIS IS BORING BUT YOU MUST KEEP A HABIT..",300,100);
    text("when you reach the end press reload to maintain the habit",290,130);
    //fill("green");
}
function keyPressed() {
  if (keyCode === LEFT_ARROW) { 
    paper1.body.position.x =  paper1.body.position.x - 10;
  }
  if (keyCode === RIGHT_ARROW) { 
    paper1.body.position.x = paper1.body.position.x + 10; 
  }
  if (keyCode === UP_ARROW) { 
    paper1.body.position.y =  paper1.body.position.y - 10;
  }
  if (keyCode === DOWN_ARROW) { 
    paper1.body.position.y =  paper1.body.position.y + 10;
  }
}
