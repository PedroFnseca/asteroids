class Spaceship {
  constructor(life, dps, speed) {
    this.life = life
    this.dps = dps
    this.speed = speed
    this.x = 0
    this.y = 0
    this.direction = 0
    this.dx = 0
    this.dy = 0
    this.lastShot = 0
  }

  draw() {
    push();
    translate(this.x, this.y);
    rotate(this.direction);
    noStroke();

    fill(255);
    triangle(-20, 20, 20, 20, 0, -20);
    
    fill(255, 100, 0);
    triangle(-20, 20, 20, 20, 0, 0);
    
    pop();
  }

  handleMove() {
    if (keyIsDown(UP_ARROW) || keyIsDown(87)) { 
      this.dy = -this.speed;
    } else if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
      this.dy = this.speed;
    } else {
      this.dy = 0;
    }

    if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
      this.dx = -this.speed;
    } else if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
      this.dx = this.speed;
    } else {
      this.dx = 0;
    }

    this.x += this.dx;
    this.y += this.dy;

    if (this.dx !== 0 || this.dy !== 0) {
      this.direction = atan2(this.dy, this.dx) + PI / 2;
    }

    this.x = constrain(this.x, -widthScreen / 2, widthScreen / 2);
    this.y = constrain(this.y, -heightScreen / 2, heightScreen / 2);
  }

  handleShoot() {
    if (keyIsDown(32) && millis() - this.lastShot > this.dps) {
      this.lastShot = millis();
      bullets.push(new Bullet(this.x, this.y, this.direction));
    }
  }
}