import { useRef, useEffect } from 'react';
import classNames from 'classnames/bind';

import { Canvas } from './canvas';
import styles from './index.module.scss';

const cx = classNames.bind(styles);

const Sticker = () => {
  const CanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (CanvasRef.current) {
      const canvas = CanvasRef.current;
      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

      const c = new Canvas(canvas, ctx);

      c.init();
      c.resize();
      c.bind();
      c.draw();

      window.addEventListener('resize', c.resize.bind(c));

      return () => {
        c.destory();
        window.removeEventListener('resize', c.resize.bind(c));
      };
    }
  }, [CanvasRef]);

  return (
    <div className={cx('wrap')}>
      <canvas id="canvas" ref={CanvasRef}></canvas>
    </div>
  );
};

export default Sticker;
