import { Point } from "./Point";
import { ConvexHull } from "./ConvexHull";

export class Canvas {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  points: Point[];
  radius: number;

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.points = [];
    this.radius = 10;

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
    this.points = [];
    for (let i = 0; i < 10; i++) {
      const x =
        Math.random() * (window.innerWidth - this.radius * 2) + this.radius;
      const y =
        Math.random() * (window.innerHeight - this.radius * 2) + this.radius;

      this.points.push(new Point(i, x, y, this.radius));
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.points.forEach((point) => {
      point.draw(this.ctx);
      point.update();
      point.windowCoolide();
    });

    const convexHull = new ConvexHull(this.points);
    convexHull.draw(this.ctx);

    //requestAnimationFrame(this.draw.bind(this));
  }
}
