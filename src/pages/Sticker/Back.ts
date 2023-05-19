import { StickerPoint } from "./StickerType";

import kakaoGrayScaleImage from "@/assets/img/kakao_dark.jpg";

export class Back {
  centerX: number;
  centerY: number;
  width: number;
  height: number;
  image: HTMLImageElement;
  point: StickerPoint[];

  constructor(centerX: number, centerY: number, width: number, height: number) {
    this.centerX = centerX;
    this.centerY = centerY;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.src = kakaoGrayScaleImage;
    this.point = [];
  }

  update(frontPoint: StickerPoint[]) {
    this.point[0] = frontPoint[1];
    this.point[1] = frontPoint[2];
    this.point[2] = frontPoint[3];
    this.point[3] = frontPoint[4];
    this.point[4] = frontPoint[5];
    this.point[5] = frontPoint[6];
  }

  backPath(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.moveTo(this.point[0].x, this.point[0].y);
    ctx.quadraticCurveTo(
      this.point[1].x,
      this.point[1].y,
      this.point[2].x,
      this.point[2].y
    );
    ctx.lineTo(this.point[2].x, this.point[2].y);
    ctx.quadraticCurveTo(
      this.point[3].x,
      this.point[3].y,
      this.point[4].x,
      this.point[4].y
    );
    ctx.lineTo(this.point[4].x, this.point[4].y);

    if (this.point[4].isAreaY) {
      ctx.lineTo(this.point[5].x, this.point[5].y);
    }
    ctx.closePath();
  }

  drawImage(ctx: CanvasRenderingContext2D) {
    ctx.clip();

    ctx.save();
    ctx.translate(this.point[0].x, this.point[2].y);
    ctx.scale(-1, 1);
    ctx.rotate((90 * Math.PI) / 180);
    ctx.drawImage(this.image, -this.width, 0, this.width, this.height);

    ctx.restore();
  }

  drawShadow(ctx: CanvasRenderingContext2D) {
    const gradient = ctx.createLinearGradient(
      this.point[3].x,
      this.point[3].y,
      this.point[3].x,
      this.point[4].y
    );
    gradient.addColorStop(0, "rgba(0, 0, 0, 1)");
    gradient.addColorStop(0.6, "rgba(0, 0, 0, 0.3)");
    gradient.addColorStop(1, "rgba(255, 255, 255, 0.01)");
    ctx.fillStyle = gradient;

    ctx.beginPath();

    ctx.moveTo(this.point[2].x, this.point[2].y);
    ctx.quadraticCurveTo(
      this.point[3].x,
      this.point[3].y,
      this.point[4].x,
      this.point[4].y
    );
    ctx.lineTo(this.point[4].x, this.point[4].y);
    ctx.fill();

    ctx.closePath();
  }

  draw(ctx: CanvasRenderingContext2D) {
    // shadow
    ctx.save();
    this.drawShadow(ctx);
    ctx.restore();

    // back
    ctx.save();
    this.backPath(ctx);
    this.drawImage(ctx);
    ctx.restore();
  }
}
