import kakaoImage from '@/assets/img/kakao.jpg';

import { Back } from './Back';
import { updatePoint } from './UpdatePoint';

export class Stickers {
  centerX: number;
  centerY: number;
  width: number;
  height: number;
  peelOffSize: number;

  image: HTMLImageElement;
  back: Back;

  constructor(centerX: number, centerY: number, width: number, height: number) {
    this.centerX = centerX;
    this.centerY = centerY;
    this.width = width;
    this.height = height;
    this.peelOffSize = 100;

    this.image = new Image();
    this.image.src = kakaoImage;

    this.back = new Back(this.centerX, this.centerY, this.width, this.height);
  }

  draw(ctx: CanvasRenderingContext2D, moveX: number, moveY: number) {
    const points = updatePoint(
      this.centerX,
      this.centerY,
      this.width,
      this.height,
      this.peelOffSize,
      moveX,
      moveY
    );

    // front Path
    ctx.save();
    ctx.beginPath();
    for (let v = 0; v < points.length; v++) {
      const { x, y } = points[v];

      if (v === 0) {
        ctx.moveTo(x, y);
      } else {
        if (v === 2 || v === 4) {
          ctx.quadraticCurveTo(x, y, points[v + 1].x, points[v + 1].y);
        } else {
          ctx.lineTo(x, y);
        }
      }
    }
    ctx.closePath();
    ctx.clip();

    // image
    ctx.drawImage(this.image, this.centerX, this.centerY, this.width, this.height);
    ctx.restore();

    // sticker back
    if (this.back) {
      this.back.update(points);
      this.back.draw(ctx);
    }

    // Point
    ctx.beginPath();
    for (let v = 0; v < points.length; v++) {
      const { x, y } = points[v];

      ctx.fillStyle = 'red';
      ctx.arc(x, y, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.closePath();
    }
  }
}
