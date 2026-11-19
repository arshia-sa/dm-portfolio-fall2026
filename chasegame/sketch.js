let ballX = 300;
let ballY = 300;
let ballSize = 40;
let score = 0;
let gameState = "START";
let colorred = 255;
let colorblue = 250;
let img;

async function setup() {
createCanvas(600, 600);
textAlign(CENTER);
textSize(20);
  imageMode(CENTER);
  img = await loadImage("cupcake2.png"); 

}

function draw() {
background(220);


if (gameState == "START") {
  startScreen();
}
  
if (gameState == "L1") {
levelOne();
}

if (gameState == "L2") {
levelTwo();
}

if (gameState == "L3") {
levelThree();
}

if (gameState == "L4") {
levelFour();
}  

if (gameState == "WIN") {
  winScreen();
}  
  
text("Score: " + score, width / 2, 40);

}

//START
function startScreen(){
  
  background (255, 204,255);
  fill(255);
  text("CATCH AND CHASE", width/2, height/2 -30);
  text("Press any key to start!", width/2, height/2 +10);

  if (keyIsPressed){
    gameState = "L1";
  }
}

//level 1

function levelOne() {

text("Level One", width / 2, height - 20);

let distToBall = dist(ballX, ballY, mouseX, mouseY);
if (distToBall < ballSize / 2) {
ballX = random(width);
ballY = random(height);
score = score + 1;
  
}

if (score >= 5) {
gameState = "L2";
}

line(ballX, ballY, mouseX, mouseY);

circle(ballX, ballY, ballSize);
}


//level 2
function levelTwo() {

text("Level Two", width / 2, height - 20);

let distToBall = dist(ballX, ballY, mouseX, mouseY);
if (distToBall < ballSize / 2) {
ballX = random(width);
ballY = random(height);
score = score + 1;
ballSize = ballSize -5;
  colorred = colorred - 25;
  colorblue = colorblue -10;
}

if (score >= 10) {
gameState = "L3";
}

//line(ballX, ballY, mouseX, mouseY);
fill (colorred,10,colorblue);
circle(ballX, ballY, ballSize);
}

//level3

function levelThree() {

text("Level Three", width / 2, height - 20);

let distToBall = dist(ballX, ballY, mouseX, mouseY);
if (distToBall < ballSize / 2) {
ballX = random(width);
ballY = random(height);
score = score + 1;
  ballSize = ballSize +35;
   
}

if (score >= 20) {
gameState = "L4";
ballSize = 20;
}

  image(img, ballX, ballY, ballSize, ballSize);
}


//Level4
function levelFour() {

text("Level Four", width / 2, height - 20);

let distToBall = dist(ballX, ballY, mouseX, mouseY);
  
if (distToBall < ballSize / 2) {
ballX = random(width);
ballY = random(height);
score = score + 1;   
}

  
if (score >= 25) {
gameState = "WIN";

}

text ("sprinkles", ballX, ballY-20);
fill (230,45,200);
circle (ballX+20, ballY+20, ballSize); 
fill (colorred +10, 33, colorblue +10);
rect (ballX-20, ballY+20, ballSize);  
   
circle(ballX, ballY, ballSize);
   
circle(ballX-20, ballY-20, ballSize);
   
rect (ballX+20, ballY-20, ballSize);   
}


//end game
function winScreen(){
  background (255, 204,255);
  fill(255);

  text("YOU WIN!", width/2,height/2);
}
