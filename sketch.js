function setup() {
  createCanvas (800, 600);
}

function draw() {
  background(255);    // Set background color           https://p5js.org/reference/#/p5/background
  noFill();          // Set color used to fill shapes  https://p5js.org/reference/#/p5/fill
  strokeWeight(2);
  stroke('black');         // Disable drawing shape outlines https://p5js.org/reference/#/p5/noStroke
  rectMode(CENTER);   // Draw square based on center point  https://p5js.org/reference/#/p5/rectMode

  for (let x = 0; x < width; x += 20) {
    for (let y = 0; y < height; y += 20) {
      let distance = dist(mouseX, mouseY, x, y);
      let grid_square_size = distance / 500 * 40;
      rect(x, y, grid_square_size, grid_square_size);
      circle(x, y, grid_square_size);
    }
  }
}
