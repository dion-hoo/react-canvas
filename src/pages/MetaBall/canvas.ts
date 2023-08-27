import WebFont from 'webfontloader';

import { Circle } from './Circle';
import { Color } from './Color';
import { Font } from './Font';

export class Canvas {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  mouse: {
    index: number | null;
    isDown: boolean;
    isClick: boolean;
    offsetX: number;
    offsetY: number;
  };

  circles: Circle[];
  fonts: Font | null;
  fps: number;
  fpsTime: number;
  currentframe: number;
  word: Array<{
    text: string;
    color: string;
  }>;

  colorIndex: number;

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.mouse = {
      index: null,
      isDown: false,
      isClick: false,
      offsetX: 0,
      offsetY: 0,
    };
    this.circles = [];
    this.fonts = null;
    this.fps = 4.1;
    this.fpsTime = 1000 / this.fps;
    this.currentframe = 0;

    this.colorIndex = 0;
    this.word = [
      {
        text: 'A',
        color: '#f38138',
      },
      {
        text: 'B',
        color: '#135b8f',
      },
      {
        text: 'C',
        color: '#66648b',
      },
      {
        text: 'D',
        color: '#1d4851',
      },
      {
        text: 'E',
        color: '#122f6e',
      },
      {
        text: 'F',
        color: '#0095fa',
      },
      {
        text: 'G',
        color: '#896b70',
      },
      {
        text: 'H',
        color: '#939597',
      },
    ];

    WebFont.load({
      google: {
        families: ['Hind:700'],
      },
    });
  }

  bind() {
    window.addEventListener('click', this.onClick.bind(this));
    window.addEventListener('pointerdown', this.onDown.bind(this));
    window.addEventListener('pointermove', this.onMove.bind(this));
    window.addEventListener('pointerup', this.onUp.bind(this));

    window.addEventListener('resize', this.resize.bind(this));
  }

  destroy() {
    window.removeEventListener('click', this.onClick.bind(this));
    window.removeEventListener('pointerdown', this.onDown.bind(this));
    window.removeEventListener('pointermove', this.onMove.bind(this));
    window.removeEventListener('pointerup', this.onUp.bind(this));

    window.removeEventListener('resize', this.resize.bind(this));
  }

  init() {
    this.circles = [];

    this.makeFont();
    this.makeCircle(30);
  }

  makeFont() {
    this.fonts = new Font(this.ctx, this.word);
  }

  makeCircle(length: number) {
    for (let i = 0; i < length; i++) {
      const radius = 70;
      const x = Math.random() * (this.canvas.width - radius * 2) + radius;
      const y = Math.random() * (this.canvas.height - radius * 2) + radius;

      const circle = new Circle(this.ctx, i, x, y, radius);

      this.circles.push(circle);
    }
  }

  resize() {
    const ratio = window.devicePixelRatio;

    this.canvas.width = window.innerWidth * ratio;
    this.canvas.height = window.innerHeight * ratio;

    this.canvas.style.width = `${window.innerWidth}px`;
    this.canvas.style.height = `${window.innerHeight}px`;

    this.ctx.scale(ratio, ratio);
  }

  onClick() {
    this.mouse.isClick = true;
  }

  onDown(event: MouseEvent) {
    this.mouse.isDown = true;

    this.mouse.offsetX = event.clientX;
    this.mouse.offsetY = event.clientY;

    this.circles.forEach((c) => {
      const dx = c.x - this.mouse.offsetX;
      const dy = c.y - this.mouse.offsetY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < c.radius) {
        this.mouse.index = c.index;

        c.vx2 = 0;
        c.vy2 = 0;
      }
    });
  }

  onMove(event: MouseEvent) {
    if (this.mouse.isDown) {
      const { index } = this.mouse;

      if (index ?? index === 0) {
        this.circles[index].x = this.circles[index].x + event.clientX - this.mouse.offsetX;
        this.circles[index].y = this.circles[index].y + event.clientY - this.mouse.offsetY;

        this.mouse.offsetX = event.clientX;
        this.mouse.offsetY = event.clientY;
      }
    }
  }

  onUp() {
    const { index } = this.mouse;
    this.mouse.isDown = false;

    if (index ?? index === 0) {
      this.circles[index].vx2 = Math.random() * 1 - 0.5;
      this.circles[index].vy2 = Math.random() * 1 - 0.5;
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // font
    this.fonts?.draw(this.mouse.isClick, this.colorIndex);

    this.circles.forEach((circle) => {
      if (this.mouse.isClick) {
        circle.update(this.mouse.isClick);
        circle.stickness(this.circles);
      }

      const fillStyle = new Color(this.ctx, this.word, this.colorIndex);

      // difference 확정
      circle.fillStyle = this.mouse.isClick ? fillStyle.getColor(0, 0, 0, 'difference') : '#222';

      circle.draw(this.ctx);
    });

    if (this.currentframe > this.fpsTime) {
      this.colorIndex += 1;
      this.colorIndex %= this.word.length;

      this.currentframe = 0;
    }

    this.currentframe++;

    requestAnimationFrame(this.draw.bind(this));
  }
}
