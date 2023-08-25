export class Color {
  ctx: CanvasRenderingContext2D;
  word: {
    text: string;
    color: string;
  }[];
  colorIndex: number;

  constructor(
    ctx: CanvasRenderingContext2D,
    word: { text: string; color: string }[],
    colorIndex: number
  ) {
    this.ctx = ctx;
    this.word = word;
    this.colorIndex = colorIndex;
  }

  getColor(
    x: number = 0,
    y: number = 0,
    blur: number = 60,
    globalCompositeOperation: GlobalCompositeOperation = "lighter"
  ) {
    this.ctx.shadowColor = this.word[this.colorIndex].color;
    this.ctx.shadowOffsetX = x;
    this.ctx.shadowOffsetY = y;
    this.ctx.shadowBlur = blur;

    var gradient = this.ctx.createLinearGradient(
      0,
      0,
      window.innerWidth,
      window.innerHeight
    );
    gradient.addColorStop(0, "#fff");
    gradient.addColorStop(1, "#fff");

    this.ctx.globalCompositeOperation = globalCompositeOperation;

    return gradient;
  }
}
