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
    }
  }, []);
  return (
    <div className="wrap">
      <h1>Convex Hull을 이용한 울타리</h1>
      <canvas id="canvas" ref={canvasRef}></canvas>
    </div>
  );
};

export default MetaBall;
