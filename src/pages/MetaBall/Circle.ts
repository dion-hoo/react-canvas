import { GetMetaBall } from "./GetMetaBall";

export class Circle {
  ctx: CanvasRenderingContext2D;
  index: number;
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;

  constructor(
    ctx: CanvasRenderingContext2D,
    index: number,
    x: number,
    y: number,
    radius: number
  ) {
    this.ctx = ctx;
    this.index = index;
    this.x = x;
    this.y = y;
    this.vx = Math.random() * 1 - 0.5;
    this.vy = Math.random() * 1 - 0.5;
    this.radius = radius;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < this.radius || this.x > window.innerWidth - this.radius) {
      this.vx *= -1;
    }

    if (this.y < this.radius || this.y > window.innerHeight - this.radius) {
      this.vy *= -1;
    }
  }

  stickness(circles: Circle[]) {
    for (let i = this.index; i < circles.length; i++) {
      const c1 = circles[this.index];
      const c2 = circles[i];

      const dx = c2.x - c1.x;
      const dy = c2.y - c2.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      const metaBall = new GetMetaBall(c1, c2, distance);

      metaBall.init(this.ctx);
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.fillStyle = "#fff";
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  }
}
