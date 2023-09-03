import { Common } from "./Common.js";
import { Util } from "../Util.js";

export class e extends Common {
  constructor() {
    super();

    this.passPoints = [2, 4, 6, 8];
    this.coord = [
      { x: 500, y: 400 },
      { type: "curve", x: 600, y: 400 },
      { x: 595, y: 355 },
      { type: "curve", x: 550, y: 350 },
      { x: 505, y: 355 },
      { type: "curve", x: 500, y: 400 },
      { x: 505, y: 450 },
      { type: "curve", x: 550, y: 450 },
      { x: 580, y: 450 },
      { x: 595, y: 435 },
    ];
  }
}
