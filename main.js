var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var width = canvas.width = 480;
var height = canvas.height = 320;

function Ball(x, y, velX, velY, color, radius) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.color = color;
  this.radius = radius;
}

Ball.prototype.draw = function() {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
  ctx.fill();
}

var ball = new Ball(100, 100, 5, 2, 'red', 25);

Ball.prototype.moveBall = function() {
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ball.draw();

  if (ball.x + ball.velX > width - ball.radius ||
    ball.x + ball.velX < ball.radius) {
    ball.velX = -ball.velX;
  }
  if (ball.y + ball.velY > height - ball.radius ||
    ball.y + ball.velY < ball.radius) {
    ball.velY = -ball.velY;
  }

  ball.x += ball.velX;
  ball.y += ball.velY;

  requestAnimationFrame(ball.moveBall);
}

ball.moveBall();
