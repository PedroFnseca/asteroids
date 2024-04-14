class Colisions {
  constructor() {}

  handleColisions() {

    for (let asteroidIndex = 0; asteroidIndex < asteroids.length; asteroidIndex++) {
      let asteroid = asteroids[asteroidIndex];
      this.handleColisionBulletAsteroid(asteroid, asteroidIndex);
      this.handleColisionSpaceshipAsteroid(asteroid);
    }
  }

  handleColisionBulletAsteroid(asteroid, asteroidIndex) {
    for (let bulletIndex = 0; bulletIndex < bullets.length; bulletIndex++) {
      const bullet = bullets[bulletIndex];
      const distance = dist(asteroid.x, asteroid.y, bullet.x, bullet.y);

      if (distance < asteroid.size * 5) {
        asteroids.splice(asteroidIndex, 1);
        bullets.splice(bulletIndex, 1);

        score++;
      }
    }
  }

  handleColisionSpaceshipAsteroid(asteroid) {
    const distance = dist(asteroid.x, asteroid.y, spaceship.x, spaceship.y);

    if (distance < asteroid.size * 7) {
      gameIsOver = true;
    }
  }
}