import { Pattern } from "./Pattern.js";

export class Polygon {
  constructor(x, y, sides, radius, radius2 = radius) {
    this.x = x;
    this.y = y;
    this.sides = sides;
    this.radius = radius;
    this.radius2 = radius2;
    this.index = 0;

    this.fps = 80;
    this.fpsTime = 1000 / this.fps;
    this.currentTime = 0;
    this.time = 0;

    this.angle = (Math.PI * 2) / this.sides;
    this.points = [];
    this.patternPoint = [];

    this.image = new Image();
    this.image.src = "../../../assets/img/image05.png";
    this.isLoad = false;

    this.loaded();
  }

  loaded() {
    this.image.onload = () => {
      this.isLoad = true;
    };
  }

  update(ctx) {
    this.time = this.currentTime / this.fpsTime;

    if (this.time < this.sides) {
      const pattern = new Pattern(this.index, this.points, this.sides);
      this.patternPoint.push(pattern.draw(this.time));
    }

    this.drawImage(ctx);

    this.currentTime++;
  }

  drawImage(ctx) {
    for (let i = 0; i < this.patternPoint.length; i++) {
      const cx = this.patternPoint[i].x;
      const cy = this.patternPoint[i].y;

      if (this.isLoad) {
        ctx.drawImage(
          this.image,
          0,
          0,
          this.image.width,
          this.image.height,
          cx - 25,
          cy - 50,
          50,
          50
        );
      }
    }
  }

  draw(ctx) {
    this.points = [];

    ctx.save();
    ctx.shadowColor = "#64bffa";
    ctx.shadowOffsetX = 5;
    ctx.shadowOffsetY = 5;
    ctx.shadowBlur = 100;
    ctx.fillStyle = " white";

    ctx.beginPath();

    for (let i = 0; i < this.sides; i++) {
      const radius = i % 2 === 0 ? this.radius : this.radius2;

      const x = this.x + Math.cos(-this.angle * i) * radius;
      const y = this.y + Math.sin(-this.angle * i) * radius;

      ctx.lineTo(x, y);

      this.points.push({
        x,
        y,
      });
    }

    ctx.fill();
    ctx.closePath();

    ctx.restore();
  }
}
