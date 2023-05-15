import { StickerClass } from "./StickerClass";

import kakaoImage from "@/assets/img/kakao.jpg";
import kakaoGrayScaleImage from "@/assets/img/kakao_dark.jpg";

export class Canvas {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  banner: HTMLDivElement;
  mouse: {
    isDown: boolean;
    offsetX: number;
    offsetY: number;
    moveX: number;
    moveY: number;
  };

  frontImage: HTMLImageElement;
  backImage: HTMLImageElement;
  sticker: StickerClass | null;

  constructor(
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    banner: HTMLDivElement
  ) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.banner = banner;
    this.mouse = {
      isDown: false,
      offsetX: 0,
      offsetY: 0,
      moveX: 0,
      moveY: 0,
    };

    this.frontImage = new Image();
    this.backImage = new Image();
    this.sticker = null;
  }

  eventListener() {
    window.addEventListener("pointerdown", this.onDown.bind(this));
    window.addEventListener("pointermove", this.onMove.bind(this));
    window.addEventListener("pointerup", this.onUp.bind(this));
    window.addEventListener("resize", this.resize.bind(this));

    this.frontImage.src = kakaoImage;
    this.backImage.src = kakaoGrayScaleImage;
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

      this.mouse.offsetX = event.clientX;
      this.mouse.offsetY = event.clientY;
    }
  }

  onUp() {
    this.mouse.isDown = false;
  }

  resize() {
    const width = this.banner.clientWidth;
    const height = this.banner.clientHeight;
    const cetnerX = window.innerWidth / 2 - width / 2;
    const centerY = window.innerHeight / 2 - height / 2;

    const ratio = devicePixelRatio;

    this.canvas.width = window.innerWidth * ratio;
    this.canvas.height = window.innerHeight * ratio;

    this.canvas.style.width = `${window.innerWidth}px`;
    this.canvas.style.height = `${window.innerHeight}px`;

    this.ctx.scale(ratio, ratio);

    this.sticker = new StickerClass(
      cetnerX,
      centerY,
      width,
      height,
      this.frontImage,
      this.backImage
    );
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.mouse.moveX *= 0.5;
    this.mouse.moveY *= 0.5;

    // 아래로 내렸을 경우에만 왼쪽으로 천천히 밀기
    if (this.mouse.moveX === 0) {
      this.mouse.moveX = -0.2;
    }

    const end = this.sticker!.draw(
      this.ctx,
      this.mouse.moveX,
      this.mouse.moveY
    );

    if (end) return;

    requestAnimationFrame(this.animate.bind(this));
  }

  destroy() {
    window.removeEventListener("pointerdown", this.onDown);
    window.removeEventListener("pointermove", this.onMove);
    window.removeEventListener("pointerup", this.onUp);
    window.removeEventListener("resize", this.resize);
  }
}
