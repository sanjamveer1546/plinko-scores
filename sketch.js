var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 var divisions=[]
var particles = [];
var plinkos = [];

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}


function draw() {
  background("black");
  
  Engine.update(engine);
  textSize(20)

 text("Score : "+score,20,30);
 for (var k = 25; k <=300; k = k +80) {
  text("500",k,550);
}
for (var k = 350; k <=450; k = k +80) {
  text("100",k,550);
}
for (var k = 500; k <=width; k = k +80) {
  text("200",k,550);
}

 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     
   }
 
  
  
    for (var j = 0; j < particles.length; j++) {
      if(particles[j]!==null){
        particles[j].display();
        if(particles[j].body.position.y>550){
          if(particles[j].body.position.x<300){
            score=score+500;
          }
          else if(particles[j].body.position.x>301&&particles[j].body.position.x<600){
            score=score+100;
          }
          else {
            score=score+200;
          }
          particles[j]=null;
        }
      }
    } 
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}