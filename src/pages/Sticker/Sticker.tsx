import classNames from "classnames/bind";

import { useRef, useEffect } from "react";

import { Canvas } from "./Canvas";

import styles from "./Sticker.module.scss";

const cx = classNames.bind(styles);

const Sticker = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (canvasRef.current && bannerRef.current) {
      const canvasElement = canvasRef.current;
      const ctx = canvasElement.getContext("2d");
      const banner = bannerRef.current;

      if (ctx) {
        const canvas = new Canvas(canvasElement, ctx, banner);

        canvas.eventListener();
        canvas.resize();
        canvas.animate();

        return () => {
          canvas.destroy();
        };
      }
    }
  }, []);

  return (
    <div className={cx("Sticker")}>
      <div className={cx("Sticker__banner")} ref={bannerRef}></div>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default Sticker;
