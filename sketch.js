var bubble,bubbleImg;
var garbage1Img,garbage2Img,garbage3Img;
var boneImg;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10;
var b11,b12,b13,b14,b15,b16,b17,b18,b19,b20;
var edges;
var garbage,bone;


function preload(){
bubbleImg=loadImage("./assets/dog1.jpg");
garbage1Img=loadImage("./assets/garbage.jpg");
garbage2Img=loadImage("./assets/garbage2.png");
garbage3Img=loadImage("./assets/garbage3.jpg");
boneImg=loadImage("./assets/bone.png");

}

function setup(){
createCanvas(700,700);

bubble=createSprite(50,50,10,10);
bubble.addImage(bubbleImg);
bubble.scale=0.07;

garbage=createSprite(160,400,10,10);
garbage.addImage(garbage1Img);
garbage.scale=0.2;

garbage=createSprite(250,250,10,10);
garbage.addImage(garbage2Img);
garbage.scale=0.03;

garbage=createSprite(350,550,10,10);
garbage.addImage(garbage3Img);
garbage.scale=0.2;

garbage=createSprite(500,150,10,10);
garbage.addImage(garbage1Img);
garbage.scale=0.2;

garbage=createSprite(150,50,10,10);
garbage.addImage(garbage2Img);
garbage.scale=0.03;

bone=createSprite(650,670,10,10);
bone.addImage(boneImg);
bone.scale=0.06;



b1=createSprite(100,40,10,100);
b2=createSprite(50,150,100,10);
b3=createSprite(200,40,10,1130);
b4=createSprite(150,240,100,10);
b5=createSprite(50,350,100,10);
b6=createSprite(50,500,100,10);
b7=createSprite(250,600,300,10);
b8=createSprite(400,555,10,100);
b9=createSprite(355,500,100,10);
b10=createSprite(300,455,10,100);
b11=createSprite(250,305,100,10);
b12=createSprite(250,200,100,10);
b13=createSprite(300,155,10,100);
//b14=createSprite(370,400,150,10);
b15=createSprite(445,150,10,350);
b16=createSprite(500,200,100,10);
b15.shapeColor="red"
b17=createSprite(550,155,10,100);
b18=createSprite(495,400,100,10);
b19=createSprite(540,550,10,300);
b20=createSprite(650,500,100,10);
}
//b15.velocityY=3;
function draw(){
background("lightblue");

if(keyDown("LEFT_ARROW")){
    bubble.x=bubble.x-5;
}

if(keyDown("RIGHT_ARROW")){
    bubble.x=bubble.x+5;
}

if(keyDown("UP_ARROW")){
    bubble.y=bubble.y-5;
}
if(keyDown("DOWN_ARROW")){
    bubble.y=bubble.y+5;
}

if(bubble.isTouching(bone)){
    gamestate=end;
}
edges=createEdgeSprites();

//b15.bounceOff(14);
b15.bounceOff(edges);
b15.bounceOff(b16);

drawSprites();
}