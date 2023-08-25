import { Color } from "./Color";

export class Font {
  ctx: CanvasRenderingContext2D;
  word: {
    text: string;
    color: string;
  }[];
  constructor(
    ctx: CanvasRenderingContext2D,
    word: { text: string; color: string }[]
  ) {
    this.ctx = ctx;
    this.word = word;
  }

  font(colorIndex: number) {
    // Text
    this.ctx.fillText(
      this.word[colorIndex].text,
      window.innerWidth * 0.5,
      window.innerHeight * 0.5
    );

    this.ctx.shadowColor = "transparent";
    this.ctx.shadowBlur = 0;
  }

  draw(isClick: boolean, colorIndex: number) {
    this.ctx.save();

    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "middle";
    this.ctx.font = `900 ${window.innerHeight * 0.6}px system-ui`;

    if (isClick) {
      const color = new Color(this.ctx, this.word, colorIndex);

      this.ctx.fillStyle = color.getColor(10);
      this.font(colorIndex);
      this.ctx.fillStyle = color.getColor(-10);
      this.font(colorIndex);
      this.ctx.fillStyle = color.getColor(0, 10);
      this.font(colorIndex);
      this.ctx.fillStyle = color.getColor(0, 10);
      this.font(colorIndex);
    } else {
      this.ctx.fillStyle = "#222";
    }

    this.font(colorIndex);

    this.ctx.restore();
  }
}
