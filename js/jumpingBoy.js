/*
    IMPORT ASSETS 
*/


import Button from "./button.js";
import Brick from "./brick.js";
import Boy from "./boy.js";
import Coin from "./coin.js";
import Obstacle from "./obstacle.js";


/*
    ALL VARIABLES
*/


//font
let gameFont;
//image
let backgroundImg;
//buttons
let stageButton;
let rulesButton;
let rulesBackButton;
let stage1Button;
let stagesBackButton;
let tryAgainButton;
let replayButton;
let exitWonButton;
let exitLostButton;
//bricks
let brickArr = [];
let brick1;
let brick2;
let brick3;
let brick4;
let brick5;
let brick6;
let brick7;
let brick8;
let brick9;
let brick10;
let brick11;
let brick12;
let brick13;
let brick14;
let brick15;
let brick16;
let brick17;
//coin
let coinArr = [];
let coin;
let coin2;
let coin3;
let coin4;
let coin5;
let coin6;
let coin7;
let coin8;
let coin9;
let coin10;
let coin11;
let coin12;
let coin13;
let coin14;
let coin15;
let coin16;
let coin17;
//obstacle
let obstacleArr = [];
let obstacle1;
let obstacle2;
let obstacle3;
let obstacle4;
let obstacle5;
let obstacle6;
let obstacle7;
let obstacle8;
//boy positions
let boyX = 100;
let boyY = 400;
let boyH = 51;
let boyW = 31;
//brick positions
let brickX = 20;
let brickY = 220;
let brickH = 100;
let brickW = 100;
//coin positions
let coinX = 100;
let coinY = 100;
//obstacle position
let obstacleX = 100;
let obstacleY = 100;
let obstacleW = 50;
let obstacleH = 50;
//gravity 
let gravity = 3;
//ground position 
let groundLevel = 530;
//boy
let boy;
//states
let state = "start_page";
//time
let totalTime;
let otherScreensTime;
let timeLimit = 60;
let gameTime;
let finalGameTime;


/*
    GAME PRELOAD 
*/


function preload() {
  gameFont = loadFont("font/PressStart2P-Regular.ttf");
  // source https://toppng.com/starry-sky-stars-space-dark-astronomy-PNG-free-PNG-Images_447546
  backgroundImg = loadImage("png/sky.jpg");
  
}

window.preload = preload;


/*
    GAME SETUP 
*/


