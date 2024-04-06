const widthScreen = window.innerWidth;
const heightScreen = window.innerHeight;

const spaceship = new Spaceship(100, 100, 5);
const bullets = [];
const asteroids = [];
const colisions = new Colisions();

let gameIsOver = false;
let score = 0;

const timeBetweenRounds = 500;
let isInTimer = false;

function setup() {
  createCanvas(widthScreen, heightScreen);
}

function draw() {
  background(20);
  
  translate(widthScreen / 2, heightScreen / 2);

  fill(255);
  textSize(32);
  textFont('Arial');
  text(`Score: ${score}`, -55, -heightScreen / 2 + 30);

  colisions.handleColisions();
  spaceship.draw();
  spaceship.handleMove();
  spaceship.handleShoot();

  bullets.forEach(bullet => {
    bullet.draw();
    bullet.move();
  });

  asteroids.forEach(asteroid => {
    asteroid.draw();
    asteroid.move();
  });

  if (!asteroids.length && !isInTimer) {
    isInTimer = true;

    setTimeout(() => {
      let qtdAsteroids = random(2, 5);
      const velocity = random(7, 10);

      for (qtdAsteroids; qtdAsteroids > 0; qtdAsteroids--) {
        asteroids.push(new Asteroid(random(5, 10), velocity));
      }

      isInTimer = false;
    }, timeBetweenRounds);
  }
}
