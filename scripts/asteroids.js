class Asteroid {
  constructor(size, velocity, qtdBreaks = 0) {
    const x = random(0, 1) > 0.5 ? random(0, widthScreen / 2) : random(-widthScreen / 2, 0);
    const y = random(0, 1) > 0.5 ? random(0, heightScreen / 2) : random(-heightScreen / 2, 0);

    this.x = x;
    this.y = y;
    this.size = size;
    this.velocityX = velocity;
    this.velocityY = velocity;
    this.qtdBreaks = qtdBreaks;

    this.spots = []
    let spots = random(3, 7);

    for (let i = 0; i < spots; i++) {
      let spotX = random(-this.size * 2.5, this.size * 2.5);
      let spotY = random(-this.size * 2.5, this.size * 2.5);
      let spotSize = random(this.size / 2, this.size); 

      this.spots.push({x: spotX, y: spotY, size: spotSize * 2.2});
    }
  }

  draw() {
    push();
    translate(this.x, this.y);
    fill(200);
    noStroke();
    ellipse(0, 0, this.size * 10);

    fill(150);
    for (let i = 0; i < this.spots.length; i++) {
      let spot = this.spots[i];
      ellipse(spot.x, spot.y, spot.size);
    }

    pop();
  }

  move() {
    this.x += this.velocityX;
    this.y -= this.velocityY;

    if (this.x > widthScreen / 2 || this.x < -widthScreen / 2) {
      this.velocityX *= -1;
    }

    if (this.y > heightScreen / 2 || this.y < -heightScreen / 2) {
      this.velocityY *= -1;
    }
  }
}