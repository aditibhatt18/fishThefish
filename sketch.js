var database;
var fish; 
var gameState =0; 

var ocean, oceanImg; 

function preload(){
  oceanImg = loadImage('ground.jpg');
  fishImg = loadImage('fish-0.png');  
}

function setup(){

  database = firebase.database();

  const h = displayHeight -200; 
  const w = displayWidth -100; 

  createCanvas(w,h); 

  ocean = createSprite(w/2,h/2); 
  ocean.addImage(oceanImg);

  fish = createSprite(250,250,10,10);
  fish.addImage(fishImg);
  fish.scale = 0.5; 

  var gameState = database.ref('GameState');
  gameState.on("value", readState, showError);
}

function draw(){
  background("white");
  
  if(keyCode === 32 && gameState ===0){
    if(keyCode === 37){
      fish.velocityX = -2; 
    }
    else if(keyCode === 39){
      fish.velocityX - 2; 
      //writeState(2);
    }
    else if(keyCode === 38){
      //writeState(3);
      fish.y = fish.y - 10; 
    }
    else if(keyCode === 39){
      //writeState(4);
      fish.y = fish.y + 10; 
    }*/
    gameState = 1; 
    writeState(1);
  }
    drawSprites();
  
}

function showError(){
  console.log("Error in writing to the database");
}

function readState(data){
  state = data.val();
  console.log(state);
}

function writeState(z){
  database.ref('/').set({
    'GameState':z
  })
}