function setup() {
  //canvas
  createCanvas(1500, 650);
  //font
  textFont(gameFont);
  //frame per second
  frameRate(30);
  //buttons
  stageButton = new Button((width - 400) / 2, 250, 150, 50, "Stage");
  rulesButton = new Button((width - 0) / 2, 250, 150, 50, "Rules");
  rulesBackButton = new Button((width - 900) / 2, 20, 100, 40, "Back");
  stage1Button = new Button((width - 400) / 2, 200, 60, 55, "1");
  stagesBackButton = new Button((width - 900) / 2, 20, 100, 40, "Back");
  tryAgainButton = new Button((width - 400) / 2, 250, 180, 50, "Try again");
  replayButton = new Button((width - 400) / 2, 250, 150, 50, "Replay");
  exitWonButton = new Button((width - 0) / 2, 250, 150, 50, "Exit");
  exitLostButton = new Button((width + 10) / 2, 250, 150, 50, "Exit");
  //bricks
  brick1 = new Brick(brickX, brickY + 100, brickW, brickH);
  brick2 = new Brick(brickX + 50, brickY + 100, brickW, brickH);
  brick3 = new Brick(brickX + 100, brickY + 100, brickW, brickH);

  brick4 = new Brick(brickX + 250, brickY - 100, brickW, brickH);
  brick5 = new Brick(brickX + 300, brickY - 100, brickW, brickH);

  brick6 = new Brick(brickX + 450, brickY + 50, brickW, brickH);
  brick7 = new Brick(brickX + 500, brickY + 50, brickW, brickH);

  brick8 = new Brick(brickX + 700, brickY + 150, brickW, brickH);
  brick9 = new Brick(brickX + 750, brickY + 150, brickW, brickH);
  brick10 = new Brick(brickX + 800, brickY + 150, brickW, brickH);

  brick11 = new Brick(brickX + 900, brickY - 100, brickW, brickH);
  brick12 = new Brick(brickX + 950, brickY - 100, brickW, brickH);
  brick13 = new Brick(brickX + 1000, brickY - 100, brickW, brickH);

  brick14 = new Brick(brickX + 700, brickY - 100, brickW, brickH);

  brick15 = new Brick(brickX + 1100, brickY + 200, brickW, brickH);
  brick16 = new Brick(brickX + 1150, brickY + 200, brickW, brickH);
  brick17 = new Brick(brickX + 1300, brickY, brickW, brickH);
  brickArr.push(
    brick1,
    brick2,
    brick3,
    brick4,
    brick5,
    brick6,
    brick7,
    brick8,
    brick9,
    brick10,
    brick11,
    brick12,
    brick13,
    brick14,
    brick15,
    brick16,
    brick17
  );
  //boy
  boy = new Boy(boyX, boyY, boyW, boyH);
  //coins
  coin = new Coin(coinX-25, coinY +180, 30, 30);//
  coin2 = new Coin(coinX -75, coinY +180, 30, 30);//
  coin3 = new Coin(coinX+25, coinY +180, 30, 30);//

  coin4 = new Coin(coinX +370, coinY+ 130, 30, 30);//
  coin5 = new Coin(coinX+ 420, coinY + 130, 30, 30);//

  coin6 = new Coin(coinX+670, coinY +230, 30, 30);//
  coin7 = new Coin(coinX+720, coinY +230, 30, 30);//
  coin8 = new Coin(coinX+ 630, coinY+230, 30, 30);//

  coin9 = new Coin(coinX+ 870, coinY -20, 30, 30);//
  coin10 = new Coin(coinX+925, coinY -20, 30, 30);//
  coin11 = new Coin(coinX+820, coinY-20, 30, 30);//

  coin12= new Coin(coinX+ 1030 , coinY +280, 30, 30);//
  coin13= new Coin(coinX + 1070, coinY +280, 30, 30);//

  coin14 = new Coin(coinX + 220, coinY - 20, 30, 30);//
  coin15 = new Coin(coinX + 180, coinY - 20, 30, 30);//

  coin16 = new Coin(coinX + 620, coinY - 20, 30, 30);//
  coin17 = new Coin(coinX + 1220, coinY +80, 30, 30);//
  coinArr.push(
    coin,
    coin2,
    coin3,
    coin4,
    coin5,
    coin6,
    coin7,
    coin8,
    coin9,
    coin10,
    coin11,
    coin12,
    coin13,
    coin14,
    coin15,
    coin16,
    coin17 
  );
  //obstacles
  obstacle1 = new Obstacle(obstacleX, obstacleY + 30, obstacleW / 1.2, obstacleH / 1.2);
  obstacle2 = new Obstacle(obstacleX + 1100, obstacleY + 80, obstacleW / 1.2, obstacleH / 1.2);
  obstacle3 = new Obstacle(obstacleX + 200, obstacleY + 200, obstacleW / 1.2, obstacleH / 1.2);
  obstacle4 = new Obstacle(obstacleX + 550, obstacleY + 150, obstacleW / 1.2, obstacleH / 1.2);
  obstacle5 = new Obstacle(obstacleX + 1300, obstacleY - 20, obstacleW / 1.2, obstacleH / 1.2);
  obstacle6 = new Obstacle(obstacleX + 900, obstacleY + 200, obstacleW / 1.2, obstacleH / 1.2);
  obstacle7 = new Obstacle(obstacleX + 400, obstacleY + 10, obstacleW / 1.2, obstacleH / 1.2);
  obstacle8 = new Obstacle(obstacleX + 730, obstacleY + 100, obstacleW / 1.2, obstacleH / 1.2);
  obstacleArr.push(
    obstacle1,
    obstacle2,
    obstacle3,
    obstacle4,
    obstacle5,
    obstacle6,
    obstacle7,
    obstacle8
  );
} 

window.setup = setup;


// The following 5 lines of code was added by courtesy of Garrit Schaap
function ground(y) {
  fill(38, 11, 36);
  stroke(38, 11, 36);
  rect(0, y, width, height - y);
}


/*
    ALL SCREENS
*/


