import { Stickers } from "./Stickers";

export const Canvas = (
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  banner: HTMLDivElement
) => {
  const mouse = {
    isDown: false,
    offsetX: 0,
    offsetY: 0,
    moveX: 0,
    moveY: 0,
  };
  let stickers: Stickers | null = null;

  const onDown = (event: PointerEvent) => {
    mouse.isDown = true;

    mouse.offsetX = event.clientX;
    mouse.offsetY = event.clientY;
  };

  const onMove = (event: PointerEvent) => {
    if (mouse.isDown) {
      mouse.moveX = event.clientX - mouse.offsetX;
      mouse.moveY = event.clientY - mouse.offsetY;

      mouse.offsetX = event.clientX;
      mouse.offsetY = event.clientY;
    }
  };

  const onUp = () => {
    mouse.isDown = false;
  };

  const resize = () => {
    const width = banner.clientWidth;
    const height = banner.clientHeight;
    const cetnerX = window.innerWidth / 2 - width / 2;
    const centerY = window.innerHeight / 2 - height / 2;

    const ratio = devicePixelRatio;

    canvas.width = window.innerWidth * ratio;
    canvas.height = window.innerHeight * ratio;

    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    ctx.scale(ratio, ratio);

    stickers = new Stickers(cetnerX, centerY, width, height);
  };

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    mouse.moveX *= 0.5;
    mouse.moveY *= 0.5;

    if (stickers) {
      stickers.draw(ctx, mouse.moveX, mouse.moveY);
    }

    requestAnimationFrame(animate.bind(this));
  };

  const eventListener = () => {
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("resize", resize);
  };

  const destroy = () => {
    window.removeEventListener("pointerdown", onDown);
    window.removeEventListener("pointermove", onMove);
    window.removeEventListener("pointerup", onUp);
    window.removeEventListener("resize", resize);
  };

  eventListener();

  return {
    resize,
    animate,
    destroy,
  };
};
