import "./index.scss";
import { Canvas } from "./canvas";
import { useEffect, useRef } from "react";

const MetaBall = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

      const c = new Canvas(canvas, ctx);
      c.draw();

      window.addEventListener("resize", () => {
        c.resize();
        c.draw();
      });

      return () => {
        window.removeEventListener("resize", () => {
          c.resize();
          c.draw();
        });
      };
    }
  }, []);
  return (
    <div className="wrap">
      <canvas id="canvas" ref={canvasRef}></canvas>
    </div>
  );
};

export default MetaBall;
