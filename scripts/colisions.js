class Colisions {
  constructor() {}

  handleColisions() {
    this.handleColisionBulletAsteroid();
  }

  handleColisionBulletAsteroid() {
    asteroids.forEach((asteroid, asteroidIndex) => {
      bullets.forEach((bullet, bulletIndex) => {
        const distance = dist(asteroid.x, asteroid.y, bullet.x, bullet.y);

        if (distance < asteroid.size * 10) {
          asteroids.splice(asteroidIndex, 1);
          bullets.splice(bulletIndex, 1);
        
          score++;
        }
      });
    });
  }
}