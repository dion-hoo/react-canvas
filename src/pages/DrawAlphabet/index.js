import { Polygon } from "./Polygon.js";
import { Word } from "./Word.js";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const mouse = {
  isDown: false,
  isClick: false,
  mouseX: 0,
  mouseY: 0,
};
let polygon;
let word;
let clickTimeStamp = 0;

const resize = () => {
  const ratio = devicePixelRatio;

  canvas.width = innerWidth * ratio;
  canvas.height = innerHeight * ratio;

  canvas.style.width = `${innerWidth}px`;
  canvas.style.height = `${innerHeight}px`;

  ctx.scale(ratio, ratio);

  const x = window.innerWidth * 0.5;
  const y = window.innerHeight * 0.5;
  const sides = 3;
  const radius = 300;

  polygon = new Polygon(x, y, sides, radius);

  const regex = /[^0-9]/g;
  const width = Number(canvas.style.width.replace(regex, ""));
  const height = Number(canvas.style.height.replace(regex, ""));

  word = new Word("A", width, height, false);
};

const onDown = (event) => {
  mouse.isDown = true;

  mouse.mouseX = event.clientX;
  mouse.mouseY = event.clientY;
};

const onMove = (event) => {
  if (mouse.isDown) {
    mouse.mouseX = event.clientX;
    mouse.mouseY = event.clientY;
  }
};

const onUp = () => {
  mouse.isDown = false;
};

const onClick = () => {
  mouse.isClick = true;

  clickTimeStamp = performance.now();
};

const animate = (time) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // polygon.draw(ctx);
  // polygon.update(ctx);

  word.draw(ctx);
  if (mouse.isClick) {
    const deltaTime = Math.abs(time - clickTimeStamp);
    word.update(ctx, deltaTime);
  }

  requestAnimationFrame((time) => animate(time));
};

resize();
animate();

window.addEventListener("pointerdown", onDown);
window.addEventListener("pointermove", onMove);
window.addEventListener("pointerup", onUp);
window.addEventListener("click", onClick);
window.addEventListener("resize", resize);
