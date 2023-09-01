import { Util } from "./Util.js";

export class Pattern {
  constructor(index, points) {
    this.index = index;
    this.points = points;
    this.util = new Util();
  }

  draw(t) {
    let time = parseInt(t) !== this.index ? 1 : (t %= 1);
    let index = this.index;

    const p0 = this.points[index];
    const p1 = this.points[index + 1];

    const cx = this.util.lerp(p0.x, p1.x, time);
    const cy = this.util.lerp(p0.y, p1.y, time);

    return { x: cx, y: cy };
  }
}
