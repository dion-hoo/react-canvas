export class PolygonWall {
  x: number;
  y: number;
  sides: number;
  innerRadius: number;
  outerRadius: number;
  boundary: {
    x: number;
    y: number;
  }[];

  constructor(
    x: number,
    y: number,
    sides: number,
    innerRadius: number,
    outerRadius: number
  ) {
    this.x = x;
    this.y = y;
    this.sides = sides;
    this.innerRadius = innerRadius;
    this.outerRadius = outerRadius;

    this.boundary = [];
  }

  draw(ctx: CanvasRenderingContext2D) {
    const angle = (Math.PI * 2) / this.sides;

    this.boundary = [];

    ctx.beginPath();
    ctx.strokeStyle = "rgba(17, 204, 153, 0.2)";

    let px, py;

    for (let i = 0; i <= this.sides; i++) {
      px = this.x + Math.cos(angle * i) * this.outerRadius;
      py = this.y + Math.sin(angle * i) * this.outerRadius;

      this.boundary.push({ x: px, y: py });

      ctx.lineTo(px, py);

      px = this.x + Math.cos(angle / 2 + angle * i) * this.innerRadius;
      py = this.y + Math.sin(angle / 2 + angle * i) * this.innerRadius;

      ctx.lineTo(px, py);

      this.boundary.push({ x: px, y: py });
    }

    ctx.stroke();
    ctx.closePath();
  }
}
