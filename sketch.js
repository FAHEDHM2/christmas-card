let numSnow = 100;
let snowX = [];
let snowY = [];
let snowSpeed = [];
 let light = circle
function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < numSnow; i++) {
    snowX[i] = random(width);
    snowY[i] = random(-height, 0);
    snowSpeed[i] = random(1, 3);
  }
}

function draw() {
  background(0,0,170);

  fill(0,128,0)
  triangle(200, 50, 150, 150, 250, 150);
  triangle(200, 100, 125, 200, 275, 200);
  triangle(200, 150, 100, 250, 300, 250);
    fill(139,69,19);
  rect(175, 250, 50, 50);
  fill(0,0,255);
    circle(260, 230, 14);
    fill(255,0,0);
    circle(200, 230, 14);
    fill(255,255,0);
    circle(140, 230, 14);
    fill(0,255,0);
    circle(240, 190, 14);
    fill(255,0,255);
    circle(200, 190, 14);
    fill(0,255,255);
    circle(150, 190, 14);
    fill(255,165,0);
    circle(230, 140, 14);
    fill(128,0,128);
    circle(200, 140, 14);
    fill(355,120,128);
    circle(170, 140, 14);
   
    if (mouseIsPressed){
      fill(255,255,0)
    } else {
      fill(255,215,0)
    }
    circle(200, 60, 25);
    
    
    
    fill(255)
  noStroke();
  for (let i = 0; i < numSnow; i++) {
    ellipse(snowX[i], snowY[i], 6, 6);
    snowY[i] += snowSpeed[i];
    if (snowY[i] > height) {
      snowY[i] = random(-20, 0);
      snowX[i] = random(width);
      snowSpeed[i] = random(1, 3);
    }
  }
}
