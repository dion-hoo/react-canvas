import { Word } from "./Word.js";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const mouse = {
  isClick: false,
};
let word;
let clickTimeStamp = 0;

const resize = () => {
  const ratio = devicePixelRatio;

  canvas.width = innerWidth * ratio;
  canvas.height = innerHeight * ratio;

  canvas.style.width = `${innerWidth}px`;
  canvas.style.height = `${innerHeight}px`;

  ctx.scale(ratio, ratio);

  word = new Word({
    text: "A",
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
    word.update(ctx, deltaTime);
  }

  word.draw(ctx);

  requestAnimationFrame((time) => animate(time));
};

resize();
animate();

window.addEventListener("click", onClick);
window.addEventListener("resize", resize);
