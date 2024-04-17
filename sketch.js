function setup() {
  createCanvas(600, 600);
  drawChessboard();
  drawRandomPawns();
}

function drawChessboard() {
  let tileSize = width / 8;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if ((i + j) % 2 === 0) {
        fill(255);
      } else {
        fill(0);
      }
      rect(i * tileSize, j * tileSize, tileSize, tileSize);
    }
  }
}

function drawRandomPawns() {
  let tileSize = width / 8;
  for (let i = 0; i < 16; i++) {
    let x = random(width);
    let y = random(height);
    let col = floor(x / tileSize);
    let row = floor(y / tileSize);
    let pawnX = col * tileSize + tileSize / 2;
    let pawnY = row * tileSize + tileSize / 2;
    fill(random(255), random(255), random(255));
    ellipse(pawnX, pawnY, tileSize * 0.6);
    
    drawHappyFace(pawnX, pawnY, tileSize * 0.4);
  }
}

function drawHappyFace(x, y, size) {
  fill(255);
  ellipse(x, y, size);

  fill(0);
  ellipse(x - size / 5, y - size / 5, size / 10);
  ellipse(x + size / 5, y - size / 5, size / 10);

  noFill();
  strokeWeight(2);
  arc(x, y + size / 10, size / 5, size / 5, 0, PI);
}
