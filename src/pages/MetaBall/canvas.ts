import { Circle } from "./Circle";

export class Canvas {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  mouse: {
    index: number | null;
    isDown: boolean;
    offsetX: number;
    offsetY: number;
  };
  circles: Circle[];

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.mouse = {
      index: null,
      isDown: false,
      offsetX: 0,
      offsetY: 0,
    };
    this.circles = [];
  }

  bind() {
    window.addEventListener("mousedown", this.onDown.bind(this));
    window.addEventListener("mousemove", this.onMove.bind(this));
    window.addEventListener("mouseup", this.onUp.bind(this));

    window.addEventListener("resize", this.resize.bind(this));
  }

  destroy() {
    window.removeEventListener("mousedown", this.onDown.bind(this));
    window.removeEventListener("mousemove", this.onMove.bind(this));
    window.removeEventListener("mouseup", this.onUp.bind(this));

    window.removeEventListener("resize", this.resize.bind(this));
  }

  init() {
    this.circles = [];
    for (let i = 0; i < 5; i++) {
      const radius = 50;
      const x = Math.random() * (this.canvas.width - radius * 2) + radius;
      const y = Math.random() * (this.canvas.height - radius * 2) + radius;

      const circle = new Circle(this.ctx, i, x, y, radius);

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

  onDown(event: MouseEvent) {
    this.mouse.isDown = true;

    this.mouse.offsetX = event.clientX;
    this.mouse.offsetY = event.clientY;

    this.circles.forEach((c) => {
      const dx = c.x - this.mouse.offsetX;
      const dy = c.y - this.mouse.offsetY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < c.radius) {
        this.mouse.index = c.index;
      }
    });
  }

  onMove(event: MouseEvent) {
    if (this.mouse.isDown) {
      const { index } = this.mouse;

      if (index) {
        this.circles[index].x =
          this.circles[index].x + event.clientX - this.mouse.offsetX;
        this.circles[index].y =
          this.circles[index].y + event.clientY - this.mouse.offsetY;

        this.mouse.offsetX = event.clientX;
        this.mouse.offsetY = event.clientY;
      }
    }
  }

  onUp() {
    this.mouse.isDown = false;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.circles.forEach((circle) => {
      circle.update();
      circle.stickness(this.circles);
      circle.draw(this.ctx);
    });

    requestAnimationFrame(this.draw.bind(this));
  }
}
