import { A } from "./words/A.js";
import { C } from "./words/C.js";

export class Alphabet {
  constructor(alphabet) {
    this.alphabet = alphabet;
  }

  draw() {
    if (this.alphabet === "A") {
      return new A();
    }

    if (this.alphabet === "C") {
      return new C();
    }
  }
}
