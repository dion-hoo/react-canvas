import { Points, mousePoint } from "./Point";

const FORCE = 3.5;

const minMaxBoundary = (p: number, min: number, max: number) => {
  if (p > max) {
    p = max - 1;
  }
  if (p < min) {
    p = min + 1;
  }

  return p;
};

const lerp = (startPoint: number, endPoint: number, distance: number) => {
  return startPoint + (endPoint - startPoint) * distance;
};

export const updatePoint = (
  centerX: number,
  centerY: number,
  width: number,
  height: number,
  peelOffSize: number,
  moveX: number,
  moveY: number
) => {
  const p = Points(centerX, centerY, width, height, peelOffSize);
  const minX = centerX;
  const maxX = centerX + width;
  const minY = centerY;
  const maxY = centerY + height;

  // 가로로 계속 당길 경우
  const maxWidth = Math.abs(p[1].x - p[5].x);

  const setPoint = ({
    index,
    x,
    xLerp,
    y,
    yLerp,
  }: {
    index: number;
    x?: boolean;
    xLerp?: number;
    y?: boolean;
    yLerp?: number;
  }) => {
    if (x) {
      p[index].x = minMaxBoundary(p[index].x, minX, maxX);
      mousePoint[index].moveX += moveX * FORCE;
    }

    if (xLerp) {
      p[index].x = xLerp;
    }

    if (y) {
      p[index].y = minMaxBoundary(p[index].y, minY, maxY);
      mousePoint[index].moveY += moveY * FORCE;
    }

    if (yLerp) {
      p[index].y = yLerp;
    }
  };

  // p2
  setPoint({
    index: 2,
    xLerp: minMaxBoundary(lerp(p[1].x, p[3].x, 1.5), minX, maxX),
    yLerp: minMaxBoundary(lerp(p[1].y, p[3].y, 0.5), minY, maxY),
  });

  // p4
  setPoint({
    index: 4,
    xLerp: minMaxBoundary(lerp(p[1].x, p[5].x, 0.6), minX, maxX),
    yLerp: minMaxBoundary(lerp(p[1].y, p[5].y, 0.7), minY, maxY),
  });
  const startDown = p[4].y >= maxY - 1;

  // p1
  setPoint({
    index: 1,
    x: maxWidth < height || startDown,
  });

  // p3
  setPoint({
    index: 3,
    x: maxWidth < height || startDown,
    y: true,
  });

  // p5
  setPoint({
    index: 5,
    y: true,
  });

  return p;
};
