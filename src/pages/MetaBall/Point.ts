export class Point {
  index: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  angle: number;

  constructor(index: number, x: number, y: number, radius: number) {
    this.index = index;
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.radius = radius;
    this.angle = 0;
  }

  update() {
    this.vx += 0.001;
    this.vy += 0.001;

    this.x += this.vx;
    this.y += this.vy;
  }

  windowCoolide() {
    if (this.x < this.radius || this.x > window.innerWidth - this.radius) {
      this.vx *= -1;
    }

    if (this.y < this.radius || this.y > window.innerHeight - this.radius) {
      this.vy *= -1;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();

    ctx.fillStyle = "black";
    ctx.font = "20px system-ui";
    ctx.fillText(`${this.index}`, this.x, this.y);
  }
}