//start screen (MAIN)
function startScreen() {
  image(backgroundImg, 0, 0);
  backgroundImg.resize(1500, 750);
  //text
  noStroke();
  fill(255);
  textSize(40);
  text("Floating Boy", 500, 160);

  //buttons
  stageButton.display();
  rulesButton.display();

  //ground
  ground(520);
}
//rules screen (MAIN)
function rulesScreen() {
  image(backgroundImg, 0, 0);

  //text
  noStroke();
  fill(255);
  textSize(40);
  text("Rules", 630, 160);
  textSize(13.5); 
  text("Collect the coins within the time limit to win", 420, 200);
  text("If you bump against a purple square you will lose", 410, 260);
  textSize(35);
  text("Controls", 590, 360);
  textSize(13.5);
  text("W: to float, A and D: to move", 535, 410);
  //buttons
  rulesBackButton.display();
  //ground
  ground(520);
}
//stages screen (MAIN)
function stagesScreen() {
  image(backgroundImg, 0, 0);

  //text
  noStroke();
  fill(255);
  textSize(40);
  text("Stages", 590, 140);
  //buttons
  //stagesBackButton(100, 40);
  //stage1Button(60, 55);
  stage1Button.display();
  stagesBackButton.display();

  //ground
  ground(520);
}
//game screen (MAIN)
function stageScreen1() {
  background(20, 94, 204);
  image(backgroundImg, 0, 0);
  noStroke();
}
//won screen (MAIN)
function wonScreen() {
  image(backgroundImg, 0, 0);

  //text
  noStroke();
  fill(255);
  textSize(40);
  text("You Won", 575, 130);
  //buttons
  replayButton.display();
  exitWonButton.display();

  //ground
  ground(520);
}
//lost screen (MAIN)
function lostScreen() {
  image(backgroundImg, 0, 0);

  //text
  noStroke();
  fill(255);
  textSize(40);
  text("You Lost", 557, 130);
  //buttons
  tryAgainButton.display();
  exitLostButton.display();
  //ground
  ground(520);
}


/*
    COLLISION FUNCTIONS
*/

//brick collision
function checkCollisionBrick(brick) {
  if (
  (boy.x + boy.width) >= brick.x && 
  boy.x <= (brick.x + brick.width - 50) && 
  (boy.y + boy.height) >= brick.y && 
  boy.y <= (brick.y + brick.height - 50)) {
    return true;
  } else {
    return false;
  }
}
//obstacle collision
function checkCollisionObstacle(obstacle){
  if (
  (boy.x + boy.width) >= obstacle.x &&
  boy.x <= (obstacle.x + obstacle.width) &&
  (boy.y + boy.height) >= obstacle.y &&
  boy.y <= (obstacle.y + obstacle.height)) {
  return true;
} else { 
  return false;
}
}


/*
    DRAW FUNCTION
*/


