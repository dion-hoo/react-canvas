import { type PolgonType } from './@types/point';

export class Polygon {
  x: number;
  y: number;
  sides: number;
  rotate: number;
  radius1: number;
  radius2: number;

  points: PolgonType;

  constructor(
    x: number,
    y: number,
    sides: number,
    rotate: number = 0,
    radius1: number,
    radius2: number = radius1
  ) {
    this.x = x;
    this.y = y;
    this.sides = sides;
    this.rotate = rotate;
    this.radius1 = radius1;
    this.radius2 = radius2;

    this.points = {
      data: [],
      startX: 0,
      startY: 0,
      rotate,
    };
  }

  rayCasting() {}

  getPoint() {
    this.points.rotate = this.rotate;
    this.points.startX = this.x;
    this.points.startY = this.y;

    return this.points;
  }

  draw(ctx: CanvasRenderingContext2D) {
    const angle = (Math.PI * 2) / this.sides;

    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate((this.rotate * Math.PI) / 180);
    ctx.fillStyle = '#000';
    ctx.beginPath();

    for (let i = 0; i < this.sides; i++) {
      const radius = i % 2 === 0 ? this.radius1 : this.radius2;

      const x = Math.cos(angle * i) * radius;
      const y = Math.sin(angle * i) * radius;

      ctx.lineTo(x, y);

      this.points.data.push({
        x,
        y,
      });
    }
    ctx.fill();
    ctx.closePath();

    ctx.restore();
  }
}
