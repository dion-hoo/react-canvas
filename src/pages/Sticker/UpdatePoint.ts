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
  const maxWidth = Math.abs(p[3].x - p[5].x);

  const setPoint = ({
    index,
    x,
    y,
  }: {
    index: number;
    x?: boolean;
    y?: boolean;
  }) => {
    if (x) {
      p[index].x = minMaxBoundary(p[index].x, minX, maxX);
      mousePoint[index].moveX += moveX * FORCE;
    }

    if (y) {
      p[index].y = minMaxBoundary(p[index].y, minY, maxY);
      mousePoint[index].moveY += moveY * FORCE;
    }
  };

  // p1
  setPoint({
    index: 1,
    x: maxWidth < height,
  });

  // p2
  setPoint({
    index: 2,
    x: maxWidth < height,
    y: true,
  });

  // p3
  setPoint({
    index: 3,
    x: maxWidth < height,
    y: true,
  });

  // p4
  setPoint({
    index: 4,
    x: maxWidth < height,
    y: true,
  });

  // p5
  setPoint({
    index: 5,
    y: true,
  });

  return p;
};
