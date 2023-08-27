export type PointsType = Array<{
  x: number;
  y: number;
}>;

export interface PolgonType {
  data: PointsType;
  startX: number;
  startY: number;
  rotate?: number;
}
