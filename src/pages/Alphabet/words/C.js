import { Common } from "./Common.js";

export class C extends Common {
  constructor() {
    super();

    this.passPoints = [1, 3, 5];
    this.coord = [
      { type: "curve", x: 380, y: 590 },
      { x: 340, y: 580 },
      { type: "curve", x: 310, y: 605 },
      { x: 300, y: 650 },
      { type: "curve", x: 315, y: 685 },
      { x: 345, y: 695 },
      { x: 380, y: 690 },
    ];
  }
}
