import { Point } from "./Point";
import { ConvexHull } from "./ConvexHull";

export class Canvas {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  points: Point[];
  radius: number;
  fps: number;
  fpsTime: number;
  currentframe: number;
  alphabet: string[];

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.points = [];
    this.radius = 0;
    this.fps = 10;
    this.fpsTime = 1000 / this.fps;
    this.currentframe = 0;
    this.alphabet = [];

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

  makePoint(length: number) {
    this.radius = Math.random() * 5 + 10;
    this.alphabet = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];

    const index = Math.floor(Math.random() * this.alphabet.length);
    const text = this.alphabet[index];

    for (let i = 0; i < length; i++) {
      const x =
        Math.random() * (window.innerWidth - this.radius * 2) + this.radius;
      const y =
        Math.random() * (window.innerHeight - this.radius * 2) + this.radius;

      this.points.push(new Point(i, x, y, this.radius, text));
    }
  }

  resize() {
    this.points = [];

    this.makePoint(1);
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

    if (this.currentframe > this.fpsTime && this.points.length < 50) {
      this.makePoint(1);

      this.currentframe = 0;
    }

    this.currentframe++;

    requestAnimationFrame(this.draw.bind(this));
  }
}
