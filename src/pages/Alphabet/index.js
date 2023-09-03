import { Word } from "./Word.js";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const mouse = {
  isClick: false,
};
let a, c, e, r;
let clickTimeStamp = 0;

const resize = () => {
  const ratio = devicePixelRatio;

  canvas.width = innerWidth * ratio;
  canvas.height = innerHeight * ratio;

  canvas.style.width = `${innerWidth}px`;
  canvas.style.height = `${innerHeight}px`;

  ctx.scale(ratio, ratio);

  a = new Word({
    text: "a",
    isImage: false,
  });

  c = new Word({
    text: "C",
    isImage: false,
  });

  e = new Word({
    text: "e",
    isImage: false,
  });

  r = new Word({
    text: "r",
    isImage: false,
  });
};

const onClick = () => {
  mouse.isClick = true;

  clickTimeStamp = performance.now();
};

const animate = (time) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (mouse.isClick) {
    const deltaTime = Math.abs(time - clickTimeStamp);
    a.update(ctx, deltaTime);
    c.update(ctx, deltaTime);
    r.update(ctx, deltaTime);
    e.update(ctx, deltaTime);
  }

  a.draw(ctx);
  c.draw(ctx);
  e.draw(ctx);
  r.draw(ctx);

  const fontSize = 180;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = `700 ${fontSize}px system-ui`;
  const x = window.innerWidth * 0.5;
  const y = window.innerHeight * 0.5;
  ctx.fillStyle = "#000";
  ctx.fillText("Creative Dion", x, y);

  requestAnimationFrame((time) => animate(time));
};

resize();
animate();

window.addEventListener("click", onClick);
window.addEventListener("resize", resize);
