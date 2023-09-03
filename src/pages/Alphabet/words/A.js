import { Util } from "../Util.js";
import { Common } from "./Common.js";

export class a extends Common {
  constructor() {
    super();

    const u = new Util();

    // this.passPoints = [2, 4];
    this.coord = [
      { x: 650, y: 800 },
      { x: 650, y: 850 },

      { x: u.lerp(650, 600, 0.5), y: u.lerp(850, 900, 0.5) },

      { x: 600, y: 900 },

      { x: u.lerp(600, 550, 0.5), y: u.lerp(900, 850, 0.5) },

      { x: 550, y: 850 },

      { x: u.lerp(550, 600, 0.5), y: u.lerp(850, 800, 0.5) },

      { x: 600, y: 800 },

      { x: u.lerp(600, 650, 0.5), y: u.lerp(800, 850, 0.5) },

      { x: 650, y: 850 },
      { x: 650, y: 900 },
    ];
  }
}
