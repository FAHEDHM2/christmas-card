let christmas
let numSnow = 100;
let snowX = [];
let snowY = [];
let snowSpeed = [];
let light = circle;
function preload() {
  christmas = loadImage("assets/photo.jpg");
}
function setup() {
  createCanvas(christmas.width, 400);
  image(christmas, 0, 0, width, height
);
  for (let i = 0; i < numSnow; i++) {
    snowX[i] = random(width);
    snowY[i] = random(-height, 0);
    snowSpeed[i] = random(1, 3);
  }
}

function draw() {
background(christmas)
Tree();
    if (mouseIsPressed){
      fill(255)
    } else {
      fill(255,215,0);
    }
   star(200,50)
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
  snowman(mouseX, mouseY);
}
  function snowman(mouseX, mouseY) {
  fill(255);
  ellipse(mouseX, mouseY, 80, 80); // Bottom
  ellipse(mouseX, mouseY - 60, 60, 60); // Middle
  ellipse(mouseX, mouseY - 100, 40, 40); // Head

  // Eyes
  fill(0);
  ellipse(mouseX-10, mouseY - 100, 5, 5);
  ellipse(mouseX + 13, mouseY - 100, 5, 5);

  // Nose
  fill(255, 165, 0);
  triangle(mouseX-5, mouseY - 90, mouseX, mouseY - 80, mouseX + 5, mouseY - 90);

  // Buttons
  fill(0);
  ellipse(mouseX, mouseY - 20, 7, 7);
  ellipse(mouseX, mouseY, 7, 7);
  ellipse(mouseX, mouseY + 20, 7, 7);

  // Arms
  stroke(139,69,19);
  strokeWeight(3);
  line(mouseX - 30, mouseY -60, mouseX - 60, mouseY - 29); // Left arm
  line(mouseX + 30, mouseY -60, mouseX + 60, mouseY - 29); // Right arm
// Hat
  fill(255,0,0);
  strokeWeight(1);
  rect(mouseX -20, mouseY - 120, 40, 10);
  rect(mouseX - 10, mouseY - 160, 20, 40);
  noStroke();
}

function star(x,y){
    fill(255, 234, 0);
    triangle(x, y - 50, x - 20, y, x + 20, y);
    triangle(x - 50, y - 20, x, y - 20, x, y + 10);
    triangle(x + 50, y - 20, x, y - 20, x, y + 10);
    triangle(x - 20, y - 5, x, y + 10, x - 35, y + 30);
    triangle(x, y + 10, x + 20, y - 5, x + 35, y + 30);
  }
function Tree(){
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
}