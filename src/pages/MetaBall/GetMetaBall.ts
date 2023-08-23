import { Circle } from "./Circle";

const MAXDISTANCE = 200;

export class GetMetaBall {
  p1: Circle;
  p2: Circle;
  radius1: number;
  radius2: number;
  distance: number;

  constructor(p1: Circle, p2: Circle, distance: number) {
    this.p1 = p1;
    this.p2 = p2;
    this.distance = distance;
    this.radius1 = p1.radius;
    this.radius2 = p2.radius;
  }

  init(ctx: CanvasRenderingContext2D, fillStyle: string) {
    let angle1, angle2;
    const p1 = this.p1;
    const p2 = this.p2;
    const distance = this.distance;

    // 두 원이 겹쳤을때 각각 p1과 p2의 각도 구하기
    if (distance > MAXDISTANCE || distance <= Math.abs(p1.radius - p2.radius)) {
      return null;
    } else if (distance < p1.radius + p2.radius) {
      angle1 = Math.acos(
        (p1.radius * p1.radius + distance * distance - p2.radius * p2.radius) /
          (2 * p1.radius * distance)
      );

      angle2 = Math.acos(
        (p2.radius * p2.radius + distance * distance - p1.radius * p1.radius) /
          (2 * p2.radius * distance)
      );
    } else {
      angle1 = 0;
      angle2 = 0;
    }

    const v = 0.5;

    const angle = Math.atan2(p2.y - p1.y, p2.x - p1.x);
    const angleofDistance = Math.acos((p1.radius - p2.radius) / distance);

    const a1 = angle + angle1 + (angleofDistance - angle1) * v;
    const a2 = angle - angle1 - (angleofDistance - angle1) * v;
    const a3 =
      angle + Math.PI - angle2 - (Math.PI - angleofDistance - angle2) * v;
    const a4 =
      angle - Math.PI + angle2 + (Math.PI - angleofDistance - angle2) * v;

    const edge1 = {
      x: p1.x + Math.cos(a1) * p1.radius,
      y: p1.y + Math.sin(a1) * p1.radius,
    };

    const edge2 = {
      x: p1.x + Math.cos(a2) * p1.radius,
      y: p1.y + Math.sin(a2) * p1.radius,
    };

    const edge3 = {
      x: p2.x + Math.cos(a3) * p2.radius,
      y: p2.y + Math.sin(a3) * p2.radius,
    };

    const edge4 = {
      x: p2.x + Math.cos(a4) * p2.radius,
      y: p2.y + Math.sin(a4) * p2.radius,
    };

    const totalRadius = p1.radius + p2.radius;
    const edgeDx = edge1.x - edge3.x;
    const edgeDy = edge1.y - edge3.y;
    const edgeDistance = Math.sqrt(edgeDx * edgeDx + edgeDy * edgeDy);
    const d = Math.min(v * 2.3, edgeDistance / totalRadius);
    const HALF = Math.PI / 2;

    this.radius1 *= d;
    this.radius2 *= d;

    const edge5 = {
      x: edge1.x + Math.cos(a1 - HALF) * this.radius1,
      y: edge1.y + Math.sin(a1 - HALF) * this.radius1,
    };

    const edge6 = {
      x: edge3.x + Math.cos(HALF + a3) * this.radius2,
      y: edge3.y + Math.sin(HALF + a3) * this.radius2,
    };

    const edge7 = {
      x: edge4.x + Math.cos(a4 - HALF) * this.radius2,
      y: edge4.y + Math.sin(a4 - HALF) * this.radius2,
    };

    const edge8 = {
      x: edge2.x + Math.cos(a2 + HALF) * this.radius1,
      y: edge2.y + Math.sin(a2 + HALF) * this.radius1,
    };

    ctx.save();
    ctx.fillStyle = fillStyle;

    ctx.beginPath();
    ctx.moveTo(edge1.x, edge1.y);
    ctx.bezierCurveTo(edge5.x, edge5.y, edge6.x, edge6.y, edge3.x, edge3.y);
    ctx.lineTo(edge4.x, edge4.y);
    ctx.bezierCurveTo(edge7.x, edge7.y, edge8.x, edge8.y, edge2.x, edge2.y);

    ctx.fill();
    ctx.closePath();

    ctx.restore();
  }
}
