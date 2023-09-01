import { Polygon } from "./Polygon";
import { type MouseType } from "./@types/mouse";

export class Canvas {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  polygon: Polygon | null;
  mouse: MouseType;

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.polygon = null;
    this.mouse = {
      isDown: false,
      offsetX: 0,
      offsetY: 0,
      moveX: 0,
      moveY: 0,
    };
  }

  init() {
    const x = window.innerWidth * 0.5;
    const y = window.innerHeight * 0.5;
    const sides = 4;
    const rotate = 45;
    const radius = 300;

    this.polygon = new Polygon(x, y, sides, rotate, radius);
  }

  resize() {
    const ratio = devicePixelRatio;

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.canvas.style.width = `${window.innerWidth}px`;
    this.canvas.style.height = `${window.innerHeight}px`;

    this.ctx.scale(ratio, ratio);
  }

  bind() {
    window.addEventListener("pointerdown", this.onDown.bind(this));
    window.addEventListener("pointermove", this.onMove.bind(this));
    window.addEventListener("pointerup", this.onUp.bind(this));
  }

  destory() {
    window.removeEventListener("pointerdown", this.onDown.bind(this));
    window.removeEventListener("pointermove", this.onMove.bind(this));
    window.removeEventListener("pointerup", this.onUp.bind(this));
  }

  onDown(event: PointerEvent) {
    this.mouse.isDown = true;

    this.mouse.offsetX = event.clientX;
    this.mouse.offsetY = event.clientY;
  }

  onMove(event: PointerEvent) {
    if (this.mouse.isDown) {
      this.mouse.moveX = event.clientX - this.mouse.offsetX;
      this.mouse.moveY = event.clientY - this.mouse.offsetY;
    }
  }

  onUp() {
    this.mouse.isDown = false;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    if (this.polygon) {
      this.polygon.draw(this.ctx);

      if (this.mouse.isDown) {
        this.polygon.update(this.mouse);
        1;
      }
    }

    requestAnimationFrame(this.draw.bind(this));
  }
}
