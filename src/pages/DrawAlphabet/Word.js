import { Pattern } from "./Pattern.js";
import { A } from "./words/A.js";

export class Word {
  constructor(text, width, height, isImage = false) {
    this.text = text;
    this.width = width;
    this.height = height;
    this.index = 0;
    this.ratio = 0;
    this.points = [];
    this.patternPoint = [];

    this.image = new Image();
    this.image.src = "../../../assets/img/image05.png";
    this.isImage = isImage;
    this.isLoad = false;

    this.fps = 10;
    this.time = 200;
    this.fpsTime = this.time / this.fps;

    this.loaded();
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
      (now > this.fpsTime && this.index < this.points.length - 1)
    ) {
      this.prevTime = t;
      this.init = false;

      this.ratio = (t - now * this.index) / this.time;

      if (!this.word.excloudPoints.includes(this.index)) {
        const pattern = new Pattern(this.index, this.points);
        this.patternPoint.push(pattern.draw(this.ratio));
      }
    }

    this.drawImage(ctx);
  }

  loaded() {
    this.image.onload = () => {
      this.isLoad = true;
    };
  }

  drawImage(ctx) {
    for (let i = 0; i < this.patternPoint.length; i++) {
      const cx = this.patternPoint[i].x;
      const cy = this.patternPoint[i].y;

      if (this.isImage) {
        if (this.isLoad) {
          ctx.drawImage(
            this.image,
            0,
            0,
            this.image.width,
            this.image.height,
            cx - 25,
            cy - 50,
            50,
            50
          );
        }
      } else {
        ctx.beginPath();

        const index = i - 1 < 0 || i === 36 ? i : i - 1;

        ctx.lineWidth = 4;
        ctx.strokeStyle = "#000";

        ctx.moveTo(this.patternPoint[index].x, this.patternPoint[index].y);
        ctx.lineTo(cx, cy);
        ctx.stroke();
        ctx.closePath();
      }
    }
  }

  draw(ctx) {
    const fontSize = 600;

    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = `700 ${fontSize}px system-ui`;

    const x = window.innerWidth * 0.5;
    const y = window.innerHeight * 0.5;

    // ctx.fillStyle = "#1c9";
    // ctx.fillText(this.text, x, y);

    this.word = new A(this.width, this.height);
    this.points = this.word.coord;

    // path

    ctx.fillStyle = "red";

    ctx.beginPath();
    ctx.arc(this.points[0].x, this.points[0].y, 4, 0, Math.PI * 2);
    for (let i = 1; i < this.points.length; i++) {
      const w = this.points[i];

      ctx.arc(w.x, w.y, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.closePath();
    }
  }
}
