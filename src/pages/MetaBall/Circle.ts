import { GetMetaBall } from './GetMetaBall';

export class Circle {
  ctx: CanvasRenderingContext2D;
  index: number;
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  vx2: number;
  vy2: number;
  fillStyle: string | CanvasGradient;

  constructor(ctx: CanvasRenderingContext2D, index: number, x: number, y: number, radius: number) {
    this.ctx = ctx;
    this.index = index;
    this.x = x;
    this.y = y;
    this.vx = Math.random() * 1 - 0.5;
    this.vy = Math.random() * 1 - 0.5;

    this.vx2 = Math.random() * 7 - 4;
    this.vy2 = Math.random() * 7 - 4;
    this.fillStyle = '#fff';

    this.radius = radius;
  }

  update(isClick: boolean) {
    if (!isClick) {
      this.x += this.vx;
      this.y += this.vy;
    } else {
      this.x += this.vx2;
      this.y += this.vy2;
    }

    if (this.x < this.radius || this.x > window.innerWidth - this.radius) {
      this.vx *= -1;
      this.vx2 *= -1;
    }

    if (this.y < this.radius || this.y > window.innerHeight - this.radius) {
      this.vy *= -1;
      this.vy2 *= -1;
    }
  }

  stickness(circles: Circle[]) {
    for (let i = this.index; i < circles.length - 1; i++) {
      const c1 = circles[this.index];
      const c2 = circles[i + 1];

      const dx = c2.x - c1.x;
      const dy = c2.y - c1.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      const metaBall = new GetMetaBall(c1, c2, distance);

      metaBall.init(this.ctx, this.fillStyle);
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();

    ctx.beginPath();
    ctx.fillStyle = this.fillStyle;
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

    ctx.fill();
    ctx.closePath();
    ctx.restore();
  }
}
