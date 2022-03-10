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
    let rX = 276;
    let rY = 276;
    let blX = 0;
    let blY = 276;
    let brX = 276;
    let brY = 552;
    let op = 15;
    let op1 = 15;
    rectMode(CORNERS);
    //(i < height/2) && ( lX < 276) && (lY < 276); assures that the loop does not continue to color or draw squares the adjacent half of the screen
    //without it the loop continues and the color of the adjacent square turns black
    //controls the top left quadrant
    for(let i = 0; (i < height/2) && ( lX < 276) && (lY < 276); i += 10){
      noStroke();
      fill(83,175,151,op+i);//green
      rect(lX,lY,rX,rY);
      lX = lX + i;
      lY = lY + i;
      //(j <= height/2)&&(blX <= 276)&&(brY >= 276); assures that the loop does not continue to color or draw squares the adjacent half of the screen
      //without it the loop continues and the color of the adjacent square turns black
      //controls bottom left quadrant
      for(let j = 0; (j <= height/2)&&(blX <= 276)&&(brY >= 276); j = j +10){
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
    let lX = 276;
    let lY = 276;
    let rX = 552;
    let rY = 552;
    let blX = 276;
    let blY = 0;
    let brX = 552;
    let brY = 276;

    let op = 15;
    let op1 = 15;
    rectMode(CORNERS);
    //(i < height/2) && (rX >= 276) && (rY >= 276); assures that the loop does not continue to color or draw squares the adjacent half of the screen
    //without it the loop continues and the color of the adjacent square turns black
    //controls the bottom right quadrant
    for(let i = 0; (i < height/2) && (rX >= 276) && (rY >= 276); i = i + 10){
      
      noStroke();
      fill(83,175,151,op+i);//green
      rect(lX,lY, rX,rY);
      rX = rX - i;
      rY = rY - i;
      //(j < height/2) && (brX >= 276) && (blY <= 276); assures that the loop does not continue to color or draw squares the adjacent half of the screen
      //without it the loop continues and the color of the adjacent square turns black
      //controls the top right quadrant
      for(let j = 0; (j < height/2) && (brX >= 276) && (blY <= 276); j = j + 10){
       
        fill(83,175,151,op+j);//green
        noStroke();
        rect(blX,blY, brX,brY);
        brX = brX - j;
        blY = blY + j;
        
      }
    }
  }
  
  
  
  
  
  
  
}