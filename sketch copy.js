let lefthalfQuadrant;
let righthalfQuadrant;

function setup() {
  createCanvas(600, 600);

  lefthalfQuadrant = new LeftScreen();
  righthalfQuadrant = new RightScreen();
}

function draw() {
  background(255);

  lefthalfQuadrant.display();
  righthalfQuadrant.display();
}

class LeftScreen {

  display() {
    let lX = 0;
    let lY = 0;
    let rX = 300;
    let rY = 300;
    let blX = 0;
    let blY = 300;
    let brX = 300;
    let brY = 600;
    rectMode(CORNERS);
    //(i < height/2) && ( lX < 250) && (lY < 250); assures that the loop does not continue to color or draw squares the adjacent half of the screen
    //without it the loop continues and the color of the adjacent square turns black
    //controls the top left quadrant
    for(let i = 0; (i < height/2) && ( lX < 250) && (lY < 250); i += 10){
      noStroke();
      fill(108,179-i,108);//green
      rect(lX,lY,rX,rY);
      lX = lX + i;
      lY = lY + i;
      //(j <= height/2)&&(blX <= 300)&&(brY >= 300); assures that the loop does not continue to color or draw squares the adjacent half of the screen
      //without it the loop continues and the color of the adjacent square turns black
      //controls bottom left quadrant
      for(let j = 0; (j <= height/2)&&(blX <= 300)&&(brY >= 300); j = j +10){
        fill(108,179-j,108);//green
        noStroke();
        rect(blX,blY,brX,brY);
        brY = brY - j;
        blX = blX + j;
    }
  }
  }
}


class RightScreen{
  
  display(){
    let lX = 300;
    let lY = 300;
    let rX = 600;
    let rY = 600;
    let blX = 300;
    let blY = 0;
    let brX = 600;
    let brY = 300;
    rectMode(CORNERS);
    //(i < height/2) && (rX >= 250) && (rY >= 250); assures that the loop does not continue to color or draw squares the adjacent half of the screen
    //without it the loop continues and the color of the adjacent square turns black
    //controls the bottom right quadrant
    for(let i = 0; (i < height/2) && (rX >= 250) && (rY >= 250); i = i + 10){
      noStroke();
      fill(108,179-i,108);//green
      rect(lX,lY, rX,rY);
      rX = rX - i;
      rY = rY - i;
      //(j < height/2) && (brX >= 250) && (blY <= 250); assures that the loop does not continue to color or draw squares the adjacent half of the screen
      //without it the loop continues and the color of the adjacent square turns black
      //controls the top right quadrant
      for(let j = 0; (j < height/2) && (brX >= 250) && (blY <= 250); j = j + 10){
        fill(108,179-j,108);//green
        noStroke();
        rect(blX,blY, brX,brY);
        brX = brX - j;
        blY = blY + j;
      }
    }
  }
  
  
  
  
  
  
  
}