import { Point } from "./Point";

type PointType = {
  x: number;
  y: number;
};

export class Line {
  points: Point[];

  constructor(points: Point[]) {
    this.points = points;
  }

  angleBetween(p1: PointType, p2: PointType) {
    const dx = p1.x - p2.x;
    const dy = p1.y - p2.y;
    const radian = Math.atan2(dy, dx);
    let angle = (radian * 180) / Math.PI;

    // angle값이 0일때 즉 기준점이 되는 부분이 각도를 임의로 크게 잡아준다. 그 이유는 기준 벡터를 기준으로 각도를 내림차순할껀데
    // 기준 벡터의 각도가 0이기 때문에 내림차순 정렬시 첫번째 인덱스가 아니게 된다.
    // 그래서 기준벡터의 각도(즉 0도)일때 임의로 큰 값을 준다.

    if (angle === 0) {
      angle = 359;
    }

    return angle;
  }

  draw(ctx: CanvasRenderingContext2D) {
    const maxYPoint = {
      x: 0,
      y: 0,
    };

    // 최대 Y값 찾기
    this.points.forEach((point) => {
      if (maxYPoint.y < point.y) {
        const { x, y } = point;
        maxYPoint.x = x;
        maxYPoint.y = y;
      }
    });

    // 최대 Y좌표와의 각도 구하기
    this.points.forEach((point) => {
      point.angle = this.angleBetween(maxYPoint, point);
    });

    // 각도가 작은 기준으로 정렬하기
    this.points.sort((a: Point, b: Point) => {
      return b.angle - a.angle;
    });

    // 외적을 이용해서 반시계 방향 찾아내기
    const stack = [];
    const pointsLength = this.points.length - 1;

    ctx.strokeStyle = "red";
    ctx.beginPath();

    console.log(this.points);

    for (let i = 0; i < pointsLength; i++) {
      if (i > pointsLength - 2) {
        ctx.lineTo(this.points[i + 1].x, this.points[i + 1].y);
        ctx.lineTo(this.points[0].x, this.points[0].y);
        break;
      }

      const standard = this.points[i];
      const next = this.points[i + 1];
      const afterNext = this.points[i + 2];

      const crossPoduct =
        (next.x - standard.x) * (afterNext.y - standard.y) -
        (afterNext.x - standard.x) * (next.y - standard.y);

      if (crossPoduct < 0) {
        if (i === 0) {
          ctx.moveTo(standard.x, standard.y);
          stack.push(standard);
        }
        stack.push(next);
        ctx.lineTo(next.x, next.y);
        console.log(
          "반시계",
          this.points[i].index,
          this.points[i + 1].index,
          this.points[i + 2].index
        );
      } else if (crossPoduct > 0) {
        console.log(
          "시계",
          this.points[i].index,
          this.points[i + 1].index,
          this.points[i + 2].index
        );
      }
    }

    ctx.stroke();
    ctx.closePath();

    console.log(stack);
  }
}
