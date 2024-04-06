const widthScreen = window.innerWidth;
const heightScreen = window.innerHeight;

const spaceship = new Spaceship(100, 100, 5);
const bullets = [];

function setup() {
  createCanvas(widthScreen, heightScreen);
}

function draw() {
  background(20);
  translate(widthScreen / 2, heightScreen / 2);

  spaceship.draw();
  spaceship.handleMove();
  spaceship.handleShoot();

  bullets.forEach(bullet => {
    bullet.draw();
    bullet.move();
  });
}
