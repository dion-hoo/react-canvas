import { Common } from "./Common.js";

export class C extends Common {
  constructor() {
    super();

    this.exceptPoints = [1, 3, 5];
    this.coord = [
      { type: "curve", x: this.width * 0.69, y: 465 },
      { x: this.width * 0.49, y: 385 },
      { type: "curve", x: this.width * 0.42, y: 550 },
      { x: this.width * 0.4, y: 650 },
      { type: "curve", x: this.width * 0.44, y: 720 },
      { x: this.width * 0.49, y: 820 },
      { x: this.width * 0.68, y: 760 },
    ];
  }
}