function draw() {
  totalTime = millis();
  if (state === "start_page") {
    startScreen();
    // The following 1 lines of code was adapted from https://www.youtube.com/watch?v=iR0m6j8RwAI Accessed: 2022-04-15
    otherScreensTime = totalTime;
  } else if (state === "stages_page") {
    stagesScreen();
    // The following 1 lines of code was adapted from https://www.youtube.com/watch?v=iR0m6j8RwAI Accessed: 2022-04-15
    otherScreensTime = totalTime;
  } else if (state === "rules_page") {
    rulesScreen();
    // The following 1 lines of code was adapted from https://www.youtube.com/watch?v=iR0m6j8RwAI Accessed: 2022-04-15
    otherScreensTime = totalTime;
  } else if (state === "stage1_page") {
    stageScreen1();
    // The following 5 lines of code was adapted from https://www.youtube.com/watch?v=iR0m6j8RwAI Accessed: 2022-04-15
    //time properties 
    otherScreensTime = otherScreensTime;
    gameTime = int((totalTime - otherScreensTime) / 1000);

    textSize(13);
    fill(255);
    text("Time: " + (timeLimit - gameTime) + " seconds", 20, 30);

    //character
    boy.display(boy.x, boy.y, boy.width, boy.height);
    //bricks
    for (let brick of brickArr) {
      //displays the bricks
      brick.display(brick.x, brick.y, brick.width, brick.height);  
      //collision
      if (checkCollisionBrick(brick) === true && brick.y !== 0 && brick.x !== -10) {
        if (keyIsDown(87) && boy.y <= brick.y) {
          //makes the character jump from the top of the bricks
          gravity = 1;
          boy.y -= gravity;
        } else if (boy.y <= brick.y) {
          //makes the character stop on top of the bricks
          gravity = 0;
          boy.y = brick.y - boy.height - 5;
        } 
        if (keyIsDown(87) && boy.y >= brick.y) {
          //makes the character unable to go through the bricks
          gravity = 0;
          boy.y = brick.y + brick.height - 44;
        } 
      } else {
        if (keyIsDown(87)) {
          //makes the character jump when there is no collision
          gravity = 0.5; 
          boy.y -= gravity
        } else if (boy.y < groundLevel - 50) {
          //makes the character fall when there is no collision
          gravity = 0.5;
          boy.y += gravity;
       }
      }
    }
    //coins
    for (let coin of coinArr) {
      //displays the coins
      coin.display();
      //remove coins from the array when they collide with the character
      if (boy.y <= coin.y && boy.y + boy.height >= coin.y && boy.x <= coin.x && boy.x + boy.width >= coin.x) {
        coinArr.splice(coinArr.indexOf(coin), 1); 
      }
    }
    text("Remaining coins: " + coinArr.length, 1230, 30);
    //obstacles
    for (let obstacle of obstacleArr) {
      obstacle.display();
      if(checkCollisionObstacle(obstacle) === true) {
        state = "lost_page";
        finalGameTime = gameTime;
        coinArr = [];
        coinArr.push(
          coin,
          coin2,
          coin3,
          coin4,
          coin5,
          coin6,
          coin7,
          coin8,
          coin9,
          coin10,
          coin11,
          coin12,
          coin13,
          coin14,
          coin15,
          coin16,
          coin17 
        );
        boy.x = boyX;
        boy.y = boyY;
        finalGameTime = gameTime;
      }
    }
    //ground
    ground(groundLevel);
    //makes the character move right or left
    if (keyIsDown(65) && boy.x > 0) {
        boy.x -= 5;
    } else if (keyIsDown(68) && boy.x < 1400) {
        boy.x += 5;
    }
    //game conditions 
    if ((timeLimit - gameTime) <= 0 && coinArr.length !== 0 || boy.y < 0) {
      state = "lost_page";
      finalGameTime = gameTime;
      coinArr = [];
      coinArr.push(
        coin,
        coin2,
        coin3,
        coin4,
        coin5,
        coin6,
        coin7,
        coin8,
        coin9,
        coin10,
        coin11,
        coin12,
        coin13,
        coin14,
        coin15,
        coin16,
        coin17 
      );
      boy.x = boyX;
      boy.y = boyY;
      finalGameTime = gameTime;
    } else if ((timeLimit - gameTime) >= 0 && coinArr.length === 0) {
      state = "won_page";
      coinArr.push(
        coin,
        coin2,
        coin3,
        coin4,
        coin5,
        coin6,
        coin7,
        coin8,
        coin9,
        coin10,
        coin11,
        coin12,
        coin13,
        coin14,
        coin15,
        coin16,
        coin17 
      );
      boy.x = boyX;
      boy.y = boyY;
      finalGameTime = gameTime;
    }
  } else if (state === "won_page") {
    wonScreen();
    // The following 1 lines of code was adapted from https://www.youtube.com/watch?v=iR0m6j8RwAI Accessed: 2022-04-15
    otherScreensTime = totalTime;
  } else if (state === "lost_page") {
    lostScreen();
    // The following 1 lines of code was adapted from https://www.youtube.com/watch?v=iR0m6j8RwAI Accessed: 2022-04-15
    otherScreensTime = totalTime;
  }
}

window.draw = draw;


/* 
    MOUSE CLICK FUNCTION
*/

//makes the buttons clickable
// The following 20 lines of code was added by courtesy of Garrit Schaap
function mouseClicked() {
  if (state === "start_page" && stageButton.hitTest(mouseX, mouseY)) {
    state = "stages_page";
  } else if (state === "start_page" && rulesButton.hitTest(mouseX, mouseY)) {
    state = "rules_page";
  } else if (state === "stages_page" && stagesBackButton.hitTest(mouseX, mouseY)) {
    state = "start_page";
  } else if (state === "rules_page" && rulesBackButton.hitTest(mouseX, mouseY)) {
    state = "start_page";
  } else if (state === "stages_page" && stage1Button.hitTest(mouseX, mouseY)) {
    state = "stage1_page";
  } else if (state === "won_page" && replayButton.hitTest(mouseX, mouseY)) {
    state = "stage1_page";
  } else if (state === "won_page" && exitWonButton.hitTest(mouseX, mouseY)) {
    state = "start_page";
  } else if (state === "lost_page" && tryAgainButton.hitTest(mouseX, mouseY)) {
    state = "stage1_page";
  } else if (state === "lost_page" && exitLostButton.hitTest(mouseX, mouseY)) {
    state = "start_page";
  }
}

window.mouseClicked = mouseClicked;