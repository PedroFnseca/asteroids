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
  translate(widthScreen / 2, heightScreen / 2);

  if (gameIsOver) return endGame();
  
  background(20);

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

  fill(255);
  textSize(32);
  textFont('Arial');
  text(`Pontos: ${score}`, -55, -heightScreen / 2 + 30);
}

function endGame() {
  fill(255);
  textSize(32);
  textFont('Arial');
  text('Fim de jogo', -60, 0);

  textSize(16);
  text('Aperete R para reiniciar', -60, 30);

  if (keyIsDown(82)) {
    restart();
    gameIsOver = false;
  }
}

function restart() {
  spaceship.x = 0;
  spaceship.y = 0;
  spaceship.velocityX = 0;
  spaceship.velocityY = 0;
  spaceship.angle = 0;
  spaceship.bullets = [];

  bullets.length = 0;
  asteroids.length = 0;

  score = 0;
}