var balloon,database,position;
function preload(){
  ball = loadImage("balloon.png")
}
function setup() {
  database =firebase.database();
  console.log(database);
  createCanvas(500,500);
 balloon =  createSprite(250, 250, 50, 50);
 balloon.addImage(ball)
 balloon.scale=0.1

 var ballposition = database.ref('balloon/position');
 ballposition.on("value",readPosition,showError);
}

function draw() {
  background("yellow"); 
  if(keyDown (LEFT_ARROW)){
    changePosition(-1,0);
  } 
  else if (keyDown(RIGHT_ARROW)){
    changePosition(+1,0);
  }
  else if (keyDown(UP_ARROW)){
    changePosition(0,-1);
  }
    else if (keyDown(DOWN_ARROW)){
      changePosition(0,+1);
    }
  
  drawSprites();
}
function changePosition(x,y){
  balloon .x = balloon.x+x;
  balloon.y  =  balloon.y+y
}
function readPosition(data){
  position = data.val();
  console.log(position.x);
  balloon.x = position.x;
  balloon.y = position.y;
}
function showError(){
  console.log("error on the database");
}