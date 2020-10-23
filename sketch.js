var radio = 10
var t = 100

function setup() {
  createCanvas(300,300);
  noStroke();
  fill(random(200),random(50),random(100,255),t);
  background(240);
}

function draw() {
  if (mouseIsPressed) {
    circle(mouseX, mouseY,radio);
  }

}

function keyPressed() {
  if (key === ' ') {
    background(240);
  }
  if (key === 'g') {
    fill(0,255,0,t);
  }
   if (key === 'p') {
    fill(255,0,255,t);
  }
   if (key === 'o') {
    fill(255, 113, 0,t);
  }
    if (key === 'y') {
    fill(255,255,0,t);
  }
   if (key === 'b') {
    fill(0,0,255,t);
  }
   if (key === 'r') {
    fill(255, 0, 0,t);
   }
    if (key === 'n') {
    fill(0,150);
  }
   if (key === 'e') {
    fill(240,180);
  }
   if (key === '0') {
    radio = 5;
  }
  if (key === '1') {
    radio = 10;
   }
   if (key === '2') {
    radio = 15;
   }
  if (key === '3') {
    radio = 20;
   }
   if (key === '0') {
    radio = 5;
  }
  if (key === '4') {
    t = 10;
   }
   if (key === '5') {
    t = 150;
   }
  if (key === '6') {
    t = 200;
   }
}