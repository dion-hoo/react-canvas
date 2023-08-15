export class Point {
  index: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  angle: number;
  active: boolean;
  rgb: number;
  text: string;

  constructor(
    index: number,
    x: number,
    y: number,
    radius: number,
    text: string
  ) {
    this.index = index;
    this.x = x;
    this.y = y;
    this.vx = Math.random() * 3 - 1.5;
    this.vy = Math.random() * 3 - 1.5;
    this.radius = radius;
    this.angle = 0;
    this.active = false;
    this.rgb = 0x000000;
    this.text = text;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
  }

  windowCoolide() {
    this.coolideArea(this.radius);
  }

  coolideArea(radius: number) {
    if (this.x < radius || this.x > window.innerWidth - radius) {
      this.vx *= -1;
    }

    if (this.y < radius || this.y > window.innerHeight - radius) {
      this.vy *= -1;
    }
  }

  drawStar(
    ctx: CanvasRenderingContext2D,
    cx: number,
    cy: number,
    spikes: number,
    outerRadius: number,
    innerRadius: number
  ) {
    let rot = (Math.PI / 2) * 3;
    let x = cx;
    let y = cy;
    let step = Math.PI / spikes;

    ctx.moveTo(cx, cy - outerRadius);

    for (let i = 0; i < spikes; i++) {
      x = cx + Math.cos(rot) * outerRadius;
      y = cy + Math.sin(rot) * outerRadius;
      ctx.lineTo(x, y);
      rot += step;

      x = cx + Math.cos(rot) * innerRadius;
      y = cy + Math.sin(rot) * innerRadius;
      ctx.lineTo(x, y);
      rot += step;
    }

    ctx.lineTo(cx, cy - outerRadius);
  }

  draw(ctx: CanvasRenderingContext2D) {
    this.rgb = 0xf3316e;
    this.rgb *= Math.random() * 10;

    const r = (this.rgb >> 16) & 0xff; // 여기서 red만 추출
    const g = (this.rgb >> 8) & 0xff; // green만 추출
    const b = this.rgb & 0xff; // blue만 추출
    const color = `rgb(${r} ${g} ${b})`;

    ctx.beginPath();
    if (this.active) {
      ctx.fillStyle = color;

      // star
      this.drawStar(ctx, this.x, this.y, Math.random() * 3 + 125, 2, 80);
    } else {
      ctx.fillStyle = color;
      ctx.font = "800 40px system-ui";
      ctx.fillText(this.text, this.x, this.y);
    }

    ctx.fill();
    ctx.closePath();
  }
}
