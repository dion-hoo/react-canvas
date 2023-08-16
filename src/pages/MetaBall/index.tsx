import { useEffect, useRef } from "react";
import "./MetaBall.scss";
import { Canvas } from "./canvas";

const MetaBall = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d") as CanvasRenderingContext2D;

      const c = new Canvas(canvas, context);

      c.resize();
      c.init();
      c.draw();

      // window.addEventListener("resize", c.resize.bind(c));
      // return () => {
      //   window.removeEventListener("resize", c.resize.bind(c));
      // };
    }
  }, []);
  return (
    <div className="wrap">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default MetaBall;
