import { Circle } from "./Circle";

export class Canvas {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  circles: Circle[];

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.circles = [];
  }

  init() {
    for (let i = 0; i < 4; i++) {
      const radius = 50;
      const x = Math.random() * (this.canvas.width - radius * 2) + radius;
      const y = Math.random() * (this.canvas.height - radius * 2) + radius;

      const circle = new Circle(x, y, radius);

      this.circles.push(circle);
    }
  }

  resize() {
    const ratio = window.devicePixelRatio;

    this.canvas.width = window.innerWidth * ratio;
    this.canvas.height = window.innerHeight * ratio;

    this.canvas.style.width = `${window.innerWidth}px`;
    this.canvas.style.height = `${window.innerHeight}px`;

    this.ctx.scale(ratio, ratio);
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.circles.forEach((circle) => {
      circle.draw(this.ctx);
    });

    // requestAnimationFrame(this.draw.bind(this));
  }
}
