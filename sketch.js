let lefthalfQuadrant;
let righthalfQuadrant;

function setup() {
  createCanvas(552, 552);

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
    let rX = 320;
    let rY = 320;
    let blX = 0;
    let blY = 320;
    let brX = 320;
    let brY = 552;
    let op = 15;
    let op1 = 15;
    rectMode(CORNERS);
    //(i < height/2) && ( lX < 320) && (lY < 320); assures that the loop does not continue to color or draw squares the adjacent half of the screen
    //without it the loop continues and the color of the adjacent square turns black
    //controls the top left quadrant
    for(let i = 0; (i < height/2) && ( lX < 250) && (lY < 250); i += 10){
      noStroke();
      fill(83,175,151,op+i);//green
      rect(lX,lY,rX,rY);
      lX = lX + i;
      lY = lY + i;
      //(j <= height/2)&&(blX <= 320)&&(brY >= 320); assures that the loop does not continue to color or draw squares the adjacent half of the screen
      //without it the loop continues and the color of the adjacent square turns black
      //controls bottom left quadrant
      for(let j = 0; (j <= height/2)&&(blX <= 300)&&(brY >= 300); j = j +10){
        fill(83,175,151,op+j);//green
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
    let lX = 320;
    let lY = 320;
    let rX = 552;
    let rY = 552;
    let blX = 320;
    let blY = 0;
    let brX = 552;
    let brY = 320;

    let op = 15;
    let op1 = 15;
    rectMode(CORNERS);
    //(i < height/2) && (rX >= 320) && (rY >= 320); assures that the loop does not continue to color or draw squares the adjacent half of the screen
    //without it the loop continues and the color of the adjacent square turns black
    //controls the bottom right quadrant
    for(let i = 0; (i < height/2) && (rX >= 250) && (rY >= 250); i = i + 10){
      
      noStroke();
      fill(83,175,151,op+i);//green
      rect(lX,lY, rX,rY);
      rX = rX - i;
      rY = rY - i;
      //(j < height/2) && (brX >= 320) && (blY <= 320); assures that the loop does not continue to color or draw squares the adjacent half of the screen
      //without it the loop continues and the color of the adjacent square turns black
      //controls the top right quadrant
      for(let j = 0; (j < height/2) && (brX >= 250) && (blY <= 250); j = j + 10){
       
        fill(83,175,151,op+j);//green
        noStroke();
        rect(blX,blY, brX,brY);
        brX = brX - j;
        blY = blY + j;
        
      }
    }
  }
  
  
  
  
  
  
  
}