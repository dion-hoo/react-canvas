export class Font {
  ctx: CanvasRenderingContext2D;
  word: {
    text: string;
    color: string;
  }[];

  colorIndex: number;
  fps: number;
  fpsTime: number;
  currentframe: number;
  positionFrame: number;

  constructor(
    ctx: CanvasRenderingContext2D,
    word: { text: string; color: string }[]
  ) {
    this.ctx = ctx;
    this.word = word;

    this.colorIndex = 0;
    this.fps = 3.4;
    this.fpsTime = 1000 / this.fps;
    this.currentframe = 0;
    this.positionFrame = 0;
  }

  font(isClick: boolean) {
    if (isClick) {
      this.positionFrame += 0.003;
    }

    // Text
    this.ctx.fillText(
      this.word[this.colorIndex].text,
      window.innerWidth * (0.4 + this.positionFrame),
      window.innerHeight * 0.5
    );

    this.ctx.fillText(
      this.word[this.colorIndex].text,
      window.innerWidth * (0.5 + this.positionFrame),
      window.innerHeight * 0.5
    );

    this.ctx.fillText(
      this.word[this.colorIndex].text,
      window.innerWidth * (0.6 + this.positionFrame),
      window.innerHeight * 0.5
    );

    // Text
    this.ctx.fillText(
      this.word[this.colorIndex].text,
      window.innerWidth * (0.4 - this.positionFrame),
      window.innerHeight * 0.5
    );

    this.ctx.fillText(
      this.word[this.colorIndex].text,
      window.innerWidth * (0.5 - this.positionFrame),
      window.innerHeight * 0.5
    );

    this.ctx.fillText(
      this.word[this.colorIndex].text,
      window.innerWidth * (0.6 - this.positionFrame),
      window.innerHeight * 0.5
    );

    // Text
    this.ctx.fillText(
      this.word[this.colorIndex].text,
      window.innerWidth * 0.4,
      window.innerHeight * (0.5 + this.positionFrame)
    );

    this.ctx.fillText(
      this.word[this.colorIndex].text,
      window.innerWidth * 0.5,
      window.innerHeight * (0.5 + this.positionFrame)
    );

    this.ctx.fillText(
      this.word[this.colorIndex].text,
      window.innerWidth * 0.6,
      window.innerHeight * (0.5 + this.positionFrame)
    );

    // Text
    this.ctx.fillText(
      this.word[this.colorIndex].text,
      window.innerWidth * 0.4,
      window.innerHeight * (0.5 - this.positionFrame)
    );

    this.ctx.fillText(
      this.word[this.colorIndex].text,
      window.innerWidth * 0.5,
      window.innerHeight * (0.5 - this.positionFrame)
    );

    this.ctx.fillText(
      this.word[this.colorIndex].text,
      window.innerWidth * 0.6,
      window.innerHeight * (0.5 - this.positionFrame)
    );
  }

  draw(isClick: boolean) {
    this.ctx.save();

    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "middle";
    this.ctx.font = `900 ${window.innerHeight * 0.3}px system-ui`;

    if (isClick) {
      this.ctx.shadowColor = this.word[this.colorIndex].color;
      this.ctx.shadowBlur = 10;

      this.ctx.fillStyle = this.word[this.colorIndex].color;
    } else {
      this.ctx.fillStyle = "#222";
    }

    if (this.currentframe > this.fpsTime) {
      this.colorIndex += 1;
      this.colorIndex %= this.word.length;

      this.currentframe = 0;
    }

    this.font(isClick);

    this.currentframe++;

    this.ctx.restore();
  }
}
