let lefthalfQuadrant;


function setup() {
  createCanvas(600, 600);

  lefthalfQuadrant = new LeftScreen();
}

function draw() {
  background(255);

  lefthalfQuadrant.display();
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