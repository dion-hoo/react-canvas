import { Util } from "../Util.js";
import { Common } from "./Common.js";

export class A extends Common {
  constructor() {
    super();

    const u = new Util();

    this.exceptPoints = [4, 6];
    this.coord = [
      { x: this.width * 0.35, y: 830 },
      {
        x: u.lerp(this.width * 0.35, this.width * 0.5, 0.5),
        y: u.lerp(830, 400, 0.5),
      },
      { x: this.width * 0.5, y: 400 },
      {
        x: u.lerp(this.width * 0.5, this.width * 0.65, 0.5),
        y: u.lerp(400, 830, 0.5),
      },
      { x: this.width * 0.65, y: 830 },
      {
        x: u.lerp(this.width * 0.35, this.width * 0.5, 0.5),
        y: u.lerp(830, 400, 0.5),
      },
      {
        x: u.lerp(this.width * 0.5, this.width * 0.65, 0.5),
        y: u.lerp(400, 830, 0.5),
      },

      { x: this.width * 0.35, y: 830 },
      { x: this.width * 0.65, y: 830 },
    ];
  }
}
