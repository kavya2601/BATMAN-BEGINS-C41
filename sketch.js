const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine , world;
var maxDrops = 2000;
var drops = [];
var rand ;

var thunlightImg1 , thunlightImg2 , thunlightImg3, thunlightImg4;
var thunCreatedFrame = 0;

function preload(){
    thunlightImg1 = loadImage("1.png");
    thunlightImg2 = loadImage("2.png");
    thunlightImg3 = loadImage("3.png");
    thunlightImg4 = loadImage("4.png");    
}

function setup(){
   var canvas = createCanvas(1500 , 1500);

   engine =  Engine.create();
   world = engine.world;

   umbrella = new Umbrella(200 , 450);

   if(frameCount % 150 === 0){

       for(var i = 0 ; i<maxDrops ; i++){
           drops .push( new Drop(random(0,1400), random(0,1400)))
       }
       }
    }  
function draw(){
    background(255 , 255 , 255);
    Engine.update(engine);

    rand = Math.round(random(1,4));
    if(frameCount%80===0){
       thunCreatedFrame = frameCount;
       thun = createSprite(random(0 , 7000), random(0,7000),10,10);
       switch(rand){
           case 1: thun.addImage(thunlightImg1);
           break;
           case 2: thun.addImage(thunlightImg2);
           break;
           case 3: thun.addImage(thunlightImg3);
           break;
           case 4: thun.addImage(thunlightImg4);
           break;
           default: break;
       }
           thun.scale = random(03,2);
    }
   
   // if(thunCreatedFrame +10 === frameCount && thun){
   //     thun.destroy();
   // }

    umbrella.display();

      //displaying rain drops
      for(var i = 0; i<maxDrops; i++){
        drops[i].showDrop();
        drops[i].update();
      }
      textFont("Algerian");
      strokeWeight(4);
      stroke("white");
      textSize(45);
      fill("red");
      text("Portrait of Bruce, THE BATMAN", 600,200);

      textFont("Freestyle Script");
      strokeWeight(1);
      stroke("yellow")
      textSize(45);
      fill("white");
      text("View of a dark rainy night on the streets of Gotham...", 600,250);
  
      drawSprites();
    }