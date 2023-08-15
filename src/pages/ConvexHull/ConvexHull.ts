import { Point } from "./Point";

type PointType = {
  x: number;
  y: number;
};

export class ConvexHull {
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
    let i = 0;
    const stack: Point[] = [];

    while (i < this.points.length) {
      // 비교할 기존 포인트들
      const point = this.points[i];

      // stack에 벡터가 2개 이하일떄
      if (stack.length < 2) {
        stack.push(point);
      } else {
        const prevMorePoint = stack[stack.length - 2];
        const prevPoint = stack[stack.length - 1];

        const crossPoduct =
          (prevPoint.x - prevMorePoint.x) * (point.y - prevMorePoint.y) -
          (point.x - prevMorePoint.x) * (prevPoint.y - prevMorePoint.y);

        // ccw
        if (crossPoduct < 0) {
          stack.push(point);
        }

        // cw
        if (crossPoduct > 0) {
          stack.pop();
          i--;
        }
      }

      point.active = false;
      i++;
    }

    // 선분 그리기
    ctx.strokeStyle = "rgba(255, 255, 255, 0.3)";
    ctx.beginPath();

    for (let i = 0; i < stack.length; i++) {
      const point = stack[i];

      ctx.lineTo(point.x, point.y);

      point.active = true;
    }

    ctx.lineTo(stack[0].x, stack[0].y);

    ctx.stroke();
    ctx.closePath();
  }
}
