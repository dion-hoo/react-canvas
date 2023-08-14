import { Point } from "./Point";
import { Line } from "./Line";

export class Canvas {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  points: Point[];
  radius: number;

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.points = [];
    this.radius = 5;

    this.init();
    this.resize();
  }

  init() {
    const ratio = window.devicePixelRatio;

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.canvas.style.width = `${window.innerWidth}`;
    this.canvas.style.height = `${window.innerHeight}`;

    this.ctx.scale(ratio, ratio);
  }

  resize() {
    const HEADERHEIGHT = 150;

    this.points = [];
    for (let i = 0; i < 10; i++) {
      const x = Math.random() * (window.innerWidth - this.radius) + this.radius;
      const y =
        Math.random() * (window.innerHeight - this.radius - HEADERHEIGHT) +
        this.radius +
        HEADERHEIGHT;

      this.points.push(new Point(i, x, y, this.radius));

      window.addEventListener("resize", this.init.bind(this));
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.points.forEach((point) => {
      point.draw(this.ctx);
      point.update();
      point.windowCoolide();
    });

    const line = new Line(this.points);
    line.draw(this.ctx);

    // requestAnimationFrame(this.draw.bind(this));
  }
}
