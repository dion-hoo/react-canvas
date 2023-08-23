import { Circle } from "./Circle";
import WebFont from "webfontloader";

export class Canvas {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  mouse: {
    index: number | null;
    isDown: boolean;
    isClick: boolean;
    offsetX: number;
    offsetY: number;
  };
  circles: Circle[];
  fps2: number;
  fps: number;
  fpsTime: number;
  fpsTime2: number;
  currentframe: number;
  currentframe2: number;
  word: {
    text: string;
    color: string;
  }[];
  colorIndex: number;

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.mouse = {
      index: null,
      isDown: false,
      isClick: false,
      offsetX: 0,
      offsetY: 0,
    };
    this.circles = [];
    this.fps = 10;
    this.fps2 = 4;
    this.fpsTime = 1000 / this.fps;
    this.fpsTime2 = 1000 / this.fps2;
    this.currentframe = 0;
    this.currentframe2 = 0;

    this.colorIndex = 0;
    this.word = [
      {
        text: "A",
        color: "#bb254a",
      },
      {
        text: "B",
        color: "#dd4851",
      },
      {
        text: "C",
        color: "#f38138",
      },
      {
        text: "D",
        color: "#e35b8f",
      },
      {
        text: "E",
        color: "#922f6e",
      },
      {
        text: "F",
        color: "#66648b",
      },
      {
        text: "G",
        color: "#896b70",
      },
      {
        text: "H",
        color: "#939597",
      },
    ];

    WebFont.load({
      google: {
        families: ["Hind:700"],
      },
    });
  }

  bind() {
    window.addEventListener("click", this.onClick.bind(this));
    window.addEventListener("mousedown", this.onDown.bind(this));
    window.addEventListener("mousemove", this.onMove.bind(this));
    window.addEventListener("mouseup", this.onUp.bind(this));

    window.addEventListener("resize", this.resize.bind(this));
  }

  destroy() {
    window.removeEventListener("click", this.onClick.bind(this));
    window.removeEventListener("mousedown", this.onDown.bind(this));
    window.removeEventListener("mousemove", this.onMove.bind(this));
    window.removeEventListener("mouseup", this.onUp.bind(this));

    window.removeEventListener("resize", this.resize.bind(this));
  }

  init() {
    this.circles = [];

    this.makeCircle(20);
  }

  makeCircle(length: number) {
    for (let i = 0; i < length; i++) {
      const radius = Math.random() * 40 + 60;
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

  onClick() {
    this.mouse.isClick = true;
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

      if (index || index === 0) {
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

    this.ctx.font = `800 ${this.canvas.height * 0.9}px system-ui`;

    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "middle";

    if (
      this.currentframe > this.fpsTime &&
      this.circles.length < 30 &&
      this.mouse.isClick
    ) {
      this.ctx.fillStyle = "#000";
    }

    if (this.currentframe2 > this.fpsTime2) {
      this.colorIndex += 1;
      this.colorIndex %= this.word.length;

      this.currentframe2 = 0;
    }

    if (!this.mouse.isClick) {
      this.ctx.fillStyle = this.word[this.colorIndex].color;
    }

    this.ctx.fillText(
      this.word[this.colorIndex].text,
      this.canvas.width / 2,
      this.canvas.height / 2
    );

    this.circles.forEach((circle) => {
      if (this.mouse.isClick) {
        circle.update(this.mouse.isClick);
        circle.stickness(this.circles);
      }

      const fillStyle = this.mouse.isClick
        ? this.word[this.colorIndex].color
        : "#fff";

      circle.draw(this.ctx, fillStyle);
    });

    this.currentframe++;
    this.currentframe2++;

    requestAnimationFrame(this.draw.bind(this));
  }
}
