import { Pattern } from "./Pattern.js";
import { CreateImage } from "./CreateImage.js";
import { Alphabet } from "./Alphabet.js";

export class Word {
  constructor(info) {
    this.text = info.text;
    this.isImage = info.isImage;

    this.points = [];
    this.index = 0;
    this.ratio = 0;

    this.fps = 10;
    this.time = 200;
    this.fpsTime = this.time / this.fps;

    this.image = new CreateImage();

    const alphabet = new Alphabet(this.text);
    const { coord, exceptPoints } = alphabet.draw();

    this.word = coord;
    this.exceptPoints = exceptPoints;
  }

  update(ctx, t) {
    if (!this.prevTime) {
      this.prevTime = t;
    }

    if (this.init === undefined) {
      this.init = true;
    }

    this.index = Math.floor(this.ratio);

    const now = t - this.prevTime;
    if (
      this.init ||
      (now > this.fpsTime && this.index < this.word.length - 1)
    ) {
      this.init = false;
      this.prevTime = t;
      this.ratio = t / this.time;

      if (this.exceptPoints.includes(this.index)) {
        console.log(this.ratio);
      }

      const pattern = new Pattern(this.index, this.word);
      this.points.push(pattern.draw(this.ratio));
    }

    this.drawPath(ctx);
  }

  drawPath(ctx) {
    for (let i = 0; i < this.points.length; i++) {
      const cx = this.points[i].x;
      const cy = this.points[i].y;

      if (this.isImage) {
        this.image.draw(ctx, cx, cy);
      } else {
        ctx.beginPath();
        const index = i - 1 < 0 ? i : i - 1;
        ctx.lineWidth = 10;
        ctx.strokeStyle = "yellow";
        ctx.moveTo(this.points[index].x, this.points[index].y);
        ctx.lineTo(cx, cy);
        ctx.stroke();
        ctx.closePath();
      }
    }
  }

  draw(ctx) {
    // const fontSize = 700;

    // ctx.textAlign = "center";
    // ctx.textBaseline = "middle";
    // ctx.font = `700 ${fontSize}px system-ui`;

    // const x = window.innerWidth * 0.5;
    // const y = window.innerHeight * 0.5;

    // ctx.fillStyle = "#000";
    // ctx.fillText(this.text, x, y);

    // path
    ctx.fillStyle = "red";
    ctx.beginPath();
    for (let i = 0; i < this.word.length; i++) {
      const w = this.word[i];

      ctx.arc(w.x, w.y, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.closePath();
    }
  }
}
