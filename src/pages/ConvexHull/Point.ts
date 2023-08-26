interface boundaryType {
  x: number;
  y: number;
}

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
  inside: boolean;

  constructor(index: number, x: number, y: number, radius: number, text: string) {
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
    this.inside = false;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
  }

  windowCoolide(boundary: boundaryType[] | undefined) {
    this.coolideArea(this.radius, boundary);
  }

  coolideArea(radius: number, boundary: boundaryType[] | undefined) {
    if (boundary) {
      let isInside = false;

      // Ray casting Algorithm
      for (let i = 0, j = boundary.length - 1; i < boundary.length; j = i++) {
        const x1 = boundary[i].x;
        const y1 = boundary[i].y;

        const x2 = boundary[j].x;
        const y2 = boundary[j].y;

        const x = this.x < x1 + ((this.y - y1) / (y2 - y1)) * (x2 - x1);
        const y = this.y < y1 !== this.y < y2;
        const intersect = x && y;

        if (intersect) {
          isInside = !isInside;
        }
      }

      if (isInside) {
        this.inside = true;
      } else {
        if (this.inside) {
          this.vx *= -1;
          this.vy *= -1;
        } else {
          if (this.x < radius || this.x > window.innerWidth - radius) {
            this.vx *= -1;
          }
          if (this.y < radius || this.y > window.innerHeight - radius) {
            this.vy *= -1;
          }
        }
      }
    }
  }

  star(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    sides: number,
    innerRadius: number,
    outerRadius: number
  ) {
    const angle = (Math.PI * 2) / sides;

    let px, py;

    for (let i = 0; i < sides; i++) {
      px = x + Math.cos(angle * i) * outerRadius;
      py = y + Math.sin(angle * i) * outerRadius;

      ctx.lineTo(px, py);

      px = x + Math.cos(angle / 2 + angle * i) * innerRadius;
      py = y + Math.sin(angle / 2 + angle * i) * innerRadius;

      ctx.lineTo(px, py);
    }
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
      this.star(ctx, this.x, this.y, 200, 1, 50);
    } else {
      ctx.fillStyle = color;
      ctx.font = '800 40px system-ui';
      ctx.fillText(this.text, this.x, this.y);
    }

    ctx.fill();
    ctx.closePath();
  }
}
