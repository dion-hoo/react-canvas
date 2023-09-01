import { Util } from "../Util.js";

export class A {
  constructor(width, height) {
    const u = new Util();

    this.excloudPoints = [4, 6];
    this.coord = [
      { x: width * 0.35, y: 830 },
      { x: u.lerp(width * 0.35, width * 0.5, 0.5), y: u.lerp(830, 400, 0.5) },
      { x: width * 0.5, y: 400 },
      { x: u.lerp(width * 0.5, width * 0.65, 0.5), y: u.lerp(400, 830, 0.5) },
      { x: width * 0.65, y: 830 },

      { x: u.lerp(width * 0.35, width * 0.5, 0.5), y: u.lerp(830, 400, 0.5) },
      { x: u.lerp(width * 0.5, width * 0.65, 0.5), y: u.lerp(400, 830, 0.5) },

      { x: width * 0.35, y: 830 },
      { x: width * 0.65, y: 830 },
    ];
  }
}
