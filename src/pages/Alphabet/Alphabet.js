import { a } from "./words/a.js";
import { C } from "./words/C.js";
import { r } from "./words/r.js";
import { e } from "./words/e.js";

export class Alphabet {
  constructor(alphabet) {
    this.alphabet = alphabet;
  }

  draw() {
    if (this.alphabet === "a") {
      return new a();
    }

    if (this.alphabet === "C") {
      return new C();
    }

    if (this.alphabet === "r") {
      return new r();
    }

    if (this.alphabet === "e") {
      return new e();
    }
  }
}
