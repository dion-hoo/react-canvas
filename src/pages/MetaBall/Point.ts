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
    this.vx = Math.random() * 2 - 1.5;
    this.vy = Math.random() * 2 - 1.5;
    this.radius = radius;
    this.angle = 0;
  }

  update() {
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
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();

    ctx.fillStyle = "green";
    ctx.font = "20px system-ui";
    ctx.fillText(`${this.index}`, this.x + 12, this.y);
  }
}
