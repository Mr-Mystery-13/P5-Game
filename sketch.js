//Ball Stuff

let xPosE;
let yPosE;

let BLeft, BRight, BTop, BBottom; 

let xSpeed;
let ySpeed;

let xDirection = 1;
let yDirection = 1;


//Box Stuff

let xPosB = 250;
let yPosB = 475;

let boxLeft, boxRight, boxTop, boxBottom; 

let speedBX = 3;


//Random

let score = 0;
let Prin;
let e = false;

function setup() {
     createCanvas(500, 500);
     background(0);

     xPosE = random(50, 451);
     yPosE = random(50, 451);

     xSpeed = random(-5, 4);
     ySpeed = random(-5, 4);

     rectMode(CENTER);
}

function draw() {
     background(0, 20);

     textAlign(LEFT);
     fill(255, 0, 0);
     textSize(20);
     Prin = "Score: " + score;
     text(Prin, 10, 30);

     //Box
     fill(255, 0, 0);
     rect(xPosB, yPosB, 100, 30);

     //Ball
     fill(0, 255, 255);
     ellipse(xPosE, yPosE, 30, 30);

     xPosE += xSpeed * xDirection;
     yPosE += ySpeed * yDirection;

     //If ball hits wall
     if (xPosE > 500 || xPosE < 0) {
          xDirection *= -1;
     }

     if (yPosE < 0) {
          yDirection *= -1;
     }

     //Box area
     boxTop = yPosB - 15;
     boxBottom = yPosB + 15;
     boxLeft = xPosB - 15;
     boxRight = xPosB + 15;

     //Ball area
     BLeft = xPosE - 15;
     BRight = xPosE + 15;
     BTop = yPosE - 15;
     BBottom = yPosE + 15;

     //If ball and box meet
     if (BLeft > boxRight || BRight < boxLeft || BTop > boxBottom || BBottom < boxTop) {

     }
     else {
          //If you un-comment xDirection it will go back
          //xDirection *= -1;
          yDirection *= -1;
          score += 1;
          xSpeed += 0.5;
          ySpeed += 0.5;
          speedBX += 0.5;
     }

     //Move
     if (keyIsDown(LEFT_ARROW)) {
          xPosB -= speedBX;
     }

     if (keyIsDown(RIGHT_ARROW)) {
          xPosB += speedBX;
     }

     //Lose
     if (yPosE > 500) {
          score = 'You LOST!';
     }

     //GOD
     if (keyIsDown(UP_ARROW) && keyIsDown(DOWN_ARROW) && keyIsDown(LEFT_ARROW) && keyIsDown(RIGHT_ARROW)) {     
          textAlign(CENTER, CENTER);
          textSize(40);
          text('GOD MODE', 250, 250);
          speedBX = 7;
          e = true;
     }
     if (e === true) {
          xPosB = xPosE;
     }
}

// function mouseClicked() {
//      textAlign(CENTER, CENTER);
//      textSize(40);
//      text('GOD MODE', 250, 250);
//      speedBX = 7;
//      e = true;
// }