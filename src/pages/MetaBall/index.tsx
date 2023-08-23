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

      c.bind();
      c.resize();
      c.init();
      c.draw();

      return () => c.destroy();
    }
  }, []);
  return (
    <div className="wrap">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default MetaBall;
