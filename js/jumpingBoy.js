/*
    IMPORT ASSETS 
*/
import Button from "./button.js";
import Brick from "./brick.js";
import Boy from "./boy.js";
import Coin from "./coin.js";
/*
    ALL VARIABLES
*/
//font
let gameFont;
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
let brick;
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
//positions and gravity
let boyX = 100;
let boyY = 500;
let boyH = 51;
let boyW = 31;
let gravity = 3;
let brickX = 20;
let brickY = 220;
let brickH = 100;
let brickW = 100;
let groundLevel = 570;
let coinX = 100;
let coinY = 100;
let lastX = 0;
let lastY = 0;
//boy
let boy;
/*
    GAME PRELOAD 
*/
function preload() {
  gameFont = loadFont("font/PressStart2P-Regular.ttf");
}
window.preload = preload;
/*
    GAME SETUP 
*/
function setup() {
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
  brick = new Brick(brickX, brickY + 100, brickW, brickH);
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
    brick,
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
  
} 
window.setup = setup;

/*
    GAME ASSETS 
*/

//garrit code
function ground(y) {
  fill(34, 139, 34);
  stroke(34, 139, 34);
  rect(0, y, width, height - y);
}

/*
    ALL SCREENS
*/

//start screen (MAIN)
function startScreen() {
  background(20, 94, 204);
  //text
  fill(255);
  textSize(40);
  text("Jumping Boy", 500, 140);

  //buttons
  stageButton.display();
  rulesButton.display();

  //ground
  ground(370);
}
//rules screen (MAIN)
function rulesScreen() {
  background(20, 94, 204);
  //text
  fill(255);
  textSize(40);
  text("Rules", 630, 140);
  textSize(13.5);
  text("Reach the top within the time limit to win", 450, 180);
  textSize(35);
  text("Controls", 590, 250);
  textSize(13.5);
  text("Spacebar: to jump, Arrows: to move", 500, 300);
  //buttons
  rulesBackButton.display();
  //ground
  ground(370);
}
//stages screen (MAIN)
function stagesScreen() {
  background(20, 94, 204);
  //text
  fill(255);
  textSize(40);
  text("Stages", 590, 140);
  //buttons
  //stagesBackButton(100, 40);
  //stage1Button(60, 55);
  stage1Button.display();
  stagesBackButton.display();

  //ground
  ground(370);
}
//game screen (MAIN)
function stageScreen1() {
  background(20, 94, 204);
}
//won screen (MAIN)
function wonScreen() {
  background(20, 94, 204);
  //text
  fill(255);
  textSize(40);
  text("You Won", 565, 130);
  //buttons
  replayButton.display();
  exitWonButton.display();

  //ground
  ground(370);
}
//lost screen (MAIN)
function lostScreen() {
  background(20, 94, 204);
  //text
  fill(255);
  textSize(40);
  text("You Lost", 548, 130);
  //buttons
  tryAgainButton.display();
  exitLostButton.display();
  //ground
  ground(370);
}

let collisionState = false;
function checkCollision() {
  for (let brick of brickArr) {
    if (
    (boy.x + boy.width) >= brick.x && 
    boy.x <= (brick.x + brick.width - 50) && 
    (boy.y + boy.height) >= brick.y && 
    boy.y <= (brick.y + brick.height - 50)) {
       return collisionState = true;
    } else {
       return collisionState = false;
    }
  }
}

//states
let state = "start_page";

//time
let totalTime;
let otherScreensTime;
let gameTime;
let finalGameTime;

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
    otherScreensTime = otherScreensTime;
    gameTime = int((totalTime - otherScreensTime) / 1000);
    textSize(13);
    fill(255);
    text(gameTime + " Seconds", 20, 30);

    lastX = boyX;
    lastY = boyY;
    //character
    boy.display(boy.x, boy.y, boy.width, boy.height);
    push();
    //bricks
    for (let brick of brickArr) {
      brick.display(brick.x, brick.y, brick.width, brick.height);  
    }
    //coins
    for (let coin of coinArr) {
      coin.display();
    }
    //ground
    ground(groundLevel);
    pop();


    //LEFT AND RIGHT
    if (keyIsDown(65) && boy.x > 0) {
        boy.x -= 5;
    } else if (keyIsDown(68) && boy.x < 1400) {
        boy.x += 5;
    }
  
    // COLLISION 
  //   if (
  //     boy.y + boy.height > brick.y - brick.height &&
  //     boy.x > brick.x + (brick.width + 150) &&
  //     boy.x < brick.x + (brick.width + 250) &&
  //     boy.y + boy.height < brick.y - (brick.height - 50)
  //   ) {
  //     console.log("above second collusion");
  //     if (keyIsDown(87) && boy.y < 650) {
  //       gravity = 5;
  //       boy.y -= gravity;
  //     }
  //   } else if (
  //     boy.y + boy.height < brick.y - brick.height &&
  //     boy.x > brick.x + (brick.width + 150) &&
  //     boy.x < brick.x + (brick.width + 250) &&
  //     boy.y > brick.y - (brick.height - 50)
  //   ) {
  //     console.log("below");
  //     if (keyIsDown(87) && boy.y < 650) {
  //         gravity = 5;
  //         boy.y -= gravity;
  //     } 
  // } else {
    checkCollision();
    for (let brick of brickArr) { 
      if (collisionState === true) {
        if (keyIsDown(87)) {
          gravity = 0;
          boy.y = brick.y + 50;
          console.log("true up"); 
        } else if (boy.y < groundLevel - 50) {
          gravity = 1;
          let boyPosition = boy.y + boy.height;
          boyPosition += gravity;
          console.log("true down");
        }
      } else if (collisionState === false) {
        if (keyIsDown(87)) {
          gravity = 1;
          boy.y -= gravity
          //console.log("false up");
        } else if (boy.y < groundLevel - 50) {
          gravity = 1;
          boy.y += gravity;
          //console.log("false down");
      }
      }
    }
    
    
    
    

    //time stuff
    if (gameTime >= 5000) {
      state = "lost_page";
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

// The following 20 lines of code was added by courtesy of Garrit Schaap
function mouseClicked() {
  if (state === "start_page" && stageButton.hitTest(mouseX, mouseY)) {
    state = "stages_page";
  } else if (state === "start_page" && rulesButton.hitTest(mouseX, mouseY)) {
    state = "rules_page";
  } else if (
    state === "stages_page" &&
    stagesBackButton.hitTest(mouseX, mouseY)
  ) {
    state = "start_page";
  } else if (
    state === "rules_page" &&
    rulesBackButton.hitTest(mouseX, mouseY)
  ) {
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


