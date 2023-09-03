import { Common } from "./Common.js";

export class r extends Common {
  constructor() {
    super();

    this.passPoints = [2];
    this.coord = [
      { x: 100, y: 330 },
      { type: "curve", x: 100, y: 546 },
      { x: 100, y: 380 },
      { x: 240, y: 350 },
    ];
  }
}
