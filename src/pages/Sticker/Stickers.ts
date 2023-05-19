import { Back } from "./Back";
import { Points, mousePoint } from "./Point";

import kakaoImage from "@/assets/img/kakao.jpg";

const FORCE = 3.5;

export class Stickers {
  centerX: number;
  centerY: number;
  width: number;
  height: number;

  image: HTMLImageElement;
  back: Back;

  constructor(centerX: number, centerY: number, width: number, height: number) {
    this.centerX = centerX;
    this.centerY = centerY;
    this.width = width;
    this.height = height;

    this.image = new Image();
    this.image.src = kakaoImage;

    this.back = new Back(this.centerX, this.centerY, this.width, this.height);
  }

  updatePoint(moveX: number, moveY: number) {
    const p = Points(this.centerX, this.centerY, this.width, this.height);

    // 기준이 되는 포인트
    if (this.centerX < p[3].x && p[3].x <= this.centerX + this.width) {
      mousePoint[1].moveX += moveX * FORCE;

      mousePoint[2].moveX += moveX * FORCE;
      mousePoint[2].moveY += moveY * FORCE;

      mousePoint[3].moveX += moveX * FORCE;
      mousePoint[3].moveY += moveY * FORCE;

      mousePoint[4].moveX += moveX * FORCE;
      mousePoint[4].moveY += moveY * FORCE;

      mousePoint[5].moveY += moveY * FORCE;

      // 가로 길이 이상 커지면
      const dx5 = Math.abs(p[3].x - p[5].x);

      if (dx5 >= this.height) {
        mousePoint[5].moveX += moveX * FORCE;
      }
    } else {
      const dy1 = Math.abs(p[3].y - p[1].y);

      mousePoint[3].moveY += moveY * FORCE;
      mousePoint[4].moveY += moveY * FORCE;
      mousePoint[5].moveY += moveY * FORCE;

      // 세로 길이가 이미지 크기보다 커지면
      if (dy1 >= this.width) {
        mousePoint[1].moveY += moveY * FORCE;
      }
    }

    if (p[3].y >= this.centerY + this.height) {
      p[5].isAreaY = true;

      // 가로 길이 이상 커지면
      const dx5 = Math.abs(p[3].x - p[5].x);
      const dx6 = Math.abs(p[3].x - p[6].x);

      if (dx5 >= this.height) {
        mousePoint[5].moveX += moveX * FORCE;
      }

      if (dx6 >= this.height) {
        mousePoint[6].moveX += moveX * FORCE;
      }
    } else {
      p[5].isAreaY = false;
    }

    if (p[5].x > this.centerX + this.width) {
      p[5].x = this.centerX + this.width;
    }

    return p;
  }

  draw(ctx: CanvasRenderingContext2D, moveX: number, moveY: number) {
    const points = this.updatePoint(moveX, moveY);

    // front Path
    ctx.save();
    ctx.beginPath();
    for (let v = 0; v < points.length; v++) {
      const { x, y } = points[v];

      if (v === 0) {
        ctx.moveTo(points[0].x, points[0].y);
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
    ctx.drawImage(
      this.image,
      this.centerX,
      this.centerY,
      this.width,
      this.height
    );
    ctx.restore();

    // sticker back
    if (this.back) {
      this.back.update(points);
      this.back.draw(ctx);
    }

    // Point
    // ctx.beginPath();
    // for (let v = 0; v < points.length; v++) {
    //   const { x, y } = points[v];

    //   ctx.fillStyle = "red";
    //   ctx.arc(x, y, 5, 0, Math.PI * 2);
    //   ctx.fill();
    //   ctx.closePath();
    // }
  }
}
