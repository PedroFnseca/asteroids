class Bullet {
  constructor(x, y, direction) {
    this.x = x
    this.y = y
    this.direction = direction
    this.speed = 10
  }

  draw() {
    push();
    translate(this.x, this.y);
    rotate(this.direction);
    noStroke();
    fill(255);
    triangle(-5, 10, 5, 10, 0, -10);
    pop();
  }

  move() {
    this.x += this.speed * cos(this.direction - PI / 2);
    this.y += this.speed * sin(this.direction - PI / 2);

    if (this.x > widthScreen / 2 || this.x < -widthScreen / 2 || this.y > heightScreen / 2 || this.y < -heightScreen / 2) {
      const index = bullets.indexOf(this);
      bullets.splice(index, 1);
    }
  }
}